
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">About iSSSC 2025</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-4">
            The 3rd IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security (iSSSC 2025) is a premier forum for researchers, academicians, and industry professionals to present and discuss the latest advancements in sustainable energy, signal processing, and cyber security.
          </p>
          
          <p className="mb-4">
            Building on the success of previous editions, iSSSC 2025 aims to foster collaboration and knowledge exchange across these interdisciplinary fields, with a special focus on innovative solutions for global challenges.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Conference Objectives</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>To provide a platform for researchers and practitioners to share their latest findings and innovations</li>
            <li>To foster interdisciplinary collaboration between academia and industry</li>
            <li>To explore emerging technologies and their applications in sustainable energy, signal processing, and cyber security</li>
            <li>To address challenges and opportunities in these rapidly evolving fields</li>
            <li>To showcase cutting-edge research and prototype models</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About GIET University</h2>
          <p className="mb-4">
            GIET University, located in Gunupur, Odisha, India, is a leading institution known for its academic excellence and research contributions. The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.
          </p>
          
          <p className="mb-4">
            With state-of-the-art infrastructure and a vibrant academic environment, GIET University provides the perfect venue for iSSSC 2025, facilitating knowledge exchange and collaboration among participants from around the world.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About IEEE</h2>
          <p>
            IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Through its publications, conferences, technology standards, and professional and educational activities, IEEE serves as a catalyst for technological innovation and excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
