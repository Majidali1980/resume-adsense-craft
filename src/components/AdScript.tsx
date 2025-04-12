
import React, { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    try {
      // AdSense script is now loaded in the head of the document via index.html
      // This component will only handle the initialization of ads
      
      // Initialize ads when the page loads
      window.addEventListener('load', () => {
        if (typeof window.adsbygoogle !== 'undefined') {
          try {
            // Check for ad units
            const adUnits = document.querySelectorAll('.adsbygoogle');
            if (adUnits.length > 0) {
              console.log(`Found ${adUnits.length} AdSense units, initializing...`);
              
              // Only initialize ad units that haven't been initialized yet
              adUnits.forEach((adUnit) => {
                if (adUnit.getAttribute('data-adsbygoogle-status') !== 'done') {
                  (window.adsbygoogle = window.adsbygoogle || []).push({});
                }
              });
            }
          } catch (e) {
            console.error('AdSense initialization error:', e);
          }
        } else {
          console.warn('AdSense not available. Ads may not display correctly.');
        }
      });
    } catch (error) {
      console.error('Error handling AdSense:', error);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default AdScript;
