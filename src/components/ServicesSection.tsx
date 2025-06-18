
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText, Users, Video, Mail, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Modern CV Maker",
      description: "Create stunning, modern CVs with our advanced CV builder tool",
      link: "https://modern-cvmaker.vercel.app/",
      icon: <FileText className="h-8 w-8 text-resume-blue" />
    },
    {
      title: "MA Digital Hub",
      description: "Your complete digital solutions partner for all your business needs",
      link: "https://ma-digital-kohl.vercel.app/",
      icon: <Users className="h-8 w-8 text-resume-blue" />
    }
  ];

  const socialLinks = [
    {
      name: "YouTube Channel",
      url: "https://youtube.com/channel/UChQTYgIbl2C2ZIsRoKkXFUQ",
      icon: <Video className="h-5 w-5" />
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/alimajid03021980/",
      icon: <Star className="h-5 w-5" />
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/users/alimajid0302198",
      icon: <Star className="h-5 w-5" />
    },
    {
      name: "Email Us",
      url: "mailto:alimajid03021980@gmail.com",
      icon: <Mail className="h-5 w-5" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-resume-blue">
            Our Services
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-600 md:text-lg mt-4">
            Discover our comprehensive digital solutions designed to boost your career and business
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-right border border-gray-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                asChild
                className="bg-resume-blue hover:bg-blue-800 transition-colors w-full"
              >
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  Visit Service
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Connect With Us</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-resume-blue hover:text-white transition-colors"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="ml-2 hidden sm:inline">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
