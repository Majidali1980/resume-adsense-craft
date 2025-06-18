
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, FileText, Settings, Download, TrendingUp, Users, Award } from 'lucide-react';
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
        {/* Hero Section - Fixed visibility */}
        <section className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-4 animate-fade-in">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Build Your Professional Resume
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 text-lg md:text-xl lg:text-2xl animate-slide-in-right">
                  Create stunning, ATS-friendly resumes in minutes with our easy-to-use builder powered by MA DIGITAL HUB.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-scale-in">
                <Button 
                  onClick={() => navigate('/editor')}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg"
                >
                  Create My Resume
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => navigate('/preview')}
                  variant="outline"
                  size="lg" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-3 text-lg"
                >
                  View Templates
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
        
        {/* Future Features Section - Added content for the empty space */}
        <section className="py-16 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-resume-blue mb-4">
                What's Coming Next
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-lg">
                Exciting new features are on the way to make your resume building experience even better
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-right border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-green-100 to-emerald-100">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">AI Resume Optimization</h3>
                </div>
                <p className="text-gray-600">
                  Smart AI suggestions to optimize your resume content for specific job applications and industries.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-right border border-gray-100" style={{ animationDelay: '200ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-100 to-violet-100">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Team Collaboration</h3>
                </div>
                <p className="text-gray-600">
                  Share and collaborate on resumes with mentors, career coaches, and hiring managers.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    In Development
                  </span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-slide-in-right border border-gray-100" style={{ animationDelay: '400ms' }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Skills Assessment</h3>
                </div>
                <p className="text-gray-600">
                  Validate your skills with built-in assessments and add verified badges to your resume.
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Planning Phase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section - Fixed button background */}
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
                className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 animate-scale-in px-8 py-3 text-lg font-semibold"
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
