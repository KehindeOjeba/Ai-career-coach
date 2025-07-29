'use client'

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import RoadmapCanva from "../_components/RoadmapCanva";
import RoadmapGeneratorModal from "@/app/(routes)/dashboard/_components/RoadmapGeneratorModal";

const RoadmapGeneratorAgent = () => {
  const {roadmapid} = useParams()
  const [roadmapDetails, setRoadmapDetails] = useState<any>();
const [openRoadmapModal, setOpenRoadmapModal] = useState(false)

  useEffect(() => {
    roadmapid && GetRoadmapDetails()
  },[roadmapid])

  const GetRoadmapDetails = async() => {
    const result = await axios.get('/api/history?recordId=' + roadmapid)
    console.log(result?.data);
    setRoadmapDetails(result?.data?.content)
  }
  console.log(roadmapDetails, 'deets')

   return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
      <div className="border rounded-xl p-5">
        <h2 className="font-bold text-2xl">{roadmapDetails?.roadmapTitle}</h2>
        <p className="mt-3 text-gray-500"><strong>Description:</strong><br/>{roadmapDetails?.description}</p>
        <h2 className="mt-5 font-medium text-blue-500"> Duration: {roadmapDetails?.duration}</h2>

        <Button className="w-full mt-5">+ Create Another Roadmap</Button>
      </div>
      <div className="md:col-span-2 w-full h-[80vh]">
    {roadmapDetails &&   <RoadmapCanva 
      initialNodes={roadmapDetails?.initialNodes} initialEdges={roadmapDetails?.initialEdges}
       />}
      </div>
       <RoadmapGeneratorModal openRoadmapModal={openRoadmapModal} setOpenRoadmapModal={() => setOpenRoadmapModal(false)}/>
    </div>
  )
}

export default RoadmapGeneratorAgent