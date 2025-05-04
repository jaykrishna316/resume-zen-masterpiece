
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

interface ResumeHeaderProps {
  name: string;
  title: string;
  summary: string;
}

export const ResumeHeader = ({ name, title, summary }: ResumeHeaderProps) => {
  return (
    <div className="bg-primary text-white p-6 relative">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h2 className="text-xl mt-1 text-primary-foreground/90">{title}</h2>
        </div>
        
        <div className="flex flex-col">
          <div className="contact-item">
            <Mail className="contact-icon h-4 w-4" />
            <span>jaykrishna316@email.com</span>
          </div>
          <div className="contact-item">
            <Phone className="contact-icon h-4 w-4" />
            <span>(817)-821-XXXX</span>
          </div>
          <div className="contact-item">
            <Linkedin className="contact-icon h-4 w-4" />
            <span>linkedin.com/in/jayichapurapu</span>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon h-4 w-4" />
            <span>Dallas,TX</span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-primary-foreground/90">{summary}</p>
      </div>
    </div>
  );
};
