
import { Award, Star } from "lucide-react";

export const ResumeSidebar = () => {
  return (
    <div className="bg-secondary p-6 w-full md:w-1/3">
      <div className="resume-section">
        <h3 className="section-title">Skills</h3>
        <div className="flex flex-wrap">
          <span className="skill-badge">Program Management</span>
          <span className="skill-badge">Strategic Planning</span>
          <span className="skill-badge">Risk Management</span>
          <span className="skill-badge">Stakeholder Engagement</span>
          <span className="skill-badge">Budget Management</span>
          <span className="skill-badge">Agile & Waterfall</span>
          <span className="skill-badge">Team Leadership</span>
          <span className="skill-badge">MS Project</span>
          <span className="skill-badge">JIRA</span>
          <span className="skill-badge">Asana</span>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Key Strengths</h3>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Strategic Planning</span>
              <span className="text-xs font-medium">95%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "95%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Stakeholder Management</span>
              <span className="text-xs font-medium">90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "90%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Risk Mitigation</span>
              <span className="text-xs font-medium">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "85%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Resource Allocation</span>
              <span className="text-xs font-medium">88%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "88%" }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Technical Communication</span>
              <span className="text-xs font-medium">92%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "92%" }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Certifications</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <Award className="h-4 w-4 text-accent mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">PMP (Project Management Professional)</p>
              <p className="text-xs text-muted-foreground">Project Management Institute, 2018</p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="h-4 w-4 text-accent mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Certified ScrumMaster (CSM)</p>
              <p className="text-xs text-muted-foreground">Scrum Alliance, 2019</p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="h-4 w-4 text-accent mr-2 mt-0.5" />
            <div>
              <p className="text-sm font-medium">PRINCE2 Practitioner</p>
              <p className="text-xs text-muted-foreground">AXELOS, 2020</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="resume-section">
        <h3 className="section-title">Languages</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="text-sm mr-2">English</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Spanish</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 text-accent" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">French</span>
            <div className="flex">
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 fill-accent text-accent" />
              <Star className="h-3 w-3 text-accent" />
              <Star className="h-3 w-3 text-accent" />
              <Star className="h-3 w-3 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
