import ResumeUploadModal from "@/app/(routes)/dashboard/_components/ResumeUploadModal";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";
import React, { useState } from "react";

const Report = ({ aiReport }: any) => {

    const [openResumeUpload, setOpenResumeModal]= useState(false)
  const getStatusColor = (per: number) => {
    if (per < 60) return "red";
    if (per >= 60 && per <= 80) return "yellow";
    return "green";
  };

  const getBorderColor = (per: number) => {
    const color = getStatusColor(per);
    return `border-${color}-500`;
  };

  const getTextColor = (per: number) => {
    const color = getStatusColor(per);
    return `text-${color}-500`;
  };
  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-gray-800 gradient-component-text">
          AI Analysis Results
        </h2>

        <Button onClick={() => setOpenResumeModal(true)}>
          Re-analyze <Sparkle />
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-blue-200 transform hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
          <i className="fas fa-star text-yellow-500 mr-2"></i> Overall Score
        </h3>

        <div className="flex items-center justify-between mb-4">
          <span className="text-6xl font-extrabold text-blue-600">
            {aiReport?.overall_score} <span className="text-2xl">/100</span>
          </span>

          <div className="flex items-center">
            <i className="fas fa-arrow-up text-green-500 text-lg mr-2"></i>

            <span className="text-green-500 text-lg font-bold">
              {aiReport?.overall_feedback}
            </span>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: "85%" }}
          ></div>
        </div>

        <p className="text-gray-600 text-sm">{aiReport?.summary_comment}</p>
      </div>
      {/* sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {["contact_info", "experience", "education", "skills"].map(
          (sectionKey) => {
            const section = aiReport?.sections?.[sectionKey];
            const color = getStatusColor(section?.score);
            const borderColor = getBorderColor(section?.score);
            const textColor = getTextColor(section?.score);

            const iconMap: Record<string, string> = {
              contact_info: "fa-user-circle",
              experience: "fa-briefcase",
              education: "fa-graduation-cap",
              skills: "fa-lightbulb",
            };

            const titleMap: Record<string, string> = {
              contact_info: "Contact Info",
              experience: "Experience",
              education: "Education",
              skills: "Skills",
            };

            return (
              <div
                key={sectionKey}
                className={`bg-white rounded-lg shadow-md p-5 border ${borderColor} relative overflow-hidden group`}
              >
                <h4 className="text-lg font-semibold text-gray-700 mb-3">
                  <i
                    className={`fas ${iconMap[sectionKey]} text-gray-500 mr-2`}
                  ></i>
                  {titleMap[sectionKey]}
                </h4>

                <span className={`text-4xl font-bold ${textColor}`}>
                  {section?.score}
                </span>

                <p className="text-sm text-gray-600 mt-2">{section?.comment}</p>

                <div
                  className={`absolute inset-x-0 bottom-0 h-1 bg-${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            );
          }
        )}
        {/* <div className="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            <i className="fas fa-user-circle text-gray-500 mr-2"></i> Contact
            Info
          </h4>

          <span className="text-4xl font-bold highlight-text">{aiReport?.sections?.contact_info?.score}</span>

          <p className="text-sm text-gray-600 mt-2">
            {aiReport?.sections?.contact_info?.comment}
          </p>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div> */}

        {/* <div className="bg-white rounded-lg shadow-md p-5 border border-green-200 relative overflow-hidden group">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            <i className="fas fa-briefcase text-gray-500 mr-2"></i> Experience
          </h4>

          <span className="text-4xl font-bold highlight-text">{aiReport?.sections?.experience?.score}</span>

          <p className="text-sm text-gray-600 mt-2">
            {aiReport?.sections?.contact_info?.comment}
          </p>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 border border-yellow-200 relative overflow-hidden group">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            <i className="fas fa-graduation-cap text-gray-500 mr-2"></i>{" "}
            Education
          </h4>

          <span className="text-4xl font-bold warning-text">{aiReport?.sections?.education?.score}</span>

          <p className="text-sm text-gray-600 mt-2">
            {aiReport?.sections?.education?.comment}
          </p>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 border border-red-200 relative overflow-hidden group">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">
            <i className="fas fa-lightbulb text-gray-500 mr-2"></i> Skills
          </h4>

          <span className="text-4xl font-bold danger-text">{aiReport?.sections?.skills?.score}</span>

          <p className="text-sm text-gray-600 mt-2">
           {aiReport?.sections?.skills?.comment}
          </p>

          <div className="absolute inset-x-0 bottom-0 h-1 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div> */}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
          <i className="fas fa-lightbulb text-orange-400 mr-2"></i> Tips for
          Improvement
        </h3>

        <ol className="list-none space-y-4">
          {aiReport?.tips_for_improvement.map((item: any, index: number) => (
            <li key={index} className="flex items-start gap-4">
              <span className="w-5 h-4 rounded-full bg-blue-600 flex items-center justify-center font-bold "></span>
              <p className="text-sm text-gray-600">{item}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-5 border border-green-200">
          <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i className="fas fa-hand-thumbs-up text-green-500 mr-2"></i> What's
            Good
          </h3>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            {aiReport?.whats_good.map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-5 border border-red-200">
          <h3 className="text-lg font-bold text-gray-700 mb-3 flex items-center">
            <i className="fas fa-hand-thumbs-down text-red-500 mr-2"></i> Needs
            Improvement
          </h3>

          <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
            {aiReport?.needs_improvement.map((item: any, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      
      <ResumeUploadModal  openResumeUpload={openResumeUpload} setOpenResumeModal={() => setOpenResumeModal(false)}/>
    </div>
  );
};

export default Report;
