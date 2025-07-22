'use client'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AiResumeAnalyzer = () => {
    const {recordid} = useParams()
    const [pdfUrl, setPdfUrl] = useState();
    const [aiReport, setAiReport] = useState();

    useEffect(() => {
        recordid && GetResumeAnalyzerRecord()
    },[recordid])

    const GetResumeAnalyzerRecord = async () => {
        const result = await axios.get('/api/history?recordId=' + recordid)
        console.log(result.data);
        setPdfUrl(result.data?.metaData);
        setAiReport(result.data?.content)
    }
  return (
    <div> heloooooooo + {recordid}</div>
  )
}

export default AiResumeAnalyzer