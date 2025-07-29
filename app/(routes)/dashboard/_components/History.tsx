"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import path from "path";
import React from "react";
import { useState, useEffect } from "react";
import { aiToolsList } from "./AiTools";

const History = () => {
  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    GetHistory();
  },[]);

  const GetHistory = async () => {
    const result = await axios.get("/api/history");
    console.log(result?.data);
    setUserHistory(result?.data);
  };
  console.log(userHistory,'history')
const GetAgentName = (path: string) => {
  const agent = aiToolsList.find(item => item.path == path);
  return agent
}
  return (
    <div className="mt-5 p-5 border rounded-xl">
      <h2 className="font-bold text-lg">Previous History</h2>
      <p>What you previously work on, you can find here</p>

      {userHistory?.length == 0 ? 
        <div className="flex items-center justify-center mt-5 flex-col">
          <Image alt="bulb" src={"/bulb.png"} width={50} height={50} />
          <h2>You do not have any history</h2>
          <Button className="mt-5">Explore AI Tools</Button>
        </div>
        : <div>
          {userHistory?.map((history: any, index: number) => (
            <div key={index}>
                <h2>{GetAgentName(history?.aiAgentType)?.name}</h2>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default History;
