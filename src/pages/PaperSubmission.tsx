import React from 'react';
import { FileText, Upload, Check, Info } from 'lucide-react';

const PaperSubmission = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <div className="prose max-w-none text-gray-700">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-conference-navy mb-4 sm:mb-6">
            Guideline to Authors
          </h1>

          <div className="prose max-w-none text-gray-750 mb-6 sm:mb-10">
            <p className="text-sm sm:text-base">
              The following instructions are given for the authors to submit their papers for the 2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity (iSSSC).
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-conference-blue mt-6 mb-2">
              Originality of Submitted Papers:
            </h3>
            <p className="text-sm sm:text-base">
              Papers submitted to 2025 IEEE 3rd iSSSC shall contain original work by the author(s) that have not been published or submitted for publication elsewhere. The author(s) need to restrict the plagiarism of their paper within 20%.
            </p>

            <h3 className="text-xl sm:text-2xl font-semibold text-conference-blue mt-6 mb-2">
              Paper Submission:
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>All papers are required to be prepared and submitted in the IEEE Standard two-column conference format of A4 size in English.</li>
              <li>Papers must not be more than six pages in length, including texts, figures, photographs, and references.</li>
              <li>Any submitted paper that exceeds six pages will be rejected.</li>
              <li>The first page must include the title of the paper, author(s), affiliations, address, and text. Please do not include page numbers on submitted documents.</li>
              <li>The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word and LaTeX templates can be downloaded from our website.</li>
            </ul>

            <h3 className="text-xl sm:text-2xl font-semibold text-conference-blue mt-6 mb-2">
              Paper Upload:
            </h3>
            <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base">
              <li>All papers must be submitted in PDF format via Microsoft-CMT Platform.</li>
              <li>The submitting authors need to create a Microsoft CMT account before uploading the paper (if the submitting author does not have a CMT account).</li>
              <li>While uploading the paper, the authors should provide the title of the paper, and an abstract of no more than 250 words in the respective text boxes in the paper submission page.</li>
              <li>Please note that all accepted papers that are registered and presented in the conference will be sent for possible inclusion in IEEE Xplore.</li>
              <li>The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process.</li>
              <li>All submitted papers will be peer reviewed by the Technical Program Committee Members (TPC).</li>
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-conference-blue mt-6 sm:mt-8 mb-3 sm:mb-4">
            Review Process
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            All submissions will undergo a rigorous peer review process. Each paper will be reviewed by at least three members of the Technical Program Committee based on technical quality, originality, relevance, and presentation.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-conference-blue mt-6 sm:mt-8 mb-3 sm:mb-4">
            Publication
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            All accepted and presented papers will be submitted for inclusion in IEEE Xplore @Digital Library indexed by Scopus.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-conference-blue mt-6 sm:mt-8 mb-3 sm:mb-4">
            Templates & Resources
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <a
              href="/documents/conference-template-a4.docx"
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-conference-blue text-white text-sm sm:text-base rounded-md hover:bg-conference-dark-blue transition-colors shadow-md w-full"
            >
              <FileText className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
              <span>IEEE Template (Word)</span>
            </a>

            <a
              href="/documents/conference-latex-template_10-17-19.zip"
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-conference-blue text-white text-sm sm:text-base rounded-md hover:bg-conference-dark-blue transition-colors shadow-md w-full"
            >
              <FileText className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
              <span>IEEE Template (LaTeX)</span>
            </a>

            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-conference-blue text-white text-sm sm:text-base rounded-md hover:bg-conference-dark-blue transition-colors shadow-md w-full"
            >
              <FileText className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
              <span>IEEE Author Center</span>
            </a>

            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-conference-blue text-white text-sm sm:text-base rounded-md hover:bg-conference-dark-blue transition-colors shadow-md w-full"
            >
              <FileText className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" />
              <span>Call for Papers</span>
            </a>

            <a
              href="https://cmt3.research.microsoft.com/isssc2025"
              target="_blank"
              className="flex items-center gap-2 px-6 py-4 bg-gradient-to-br from-[#8B5CF6] to-[#D946EF] text-white rounded-lg hover:from-[#7C3AED] hover:to-[#C026D3] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/50 font-bold text-lg"
            >
              <Upload className="h-6 w-6 mr-2" />
              Submit Paper
              <span className="ml-2 animate-pulse bg-white/20 px-2 py-1 rounded-full text-sm">
                Important
              </span>
            </a>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-conference-blue mt-6 sm:mt-8 mb-3 sm:mb-4">
            Important Dates
          </h2>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 mb-6 sm:mb-8">
            <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
              <Info className="h-4 sm:h-5 w-4 sm:w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Full Paper Submission Date (Deadline):</strong> 30 June 2025</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
              <Info className="h-4 sm:h-5 w-4 sm:w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Notification of Acceptance:</strong> 15 July 2025</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
              <Info className="h-4 sm:h-5 w-4 sm:w-5 text-conference-blue flex-shrink-0 mt-1" />
              <span><strong>Final Paper Submission Date:</strong> 30 July 2025</span>
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold text-conference-blue mt-6 sm:mt-8 mb-3 sm:mb-4">
            Contact
          </h2>
          <div className="text-sm sm:text-base">
            <p className="mb-2 sm:mb-4">
              For any queries regarding paper submission, please contact: {' '}
              <a href="mailto:issc2025@gmail.com" className="text-conference-blue hover:underline">
                issc2025@gmail.com
              </a>
            </p>
            <p className="mb-2 sm:mb-4">
              GIET University, Gunupur - 765022, Odisha, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
