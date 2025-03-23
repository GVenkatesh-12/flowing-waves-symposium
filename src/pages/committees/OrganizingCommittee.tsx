
import React from 'react';

const OrganizingCommittee = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Organizing Committee</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            The Organizing Committee is responsible for planning and executing all aspects of the iSSSC 2025 conference. 
            The committee members have been carefully selected based on their expertise and experience in organizing 
            successful international conferences.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Chief Patrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. John Smith</h3>
              <p className="text-gray-600">Vice-Chancellor, GIET University</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Jane Doe</h3>
              <p className="text-gray-600">President, IEEE Section</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">General Chairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Robert Johnson</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Emily Williams</h3>
              <p className="text-gray-600">MIT, USA</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Technical Program Chairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. David Anderson</h3>
              <p className="text-gray-600">Stanford University, USA</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Sophia Chen</h3>
              <p className="text-gray-600">National University of Singapore</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Finance Chair</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Michael Brown</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Publication Chairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Elizabeth Taylor</h3>
              <p className="text-gray-600">University of California, USA</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. James Wilson</h3>
              <p className="text-gray-600">Imperial College London, UK</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Publicity Chairs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Sarah Miller</h3>
              <p className="text-gray-600">Technical University of Munich, Germany</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Thomas Lee</h3>
              <p className="text-gray-600">Seoul National University, South Korea</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Local Organizing Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Richard Davis</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Patricia Rodriguez</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Daniel Lewis</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Jennifer Adams</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Christopher Martin</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h3 className="font-bold text-lg">Prof. Lisa Thompson</h3>
              <p className="text-gray-600">GIET University, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
