import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAuth } from "@clerk/nextjs";
import axios from "axios";
import { Loader2Icon, SparkleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 } from "uuid";

const RoadmapGeneratorModal = ({
  openRoadmapModal,
  setOpenRoadmapModal,
}: any) => {
  const [userInput, setUserInput] = useState<string>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {has} = useAuth();

  const GenerateRoadmap = async () => {
    const roadmapId = v4();
    setLoading(true);
    try {
      //route to billing 
      //@ts-ignore
//       const hasSubsriptionEnabled = await has({ plan: 'pro'})
// if(!hasSubsriptionEnabled) {
//    const resultHistory = await axios.get('/api/history');
//    const historyList = resultHistory.data;
//    const isPresent = await historyList.find((item: any) => item?.aiAgentType == '/ai-tools/ai-roadmap-agent')
//    router.push('/billing')
//    if (isPresent) {
//     return null
//    }
// }
      const result = await axios.post("/api/ai-roadmap-agent", {
        roadmapId: roadmapId,
        userInput: userInput,
      });
      console.log(result.data)
      router.push('/ai-tools/ai-roadmap-agent/' + roadmapId)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <Dialog open={openRoadmapModal} onOpenChange={setOpenRoadmapModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Position/Skills to Generate Roadmap</DialogTitle>
          <DialogDescription asChild>
            <div className="mt-2">
              <Input
                placeholder="e.g Frontend Developer"
                onChange={(event) => setUserInput(event?.target?.value)}
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"outline"}>Cancel</Button>
          <Button onClick={GenerateRoadmap} disabled={loading || !userInput}>
          {loading? <Loader2Icon className="animate-spin"/> :  <SparkleIcon />} 
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default RoadmapGeneratorModal;




//  <div className="flex flex-col min-h-screen bg-white">
// {/* Top Navigation */}



// <main className="flex-1 flex flex-col items-center justify-center text-center px-6 pb-24 md:pb-0">
// <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
// What’s on the agenda today?
// </h2>


// {/* Desktop / large tablet centered input */}
// <div className="hidden md:flex items-center w-full max-w-2xl bg-white border border-gray-200 rounded-full shadow-sm px-4 py-3">
// <span className="text-gray-400 text-lg mr-3">+</span>
// <input
// type="text"
// value={value}
// onChange={(e) => setValue(e.target.value)}
// placeholder="Ask anything"
// className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-base"
// />
// <div className="flex items-center space-x-3 text-gray-400">
// <button aria-label="voice" className="hover:text-gray-600 focus:outline-none">
// {/* microphone icon (show when input empty) */}
// {value.length === 0 ? (
// <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// <path d="M10 12a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3z" />
// <path d="M5 9a5 5 0 0 0 10 0h1a6 6 0 0 1-12 0h1z" />
// </svg>
// ) : (
// <button aria-label="send" className="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
// <path d="M2.94 2.94a1.5 1.5 0 0 1 1.8-.16l12 7a1.5 1.5 0 0 1 0 2.52l-12 7A1.5 1.5 0 0 1 2 18.5V3.5c0-.4.16-.78.44-1.06z" />
// </svg>
// </button>
// )}
// </button>
// </div>
// </div>


// {/* Mobile input fixed to bottom */}
// <div className="md:hidden fixed left-0 right-0 bottom-4 px-4">
// <div className="mx-auto max-w-xl w-full flex items-center bg-white border border-gray-200 rounded-full shadow-sm px-3 py-2">
// <button className="flex-none w-10 h-10 rounded-full flex items-center justify-center text-gray-600 mr-3">
// <span className="text-2xl">+</span>
// </button>


// <input
// className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm"
// placeholder="Ask anything"
// value={value}
// onChange={(e) => setValue(e.target.value)}
// aria-label="chat input"
// />


// {/* microphone shown when input empty, send when there's text */}
// {value.length === 0 ? (
// <button aria-label="mic" className="flex-none w-10 h-10 rounded-full flex items-center justify-center text-gray-600">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
// <path d="M10 12a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v4a3 3 0 0 0 3 3z" />
// <path d="M5 9a5 5 0 0 0 10 0h1a6 6 0 0 1-12 0h1z" />
// </svg>
// </button>
// ) : (
// <button aria-label="send" className="flex-none w-10 h-10 rounded-full flex items-center justify-center bg-indigo-600 text-white">
// <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
// <path d="M2.94 2.94a1.5 1.5 0 0 1 1.8-.16l12 7a1.5 1.5 0 0 1 0 2.52l-12 7A1.5 1.5 0 0 1 2 18.5V3.5c0-.4.16-.78.44-1.06z" />
// </svg>
// </button>
// )}
// </div>
// </div>
// </main>
// </div>
