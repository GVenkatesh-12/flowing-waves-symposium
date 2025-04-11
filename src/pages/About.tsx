
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">About iSSSC 2025</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              The 3rd IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security (iSSSC 2025) is a premier forum for researchers, academicians, and industry professionals to present and discuss the latest advancements in sustainable energy, signal processing, and cyber security.
            </p>
            
            <p>
              Building on the success of previous editions, iSSSC 2025 aims to foster collaboration and knowledge exchange across these interdisciplinary fields, with a special focus on innovative solutions for global challenges.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                alt="Conference participants collaborating" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
          
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Conference Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="rounded-lg overflow-hidden shadow-md order-last md:order-first">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678" 
                alt="Research and innovation" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>To provide a platform for researchers and practitioners to share their latest findings and innovations</li>
              <li>To foster interdisciplinary collaboration between academia and industry</li>
              <li>To explore emerging technologies and their applications in sustainable energy, signal processing, and cyber security</li>
              <li>To address challenges and opportunities in these rapidly evolving fields</li>
              <li>To showcase cutting-edge research and prototype models</li>
            </ul>
          </div>
        </div>
          
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About GIET University</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              GIET University, located in Gunupur, Odisha, India, is a leading institution known for its academic excellence and research contributions. The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.
            </p>
            
            <p>
              With state-of-the-art infrastructure and a vibrant academic environment, GIET University provides the perfect venue for iSSSC 2025, facilitating knowledge exchange and collaboration among participants from around the world.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" 
                alt="University campus" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
          
        <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About IEEE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md order-last md:order-first">
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="IEEE technology innovation" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          <div className="prose max-w-none text-gray-700">
            <p>
              IEEE (Institute of Electrical and Electronics Engineers) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. Through its publications, conferences, technology standards, and professional and educational activities, IEEE serves as a catalyst for technological innovation and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
