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
      const hasSubsriptionEnabled = await has({ plan: 'pro'})
if(!hasSubsriptionEnabled) {
   const resultHistory = await axios.get('/api/history');
   const historyList = resultHistory.data;
   const isPresent = await historyList.find((item: any) => item?.aiAgentType == '/ai-tools/ai-roadmap-agent')
   router.push('/billing')
   if (isPresent) {
    return null
   }
}
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
          {loading? <Loader2Icon className="animate-spin"/>:  <SparkleIcon />} 
            Generate
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default RoadmapGeneratorModal;
