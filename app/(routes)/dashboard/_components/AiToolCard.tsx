'use client'
import { Button } from '@/components/ui/button'
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import ResumeUploadModal from './ResumeUploadModal';
import { useState } from 'react';
import RoadmapGeneratorModal from './RoadmapGeneratorModal';

export interface TOOL {
    name: string,
    desc: string,
    icon: string,
    button: string,
    path: string,
}

type AIToolProps = {
    tool: TOOL
}
const AiToolCard = ({tool}: AIToolProps) => {
  const id = uuidv4();
const router = useRouter()
const [openResumeUpload, setOpenResumeUpload] = useState(false);
const [openRoadmapModal, setOpenRoadmapModal] = useState(false)

const onClickButton = async() => {
  //open resume analyzer
  if (tool.name == 'AI Resume Analyzer')
  {
    setOpenResumeUpload(true)
    return;
  }
//opens roadmap generator 
if (tool.path == '/ai-tools/ai-roadmap-agent')
{
  setOpenRoadmapModal(true)
  return;
}

//Create New record to History Table in the db
const result = await axios.post('/api/history',{
  recordId: id,
  content: [],
  aiAgentType: tool.path
});
console.log(result);
router.push(tool.path+'/'+id)
}

  return (
    <div className='p-4 my-5 bg-blue-300 rounded-xl'>
        <Image src={tool.icon} width={40} height={30} alt={tool.name} />
        <h2 className='font-bold mt-2'>{tool.name}</h2>
        <p className='text-gray-500 mb-5'>{tool.desc}</p>
        {/* <Link href={tool.path+'/'+id}> */}
        <Button onClick={onClickButton} className='bg-red-500'>{tool.button}</Button>
        {/* </Link> */}
        <ResumeUploadModal openResumeUpload={openResumeUpload} setOpenResumeModal={setOpenResumeUpload}/>
        <RoadmapGeneratorModal openRoadmapModal={openRoadmapModal} setOpenRoadmapModal={() => setOpenRoadmapModal(false)}/>
    </div>
  )
}

export default AiToolCard