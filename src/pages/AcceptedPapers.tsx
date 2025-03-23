
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const AcceptedPapers = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Accepted Papers</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-700 mb-1">Coming Soon</h3>
            <p className="text-gray-700">
              The list of accepted papers will be published after the review process is complete. Please check back later.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Paper Selection Process</h2>
          <p className="mb-4">
            All submitted papers undergo a rigorous double-blind peer-review process. Each paper is reviewed by at least three members of the Technical Program Committee based on the following criteria:
          </p>
          
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Technical contribution and originality</li>
            <li>Quality of research methodology</li>
            <li>Relevance to the conference themes</li>
            <li>Clarity of presentation</li>
            <li>Potential impact in the field</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Publication in IEEE Xplore</h2>
          <p className="mb-4">
            All accepted papers will be published in the conference proceedings and submitted to IEEE Xplore digital library, subject to meeting IEEE requirements. Authors will be required to prepare a camera-ready version of their paper following the acceptance notification.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Presentation Requirements</h2>
          <p className="mb-4">
            At least one author of each accepted paper must register for the conference and present the paper. Presentation details, including the format (oral or poster), duration, and technical requirements, will be communicated to the authors along with the acceptance notification.
          </p>
          
          <div className="bg-conference-light-blue p-6 rounded-lg mt-8">
            <h2 className="text-lg font-bold text-conference-blue mb-2">Important Dates</h2>
            <ul className="space-y-2">
              <li><strong>Notification of Acceptance:</strong> August 15, 2025</li>
              <li><strong>Camera Ready Submission:</strong> September 15, 2025</li>
              <li><strong>Conference Dates:</strong> November 06-08, 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedPapers;
