"use client";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Report from "./_components/Report";
import { ArrowLeftCircle } from "lucide-react";

const AiResumeAnalyzer = () => {
  const { recordid } = useParams();
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [aiReport, setAiReport] = useState<any>(null);
  const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Prompt or load saved user email
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
      setUserEmail(savedEmail);
    } else {
      const email = prompt("Please enter your email to view your report:");
      if (email) {
        localStorage.setItem("userEmail", email);
        setUserEmail(email);
      }
    }
  }, []);

  useEffect(() => {
    if (recordid && userEmail) {
      GetResumeAnalyzerRecord();
    }
  }, [recordid, userEmail]);

  const GetResumeAnalyzerRecord = async () => {
    try {
      setLoading(true);
      const result = await axios.get("/api/history", {
        params: { recordId: recordid, userEmail },
      });

      if (!result.data) {
        alert("No data found for this record.");
        return;
      }

      setPdfUrl(result.data?.metaData || null);
      setAiReport(result.data?.content || null);
    } catch (error) {
      console.error("Error fetching resume data:", error);
      alert("Failed to load your resume report. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!userEmail) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-500 text-sm">
        Please enter your email to view your report.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[80vh] text-gray-500 text-sm">
        Loading your resume report...
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-5 grid-cols-1 h-[83vh]">
      {/* Left side: AI Report */}
      <div className="col-span-2 overflow-y-auto border-r h-full">
        <div
          onClick={router.back}
          className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:text-indigo-600"
        >
          <ArrowLeftCircle className="w-5 h-5" />
          <span className="font-medium text-sm">Back</span>
        </div>
        <Report aiReport={aiReport} />
      </div>

      {/* Right side: Resume Preview */}
      <div className="col-span-3 overflow-y-auto p-4 h-full">
        <h2 className="font-bold text-2xl mb-5">Resume Preview</h2>
        {pdfUrl ? (
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            width="100%"
            height="100%"
            className="min-w-lg"
            style={{
              border: "none",
              minHeight: "1000px",
            }}
          />
        ) : (
          <p className="text-gray-500">No resume file available for this record.</p>
        )}
      </div>
    </div>
  );
};

export default AiResumeAnalyzer;
