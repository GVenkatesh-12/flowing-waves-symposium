
import React from 'react';
import { FileText } from 'lucide-react';

const AuthorInstructions: React.FC = () => {
  return (
    <section className="py-6 px-4 sm:px-6 max-w-full mx-auto">
      <div className="glassmorphism rounded-lg p-5 md:p-6 h-full">
        <h2 className="text-xl md:text-2xl font-bold text-conference-navy mb-4">Author Instructions</h2>
        
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm text-gray-700 mb-3">
              Authors are invited to submit original and unpublished research papers following IEEE conference format. All submissions will undergo a rigorous peer-review process.
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Papers should be submitted via the conference submission system. Please ensure your paper complies with the IEEE format guidelines.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              The maximum page length is 6 pages. Accepted papers will be submitted for inclusion in IEEE Xplore.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 px-3 py-2 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md text-sm"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF link will be added later');
              }}
            >
              <FileText className="h-4 w-4" />
              Author Instructions PDF
            </a>
            
            <a 
              href="#" 
              className="flex items-center justify-center gap-2 px-3 py-2 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md text-sm"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF link will be added later');
              }}
            >
              <FileText className="h-4 w-4" />
              IEEE Conference Template
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorInstructions;
