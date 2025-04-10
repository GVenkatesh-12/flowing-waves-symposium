
import React from 'react';

const Announcements: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 max-w-full mx-auto">
      <div className="glassmorphism rounded-lg p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold text-conference-navy mb-4">Announcements</h2>
        
        <div className="space-y-3">
          <div className="p-3 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue text-sm md:text-base">Call for Papers Now Open</h3>
            <p className="text-gray-700 text-sm">
              We invite researchers, academicians, and industry professionals to submit their original research papers.
            </p>
          </div>
          
          <div className="p-3 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue text-sm md:text-base">Registration Opens Soon</h3>
            <p className="text-gray-700 text-sm">
              Early bird registration will begin in January 2025. Stay tuned for more information.
            </p>
          </div>
          
          <div className="p-3 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue text-sm md:text-base">Keynote Speakers Announcement</h3>
            <p className="text-gray-700 text-sm">
              We're excited to announce our first batch of distinguished keynote speakers. More details coming soon.
            </p>
          </div>
          
          <div className="p-3 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue text-sm md:text-base">Special Issue Journal Publication</h3>
            <p className="text-gray-700 text-sm">
              Selected papers will be considered for publication in special issues of reputed journals. More details will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
