import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { File, Loader, Loader2Icon, Sparkle } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
const ResumeUploadModal = ({openResumeUpload, setOpenResumeModal}: any) => {
    const [file, setFile] = useState<any>();
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const { has } = useAuth()

const onFileChange = (event:any) => {
    const file = event.target.files?.[0];
    if (file){
        console.log(file.name)
        setFile(file);
    }
}

const onUploadAndAnalyze = async () => {
     setLoading(true)
 const recordId =uuidv4();
 const formData = new FormData();
 formData.append('recordId', recordId);
 formData.append('resumeFile', file);
 //route to billing
 //@ts-ignore
const hasSubsriptionEnabled = await has({ plan: 'pro'})
if(!hasSubsriptionEnabled) {
   const resultHistory = await axios.get('/api/history');
   const historyList = resultHistory.data;
   const isPresent = await historyList.find((item: any) => item?.aiAgentType == '/ai-tools/ai-resume-analyzer')
   router.push('/billing')
   if (isPresent) {
    return null
   }
}

//Send FormData to backend server
const result = await axios.post('/api/ai-resume-agent', formData)
console.log(result.data)
setLoading(false)
router.push('/ai-tools/ai-resume-analyzer/'+recordId)
setOpenResumeModal(false);
}
    return (
   <Dialog open={openResumeUpload} onOpenChange={setOpenResumeModal}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Upload resume PDF file</DialogTitle>
      <DialogDescription>
       <div>
        <label htmlFor='resumeUpload' className='flex items-center flex-col justify-center p-7 border border-dashed rounded-xl hover:bg-slate-100 cursor-pointer'> 
            <File className='h-10 w-10'/>
            {file ? <h2 className='mt-3 text-blue-300'>{file?.name}</h2>:
            <h2 className='mt-3'> Click here to Upload PDF file</h2>} 
            </label>
            <input type='file' id='resumeUpload' className='hidden' accept='application/pdf' onChange={onFileChange}/>
       </div>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
        <Button variant={'outline'}>Cancel</Button>
        <Button disabled={!file || loading} onClick={onUploadAndAnalyze}> 
           {loading ? <Loader2Icon className='animate-spin'/> : <Sparkle/>} Upload Resume</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default ResumeUploadModal