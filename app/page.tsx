"use client"
import Logo from '../public/ResumeLogo.jpg'

import Image from "next/image";
import { motion} from 'framer-motion'


import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  // const user = useAuthContext();
  // console.log(user?.user)

  const { user } = useUser();

  // return (
  //   <div>
  //     <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
  //       <nav className="bg-red-700 relative  p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global" >
  //         <div className="flex items-center justify-between">
  //           <div>
  //             <Image src={Logo} alt="logo" width={100} height={100} />
  //           </div>
  //         </div>
  //         <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
  //           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer">

  //             {/* Clerk Authentication  */}
  //             {!user ? <SignInButton mode='modal'>
  //               <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500" >
  //                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
  //                 </svg>
  //                 Get Started
  //               </div>
  //             </SignInButton>
  //               :
  //               <UserButton />
  //             }
  //           </div>
  //         </div>
  //       </nav>
  //     </header>
  //     <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
  //       <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">




  //         <div className="mt-5 max-w-2xl text-center mx-auto">
  //           <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
  //             Build Something
  //             <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> With NextJs</span>
  //           </h1>
  //         </div>


  //         <div className="mt-5 max-w-3xl text-center mx-auto">
  //           <p className="text-lg text-gray-600 dark:text-neutral-400">
  //             Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality apps in seconds.</p>
  //         </div>


  //         <div className="mt-8 gap-3 flex justify-center">
  //           <a className="inline-flex justify-center items-center 
  //     gap-x-3 text-center bg-gradient-to-tl from-blue-600
  //      to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent cursor-pointer text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
  //             href="/dashboard">
  //             Get started
  //             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  //           </a>

  //         </div>



  //       </div>
  //     </div>


  //     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  //       <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-2">



  //         <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
  //           <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
  //             <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
  //           </div>
  //           <div className="mt-5">
  //             <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
  //             <p className="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
  //             <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
  //               Learn more
  //               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  //             </span>
  //           </div>
  //         </a>

  //         <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
  //           <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
  //             <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
  //           </div>
  //           <div className="mt-5">
  //             <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Free to Use</h3>
  //             <p className="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
  //             <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
  //               Learn more
  //               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  //             </span>
  //           </div>
  //         </a>

  //         <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
  //           <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
  //             <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
  //           </div>
  //           <div className="mt-5">
  //             <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">24/7 Support</h3>
  //             <p className="mt-1 text-gray-600 dark:text-neutral-400">Contact us 24 hours a day, 7 days a week</p>
  //             <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
  //               Learn more
  //               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
  //             </span>
  //           </div>
  //         </a>

  //       </div>
  //     </div>

  //   </div>
  // );

  // return (
  //   <div className="bg-slate-50 text-slate-900">
  //     {/* Navbar */}
  //     <header className="bg-white shadow">
  //       <div className="container mx-auto flex items-center justify-between py-4 px-6">
  //         <div>
  //              <Image src={Logo} alt="logo" width={60} height={60} />
  //              <span> AI - CCA</span>
  //           </div>
         
  //        <div>   {/* Clerk Authentication  */}
  //              {!user ? <SignInButton mode='modal'>
  //               <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500" >
  //               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  //                   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
  //                 </svg>
  //                 Get Started
  //               </div>
  //             </SignInButton>
  //               :
  //               <UserButton />
  //             }</div>
  //         {/* <a href="#get-started" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started</a> */}
  //       </div>
  //     </header>

  //     {/* Hero */}
  //     <section className="bg-slate-900 text-white py-20">
  //       <div className="container mx-auto text-center px-6">
  //         <h2 className="text-4xl md:text-5xl font-bold mb-4">
  //           Your AI-Powered Career Coach — Anytime, Anywhere
  //         </h2>
  //         <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
  //           Get instant, personalized career advice, resume feedback, and career roadmap from your AI assistant.
  //         </p>
  //         <a href="/dashboard" className="bg-orange-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-700">
  //           Start Free Trial
  //         </a>
  //       </div>
  //     </section>

  //     {/* Features */}
  //     <section id="features" className="py-16 bg-white">
  //       <div className="container mx-auto px-6">
  //         <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
  //         <div className="grid md:grid-cols-3 gap-8">
  //           {[
  //             { title: "Resume Feedback", desc: "Get AI-powered suggestions to improve your resume instantly." },
  //             // { title: "Interview Simulation", desc: "Practice interviews with real-time AI feedback." },
  //             { title: "Career Path Guidance", desc: "Discover the best career moves for your skills." },
  //             { title: "Job Market Insights", desc: "Stay updated on the latest trends and opportunities." }
  //           ].map((feature, idx) => (
  //             <div key={idx} className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition">
  //               <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
  //               <p className="text-slate-600">{feature.desc}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* Footer */}
  //     <footer className="bg-slate-900 text-slate-300 py-8">
  //       <div className="container mx-auto px-6 flex justify-between">
  //         <p>© {new Date().getFullYear()} AI Career Chat Agent. All rights reserved.</p>
         
  //       </div>
  //     </footer>
  //   </div>
  // );

    return (
    <div className="bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="bg-white shadow fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
         <div>
              <Image src={Logo} alt="logo" width={60} height={60} />
              <span> AI - CCA</span>
           </div>
         <div>   {/* Clerk Authentication  */}
               {!user ? <SignInButton mode='modal'>
                <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500" >
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Get Started
                </div>
              </SignInButton>
                :
                <UserButton />
              }</div>
          {/* <a href="#get-started" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">Get Started</a> */}
        </div>
      
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-[#3d2d07] via-[#1dbfec] to-[#11221b] text-white pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your AI-Powered Career Coach — Anytime, Anywhere
          </motion.h2>

          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get instant, personalized career advice, resume feedback, and interview preparation from your AI assistant.
          </motion.p>

          <motion.a
            href="/dashboard"
            className="inline-block bg-orange-600 px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.a>

      
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Resume Feedback", desc: "Get AI-powered suggestions to improve your resume instantly." },
             // { title: "Interview Simulation", desc: "Practice interviews with real-time AI feedback." },
              { title: "Career Path Guidance", desc: "Discover the best career moves for your skills." },
              { title: "Job Market Insights", desc: "Stay updated on the latest trends and opportunities." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-slate-50 p-6 rounded-xl shadow hover:shadow-lg transition border border-orange-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="container mx-auto px-6 flex justify-between">
          <p>© {new Date().getFullYear()} AI Career Chat Agent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

