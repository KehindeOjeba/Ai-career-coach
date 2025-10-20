"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Send, ArrowLeftCircle } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type Message = {
  content: string;
  role: string;
  type: string;
};

const AiChat = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [userEmail, setUserEmail] = useState<string>(""); // 👈 added
  const { chatid } = useParams();
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Prompt user for their email once (optional approach)
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setUserEmail(savedEmail);
    } else {
      const email = prompt("Please enter your email to continue:");
      if (email) {
        localStorage.setItem("userEmail", email);
        setUserEmail(email);
      }
    }
  }, []);

  useEffect(() => {
    chatid && GetMessageList();
  }, [chatid]);

  const GetMessageList = async () => {
    const result = await axios.get("/api/history?recordId=" + chatid);
    setMessageList(result?.data?.content || []);
  };

  const onSend = async () => {
    if (!userInput.trim() || !userEmail) return;
    setLoading(true);
    setMessageList((prev) => [
      ...prev,
      { content: userInput, role: "user", type: "text" },
    ]);
    const input = userInput;
    setUserInput("");

    try {
      const result = await axios.post("/api/ai-career-chat-agent", {
        userInput: input,
        userEmail, // 👈 send user email to backend
      });

      setMessageList((prev) => [...prev, result?.data]);
    } catch (error) {
      console.error(error);
      setMessageList((prev) => [
        ...prev,
        { content: "Something went wrong. Please try again.", role: "system", type: "error" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messageList.length > 0) updateMessageList();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const updateMessageList = async () => {
    await axios.put("/api/history", {
      content: messageList,
      recordId: chatid,
      userEmail, // 👈 also include user email if your backend saves per user
    });
  };

  const onNewChat = async () => {
    const id = uuidv4();
    await axios.post("/api/history", { recordId: id, content: [], userEmail });
    router.replace("/ai-tools/ai-chat/" + id);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="flex flex-col h-[85vh] overflow-auto bg-white">
      <div onClick={router.back} className="cursor-pointer">
        <ArrowLeftCircle />
      </div>

      <header className="flex items-center justify-between md:px-12 p-0 mb-3 ">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-lg text-gray-800">
            AI Career Q/A Chat
          </h2>
        </div>
        <Button
          onClick={onNewChat}
          className="text-sm font-medium bg-indigo-100 text-indigo-700 hover:bg-indigo-200 rounded-full"
        >
          + New Chat
        </Button>
      </header>

      <main className="flex-1 flex flex-col px-4 md:px-24 lg:px-36 xl:px-48 py-6 overflow-y-auto">
        {messageList?.length <= 0 && (
          <div className="text-center text-gray-400 mt-10 text-sm">
            Start a conversation — ask about roles, interviews, or growth paths.
          </div>
        )}

        {messageList?.map((message, index) => (
          <div key={index}>
            <div
              className={`flex mb-2 ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[85%] md:max-w-[70%] ${
                  message.role === "user"
                    ? "bg-indigo-100 text-gray-900"
                    : "bg-gray-50 text-gray-900"
                }`}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>

            {loading && messageList.length - 1 === index && (
              <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-gray-600 text-sm">
                <LoaderCircle className="animate-spin" /> Thinking...
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </main>

      <div
        className="fixed bottom-4 left-4 right-4
          md:sticky md:bottom-0 md:left-0 md:right-0 md:mx-auto md:max-w-3xl md:mb-0"
      >
        <div
          className="flex items-center gap-3
            w-full bg-white border border-gray-200
            rounded-full shadow-sm px-3 py-2
            md:px-4 md:py-3"
        >
          <Input
            placeholder="Ask anything about your career..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            className="flex-1 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-sm md:text-base placeholder-gray-400 text-gray-800 w-[300px]"
          />

          <Button
            onClick={onSend}
            disabled={loading}
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 w-10 h-10 flex items-center justify-center"
          >
            {loading ? (
              <LoaderCircle className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AiChat;
