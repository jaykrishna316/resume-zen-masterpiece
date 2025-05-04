
import { ResumeHeader } from "./ResumeHeader";
import { ResumeSidebar } from "./ResumeSidebar";
import { ResumeMain } from "./ResumeMain";

const Resume = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <ResumeHeader 
          name="Jay Ichapurapu"
          title="Senior Engineering Manager- Skipcart Driver App"
          summary="Results-driven Engineering Manager with 10+ years of experience leading cross-functional teams and delivering high-impact initiatives. Skilled in strategic planning, risk mitigation, and stakeholder management with a proven track record of successful program delivery in fast-paced environments."
        />
        
        <div className="flex flex-col md:flex-row">
          <ResumeSidebar />
          <ResumeMain />
        </div>
      </div>
    </div>
  );
};

export default Resume;
