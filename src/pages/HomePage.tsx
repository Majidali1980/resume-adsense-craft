
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Settings, Download } from 'lucide-react';
import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';
import ResumeTemplateShowcase from '@/components/ResumeTemplateShowcase';
import HowToSection from '@/components/HowToSection';
import ServicesSection from '@/components/ServicesSection';

const HomePage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Build Your Professional Resume
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl animate-slide-in-right">
                  Create stunning, ATS-friendly resumes in minutes with our easy-to-use builder.
                </p>
              </div>
              <div className="space-x-4 mt-8 animate-scale-in">
                <Button 
                  onClick={() => navigate('/editor')}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Create My Resume
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <AdBanner adSlot="1234567890" className="py-2" />
        
        {/* Resume Template Showcase */}
        <ResumeTemplateShowcase />
        
        {/* How To Section */}
        <HowToSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
                  <FileText className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-bold">Professional Templates</h3>
                <p className="text-center text-gray-500">
                  Choose from multiple professional templates designed to impress employers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
                  <Settings className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-bold">Easy Customization</h3>
                <p className="text-center text-gray-500">
                  Simple interface lets you build and customize your resume with minimal effort.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="p-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100">
                  <Download className="h-6 w-6 text-resume-blue" />
                </div>
                <h3 className="text-xl font-bold">Export as PDF</h3>
                <p className="text-center text-gray-500">
                  Download your finished resume as a professional PDF ready for applications.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ad Banner */}
        <AdBanner adSlot="0987654321" className="py-2" />
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Land Your Dream Job?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100">
                  Create a professional resume in minutes that will help you stand out from the competition.
                </p>
              </div>
              <Button 
                onClick={() => navigate('/editor')} 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300 animate-scale-in"
              >
                Create My Resume Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
