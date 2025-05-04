
import { Briefcase, Calendar, School } from "lucide-react";

export const ResumeMain = () => {
  return (
    <div className="p-6 w-full md:w-2/3">
      <div className="resume-section">
        <h3 className="section-title">Work Experience</h3>
        
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">Senior Program Manager</span>
              <span className="mx-2">|</span>
              <span className="company-name">Salesforce</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">Jan 2021 - Present</span>
            </div>
          </div>
          <div className="job-description">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Lead a portfolio of 5 enterprise-wide digital transformation programs with a combined budget of $15M, consistently delivering on time and under budget.</li>
              <li>Coordinate cross-functional teams of 25+ members across engineering, design, and business units to deliver seamless program execution.</li>
              <li>Implemented robust risk management framework that reduced project delays by 30% and improved stakeholder satisfaction scores by 25%.</li>
              <li>Developed comprehensive program roadmaps and governance structures that aligned with strategic business objectives and ensured proper resource allocation.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">Program Manager</span>
              <span className="mx-2">|</span>
              <span className="company-name">Google</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">Mar 2018 - Dec 2020</span>
            </div>
          </div>
          <div className="job-description">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Managed the end-to-end delivery of a cloud migration program, resulting in 40% reduction in operational costs and 99.9% system uptime.</li>
              <li>Built and maintained relationships with key stakeholders across multiple departments to ensure program requirements were aligned with business objectives.</li>
              <li>Established rigorous program controls and KPIs that increased visibility into program performance and enabled data-driven decision making.</li>
              <li>Led a team of 8 project managers, providing mentorship and removing roadblocks to ensure efficient program execution.</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-5">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">Project Manager</span>
              <span className="mx-2">|</span>
              <span className="company-name">Microsoft</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">Jun 2016 - Feb 2018</span>
            </div>
          </div>
          <div className="job-description">
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Successfully delivered 12 software development projects with an average budget of $500K, meeting all timeline and scope requirements.</li>
              <li>Implemented Agile methodologies across the team, resulting in 35% improvement in development velocity and higher quality deliverables.</li>
              <li>Created detailed project plans, including resource allocation, risk assessments, and contingency strategies for complex technical initiatives.</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Education</h3>
        
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <School className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">MBA, Technology Management</span>
              <span className="mx-2">|</span>
              <span className="company-name">UC Berkeley Haas School of Business</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">2014 - 2016</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <School className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">B.S., Computer Science</span>
              <span className="mx-2">|</span>
              <span className="company-name">Stanford University</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">2010 - 2014</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Key Achievements</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm">Received the "Excellence in Program Management" award for leading a critical product launch that generated $5M in new revenue within the first quarter.</li>
          <li className="text-sm">Improved program governance and reporting, resulting in 30% reduction in executive escalations and higher stakeholder confidence.</li>
          <li className="text-sm">Successfully managed a global team across 5 time zones, establishing effective communication protocols that improved collaboration and reduced delivery time by 20%.</li>
          <li className="text-sm">Pioneered a hybrid project management approach combining Agile and traditional methodologies that has become a standard practice within the organization.</li>
        </ul>
      </div>
    </div>
  );
        <div>
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="flex items-center">
              <School className="h-4 w-4 text-accent mr-2" />
              <span className="job-title">B.S., Computer Science</span>
              <span className="mx-2">|</span>
              <span className="company-name">Stanford University</span>
            </div>
            <div className="flex items-center mt-1 md:mt-0">
              <Calendar className="h-4 w-4 text-accent mr-1" />
              <span className="date-range">2010 - 2014</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Key Achievements</h3>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-sm">Received the "Excellence in Program Management" award for leading a critical product launch that generated $5M in new revenue within the first quarter.</li>
          <li className="text-sm">Improved program governance and reporting, resulting in 30% reduction in executive escalations and higher stakeholder confidence.</li>
          <li className="text-sm">Successfully managed a global team across 5 time zones, establishing effective communication protocols that improved collaboration and reduced delivery time by 20%.</li>
          <li className="text-sm">Pioneered a hybrid project management approach combining Agile and traditional methodologies that has become a standard practice within the organization.</li>
        </ul>
      </div>
    </div>
  );
}
