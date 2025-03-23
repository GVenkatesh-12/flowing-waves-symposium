
import React from 'react';
import { FileText, Upload, Check, Info } from 'lucide-react';

const PaperSubmission = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Paper Submission</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-6">
            Authors are invited to submit original research papers that have not been previously published and are not currently under review for publication elsewhere.
          </p>
          
          <div className="bg-conference-light-blue p-6 rounded-lg mb-8 flex items-start gap-4">
            <Info className="h-6 w-6 text-conference-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-conference-blue mb-2">Submission System</h3>
              <p>
                All papers must be submitted through the conference submission system. The submission link will be activated in January 2025.
              </p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Submission Guidelines</h2>
          
          <ul className="space-y-4 mb-6">
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Format:</strong> All submissions must follow the IEEE conference format. Papers should be prepared using the IEEE conference proceedings templates.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Length:</strong> Papers should not exceed 6 pages, including figures, tables, and references.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Language:</strong> All papers must be written in English.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Anonymity:</strong> Papers should be anonymized for double-blind review. Author names and affiliations should not appear in the paper.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>File Format:</strong> Papers should be submitted as PDF files.</span>
            </li>
          </ul>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Review Process</h2>
          <p className="mb-4">
            All submissions will undergo a rigorous double-blind peer review process. Each paper will be reviewed by at least three members of the Technical Program Committee based on technical quality, originality, relevance, and presentation.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Publication</h2>
          <p className="mb-4">
            Accepted papers will be published in the conference proceedings and submitted to IEEE Xplore digital library, subject to meeting IEEE requirements.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Templates & Resources</h2>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF link will be added later');
              }}
            >
              <FileText className="h-5 w-5" />
              IEEE Conference Template (Word)
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF link will be added later');
              }}
            >
              <FileText className="h-5 w-5" />
              IEEE Conference Template (LaTeX)
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-2 px-4 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
              onClick={(e) => {
                e.preventDefault();
                alert('PDF link will be added later');
              }}
            >
              <Upload className="h-5 w-5" />
              Submission System (Coming Soon)
            </a>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            For any queries regarding paper submission, please contact: <a href="mailto:issc2025@giet.edu" className="text-conference-blue hover:underline">issc2025@giet.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
