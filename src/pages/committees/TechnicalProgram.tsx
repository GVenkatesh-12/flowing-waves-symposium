
import React from 'react';

const TechnicalProgram = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Technical Program Committee</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            The Technical Program Committee is responsible for reviewing paper submissions, organizing technical sessions, 
            and ensuring the scientific quality of the conference. Committee members are experts in their respective fields 
            and have been selected based on their research contributions and reviewing experience.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track I: Prototype & Product Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. James Anderson</h3>
                <p className="text-gray-600">Stanford University, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Li Wei</h3>
                <p className="text-gray-600">Tsinghua University, China</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Ananya Gupta</h3>
                <p className="text-gray-600">IIT Bombay, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Elena Petrova</h3>
                <p className="text-gray-600">University of Cambridge, UK</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Samuel Kim</h3>
                <p className="text-gray-600">KAIST, South Korea</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track II: Sustainable Energy Systems and Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Maria Rodriguez</h3>
                <p className="text-gray-600">MIT, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Arun Kumar</h3>
                <p className="text-gray-600">IIT Delhi, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Hans Mueller</h3>
                <p className="text-gray-600">ETH Zurich, Switzerland</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Yuki Tanaka</h3>
                <p className="text-gray-600">University of Tokyo, Japan</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                <p className="text-gray-600">University of Melbourne, Australia</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track III: Signal Processing and Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Thomas Lee</h3>
                <p className="text-gray-600">Stanford University, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Priya Sharma</h3>
                <p className="text-gray-600">IISc Bangalore, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Carlos Gonzalez</h3>
                <p className="text-gray-600">University of Barcelona, Spain</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Mei Lin</h3>
                <p className="text-gray-600">National Taiwan University</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Paul Martin</h3>
                <p className="text-gray-600">Imperial College London, UK</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track IV: Cyber Security and Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. David Wilson</h3>
                <p className="text-gray-600">UC Berkeley, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Ravi Shankar</h3>
                <p className="text-gray-600">IIT Madras, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Sophie Dubois</h3>
                <p className="text-gray-600">INRIA, France</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Takashi Yamada</h3>
                <p className="text-gray-600">Keio University, Japan</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Isabella Romano</h3>
                <p className="text-gray-600">University of Rome, Italy</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track V: Smart Communication and Antenna Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Richard Chen</h3>
                <p className="text-gray-600">Caltech, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Vidya Prakash</h3>
                <p className="text-gray-600">IIT Kharagpur, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Klaus Schmidt</h3>
                <p className="text-gray-600">Technical University of Munich, Germany</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Jing Wu</h3>
                <p className="text-gray-600">Beijing University of Posts and Telecommunications, China</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Ahmed Al-Saadi</h3>
                <p className="text-gray-600">King Abdullah University, Saudi Arabia</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Track VI: Interdisciplinary Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Michael Brown</h3>
                <p className="text-gray-600">Harvard University, USA</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Neha Sharma</h3>
                <p className="text-gray-600">AIIMS, India</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Pierre Dupont</h3>
                <p className="text-gray-600">Sorbonne University, France</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Leila Al-Farsi</h3>
                <p className="text-gray-600">University of Jordan, Jordan</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-conference-light-blue">
                <h3 className="font-bold text-lg">Dr. Victor Santos</h3>
                <p className="text-gray-600">University of São Paulo, Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProgram;
