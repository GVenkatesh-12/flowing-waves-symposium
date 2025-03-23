
import React from 'react';

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Keynote Speakers</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            We are honored to host distinguished keynote speakers from around the world who are leading experts in their fields.
            Their presentations will provide valuable insights into the latest trends, challenges, and opportunities in sustainable
            energy, signal processing, and cyber security.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-conference-blue mb-2">Prof. Elizabeth Carter</h2>
                <p className="text-gray-600 font-medium mb-2">MIT, USA</p>
                <p className="text-gray-700 mb-4">
                  Director of the Sustainable Energy Research Center at MIT. Dr. Carter's research focuses on next-generation renewable energy systems and grid integration.
                </p>
                <h3 className="font-semibold text-conference-navy">Keynote Topic:</h3>
                <p className="text-gray-700">
                  "Future Directions in Sustainable Energy: Challenges and Opportunities"
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-conference-blue mb-2">Prof. Rajiv Mehta</h2>
                <p className="text-gray-600 font-medium mb-2">IIT Delhi, India</p>
                <p className="text-gray-700 mb-4">
                  Leading researcher in signal processing with over 200 journal publications. Fellow of IEEE and recipient of numerous awards for his contributions.
                </p>
                <h3 className="font-semibold text-conference-navy">Keynote Topic:</h3>
                <p className="text-gray-700">
                  "Advanced Signal Processing Techniques for 6G Communications"
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-conference-blue mb-2">Prof. Sophie Chen</h2>
                <p className="text-gray-600 font-medium mb-2">ETH Zurich, Switzerland</p>
                <p className="text-gray-700 mb-4">
                  Expert in cybersecurity and privacy-preserving technologies. Former advisor to the European Commission on cyber resilience.
                </p>
                <h3 className="font-semibold text-conference-navy">Keynote Topic:</h3>
                <p className="text-gray-700">
                  "Securing Critical Infrastructure in the Age of AI and IoT"
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-conference-blue mb-2">Dr. Hiroshi Yamamoto</h2>
                <p className="text-gray-600 font-medium mb-2">University of Tokyo, Japan</p>
                <p className="text-gray-700 mb-4">
                  Pioneering researcher in product prototyping and smart materials. Has led multiple industry-academia collaborative projects.
                </p>
                <h3 className="font-semibold text-conference-navy">Keynote Topic:</h3>
                <p className="text-gray-700">
                  "Digital Twins and AI in Next-Generation Product Design"
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-conference-light-blue p-6 rounded-lg">
            <h2 className="text-lg font-bold text-conference-blue mb-2">More Speakers Coming Soon</h2>
            <p className="text-gray-700">
              We are in the process of confirming additional keynote speakers. Please check back for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
