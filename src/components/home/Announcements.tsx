
import React from 'react';

const Announcements: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="glassmorphism rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-conference-navy mb-6">Announcements</h2>
        
        <div className="space-y-4">
          <div className="p-4 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue">Call for Papers Now Open</h3>
            <p className="text-gray-700">
              We invite researchers, academicians, and industry professionals to submit their original research papers.
            </p>
          </div>
          
          <div className="p-4 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue">Registration Opens Soon</h3>
            <p className="text-gray-700">
              Early bird registration will begin in January 2025. Stay tuned for more information.
            </p>
          </div>
          
          <div className="p-4 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue">Keynote Speakers Announcement</h3>
            <p className="text-gray-700">
              We're excited to announce our first batch of distinguished keynote speakers. More details coming soon.
            </p>
          </div>
          
          <div className="p-4 border-l-4 border-conference-blue bg-conference-light-blue bg-opacity-50 rounded-r">
            <h3 className="font-bold text-conference-blue">Special Issue Journal Publication</h3>
            <p className="text-gray-700">
              Selected papers will be considered for publication in special issues of reputed journals. More details will be announced soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
