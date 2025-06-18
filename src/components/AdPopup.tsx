
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import AdBanner from './AdBanner';

interface AdPopupProps {
  delay?: number; // Delay in milliseconds before showing popup
  frequency?: number; // How often to show the popup (in milliseconds)
}

const AdPopup: React.FC<AdPopupProps> = ({ 
  delay = 60000, // 60 seconds default - increased to reduce blinking
  frequency = 3600000 // 60 minutes default - increased frequency
}) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent popup from showing immediately on page load
    setMounted(true);
    
    // Check if we've shown the popup recently
    const lastShown = localStorage.getItem('adPopupLastShown');
    const shouldShow = !lastShown || (Date.now() - parseInt(lastShown)) > frequency;
    
    if (shouldShow && mounted) {
      // Set a timer to show the popup after delay
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem('adPopupLastShown', Date.now().toString());
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [delay, frequency, mounted]);

  // Don't render anything until component is mounted
  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px] animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-center">Create Professional Resumes with ResumeCraft</DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <AdBanner adSlot="5678901234" format="rectangle" className="mx-auto fade-in" />
          
          <div className="mt-6 text-center animate-slide-in-right">
            <p className="text-sm text-gray-600">
              Upgrade to ResumeCraft Premium for unlimited templates, no ads, and advanced features!
            </p>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Not Now
          </Button>
          <Button onClick={() => setOpen(false)} className="bg-resume-blue hover:bg-blue-800 transition-colors">
            Learn More
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdPopup;
