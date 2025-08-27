import React from 'react'
import { ReactFlow, Controls, MiniMap, Background} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import TurboNode from './TurboNode';

const nodeTypes = {
    turbo: TurboNode,
   
}

const RoadmapCanva = (
    {initialNodes, initialEdges}:any
) => {
//     const initialNodes = [
//   { id: 'n1', position: { x: 0, y: 0 }, data: { label: ' 1' } },
//   { id: 'n2', position: { x: 0, y: 100 }, data: { label: ' 2' } },
// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
    >
        <Controls/>
        <MiniMap/>
        {/* @ts-ignore */}
        <Background variant='dots' gap={12} size={1}/>
    </ReactFlow>
    </div>
  )
}

export default RoadmapCanva