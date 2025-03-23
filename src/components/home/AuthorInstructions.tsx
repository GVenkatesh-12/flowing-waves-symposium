
import React from 'react';
import { FileText } from 'lucide-react';

const AuthorInstructions: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="glassmorphism rounded-lg p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-conference-navy mb-6">Author Instructions</h2>
        
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            <p className="text-gray-700 mb-4">
              Authors are invited to submit original and unpublished research papers following IEEE conference format. All submissions will undergo a rigorous peer-review process.
            </p>
            <p className="text-gray-700 mb-4">
              Papers should be submitted via the conference submission system. Please ensure your paper complies with the IEEE paper format guidelines.
            </p>
            <p className="text-gray-700 mb-6">
              The maximum page length is 6 pages. Accepted papers will be submitted for inclusion in IEEE Xplore subject to meeting IEEE requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF link will be added later');
                }}
              >
                <FileText className="h-5 w-5" />
                Author Instructions PDF
              </a>
              
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF link will be added later');
                }}
              >
                <FileText className="h-5 w-5" />
                IEEE Conference Template
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorInstructions;
