import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import AiTools from './_components/AiToolsList'
import History from './_components/History'
function Dashboard() {
    return (
        <div>
            <WelcomeBanner/>
            <br/>
            <AiTools/>
           <History/>
        </div>
    )
}

export default Dashboard




// "use client";

// import { motion } from "framer-motion";
// import { Briefcase, FileText, UserCheck, Compass, BarChart, Lightbulb } from "lucide-react";

// function Dashboard() {
//   const tools = [
//     {
//       title: "Resume Optimizer",
//       desc: "AI-powered feedback to make your CV stand out.",
//       icon: FileText,
//       color: "from-emerald-500 to-green-600"
//     },
//     {
//       title: "Interview Simulator",
//       desc: "Practice interviews with instant AI feedback.",
//       icon: UserCheck,
//       color: "from-indigo-500 to-purple-600"
//     },
//     {
//       title: "Career Path Finder",
//       desc: "Get guidance on the best next step in your career.",
//       icon: Compass,
//       color: "from-blue-500 to-cyan-600"
//     },
//     {
//       title: "Cover Letter Generator",
//       desc: "Generate personalized cover letters for each job.",
//       icon: Briefcase,
//       color: "from-pink-500 to-rose-600"
//     },
//     {
//       title: "Job Market Insights",
//       desc: "Stay ahead with real-time hiring and salary trends.",
//       icon: BarChart,
//       color: "from-orange-500 to-yellow-600"
//     },
//     {
//       title: "Skill Gap Analyzer",
//       desc: "Find missing skills and get learning suggestions.",
//       icon: Lightbulb,
//       color: "from-teal-500 to-emerald-600"
//     }
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-slate-900 text-white py-20 text-center">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mb-4"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           Explore AI-Powered Tools
//         </motion.h2>
//         <motion.p
//           className="text-slate-300 max-w-2xl mx-auto text-lg"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.7 }}
//         >
//           From resumes to interviews, supercharge your career with the right tools at your fingertips.
//         </motion.p>
//       </section>

//       {/* Tools Grid */}
//       <section className="py-16 container mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-10">
//           {tools.map((tool, idx) => (
//             <motion.div
//               key={idx}
//               className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition group"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.15, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Gradient Circle */}
//               <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${tool.color} flex items-center justify-center`}>
//                 <tool.icon className="text-white w-8 h-8" />
//               </div>
//               <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
//               <p className="text-slate-600 mb-6">{tool.desc}</p>
//               <a
//                 href="#"
//                 className="px-4 py-2 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-700 transition"
//               >
//                 Try Now
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Dashboard



// "use client";

// import { motion } from "framer-motion";
// import { Briefcase, FileText, UserCheck, Compass, BarChart, Lightbulb } from "lucide-react";

// function Dashboard() {
//   const tools = [
//     {
//       title: "Resume Optimizer",
//       desc: "AI-powered feedback to make your CV stand out.",
//       icon: FileText,
//       color: "from-emerald-400 to-emerald-600"
//     },
//     {
//       title: "Interview Simulator",
//       desc: "Mock interviews with instant AI feedback.",
//       icon: UserCheck,
//       color: "from-indigo-400 to-indigo-600"
//     },
//     {
//       title: "Career Path Finder",
//       desc: "Discover the best next step in your career.",
//       icon: Compass,
//       color: "from-blue-400 to-blue-600"
//     },
//     {
//       title: "Cover Letter Generator",
//       desc: "Tailored cover letters for every job.",
//       icon: Briefcase,
//       color: "from-pink-400 to-rose-600"
//     },
//     {
//       title: "Job Market Insights",
//       desc: "Real-time hiring trends & salary data.",
//       icon: BarChart,
//       color: "from-orange-400 to-yellow-500"
//     },
//     {
//       title: "Skill Gap Analyzer",
//       desc: "Identify missing skills & get learning paths.",
//       icon: Lightbulb,
//       color: "from-teal-400 to-emerald-500"
//     }
//   ];

//   return (
//     <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen relative overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative py-24 text-center">
//         {/* Background blobs */}
//         <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600 opacity-30 blur-3xl rounded-full" />
//         <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-600 opacity-30 blur-3xl rounded-full" />

//         <motion.h2
//           className="text-4xl md:text-6xl font-bold mb-6 relative z-10"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Supercharge Your Career with AI
//         </motion.h2>
//         <motion.p
//           className="text-slate-300 max-w-2xl mx-auto text-lg relative z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Explore smart tools designed to help you land your dream job and grow your career.
//         </motion.p>
//       </section>

//       {/* Tools Grid */}
//       <section className="relative z-10 container mx-auto px-6 pb-24">
//         <div className="grid md:grid-cols-3 gap-10">
//           {tools.map((tool, idx) => (
//             <motion.div
//               key={idx}
//               className="relative backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-emerald-500/20 transition group"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.15, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {/* Gradient Icon Circle */}
//               <div
//                 className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-r ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition`}
//               >
//                 <tool.icon className="text-white w-10 h-10" />
//               </div>
//               <h3 className="text-2xl font-semibold mb-3">{tool.title}</h3>
//               <p className="text-slate-300 mb-6">{tool.desc}</p>
//               <a
//                 href="#"
//                 className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 font-medium transition"
//               >
//                 Try Now
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-8 text-center">
//         <p className="text-slate-400">© {new Date().getFullYear()} AI Career Chat Agent. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Dashboard