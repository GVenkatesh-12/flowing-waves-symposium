
import React from 'react';

const tracksData = [
  {
    title: "TRACK I: PROTOTYPE & PRODUCT MODELS",
    items: [
      "IoT and AI-Enabled Smart Products",
      "Prototypes in Renewable Energy and Sustainability",
      "AI and Machine Learning in Product Design",
      "Smart Materials for Innovative Products",
      "Biotechnological Prototyping and Applications",
      "Agricultural Prototyping and Applications",
      "Waste to Wealth",
      "Prototypes for Space and Aeronautical Engineering",
      "Open-Source Prototyping Platforms",
      "Multi-Disciplinary Collaboration in Prototyping",
      "Simulation and Virtual Prototyping",
      "AR/VR Technologies in Product Prototyping",
      "Digital Twins in Design and Prototyping",
      "Drone Technology and Applications"
    ]
  },
  {
    title: "TRACK II: SUSTAINABLE ENERGY SYSTEMS AND TECHNOLOGIES",
    items: [
      "Renewable Energy Integration and Grid Management",
      "Energy Storage Innovations",
      "AI and IoT in Energy Systems",
      "Sustainable Transportation and Green Mobility",
      "Energy Policy, Economics, and Market Trends",
      "Sustainable & Smart Buildings",
      "Energy Efficiency and Demand-Side Management",
      "Green Hydrogen Technologies",
      "Carbon Capture, Utilization, and Storage (CCUS)",
      "Emerging Renewable Energy Technologies",
      "Climate Resilience and the Energy-Water Nexus",
      "Sustainable Energy Access and Off-Grid Solutions",
      "Any other relevant fields"
    ]
  },
  {
    title: "TRACK III: SIGNAL PROCESSING AND APPLICATIONS",
    items: [
      "Advanced signal processing for 5G/6G communications",
      "Digital Signal Processing (DSP) Algorithms and Implementations",
      "Image and Video Signal Processing",
      "Biomedical Signal Processing",
      "Machine Learning for Signal Processing",
      "IoT and Embedded Signal Processing",
      "Signal Processing for Remote Sensing and Geosciences",
      "Signal Processing in Cyber-Physical Systems",
      "Quantum Signal Processing",
      "Emerging Signal Processing Paradigms",
      "Signal Processing in Big Data Analytics",
      "Biomedical Image processing"
    ]
  },
  {
    title: "TRACK IV: CYBER SECURITY AND PRIVACY",
    items: [
      "Emerging Threats and Mitigation Strategies",
      "Privacy-Preserving Technologies",
      "Security in Emerging Technologies",
      "Cloud Security and Data Protection",
      "Cybersecurity for Critical Infrastructure",
      "Ethical Hacking and Penetration Testing",
      "Cybersecurity Governance and Compliance",
      "Cybersecurity in AI and Machine Learning",
      "Blockchain and Cryptocurrency Security",
      "Cybersecurity for the Metaverse",
      "Cyber-Physical System Security",
      "Human-Centric Cybersecurity"
    ]
  },
  {
    title: "TRACK V: SMART COMMUNICATION AND ANTENNA SYSTEMS",
    items: [
      "Optical Communication",
      "Underwater Communication",
      "Wireless and Sensor Network",
      "Vehicular, and 5G/6G Communications",
      "Communication and AI",
      "Spectrum Sensing",
      "RF & Microwave Components, Circuits and Systems",
      "Microwave, mm-wave, THz systems",
      "Radar, SAR, and Microwave imaging",
      "Optical Antennas and Arrays",
      "Ultra-wideband and Multi-band antennas",
      "AI/ML for Microwave system",
      "THz & Photonics technologies",
      "Microwave Materials and Processing",
      "Nanomaterials in Electromagnetics",
      "Metamaterials and Photonic crystals",
      "Numerical Methods and Computational Electromagnetics"
    ]
  },
  {
    title: "TRACK VI: INTERDISCIPLINARY RESEARCH",
    items: [
      "Biomedical Systems and Control",
      "Bio-system Modelling and Simulation",
      "Physiological Control System",
      "Medical Devices",
      "Industrial Biotechnology",
      "Bioinformatics and Health Informatics",
      "AI & ML in Healthcare",
      "Bio-nanotechnology and Applications",
      "AI/ML and Robotics",
      "AI and ML for Sustainable Development",
      "AI and ML Interaction in Robotics",
      "Teleoperation and Remote Health Robotics",
      "Medical Robotics",
      "Autonomous Vehicle (Land, aerial and Underwater)"
    ]
  }
];

const Tracks: React.FC = () => {
  return (
    <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-conference-navy mb-12">Conference Tracks</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracksData.map((track, index) => (
          <div 
            key={index} 
            className="track-card animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3>{track.title}</h3>
            <ul className="list-disc pl-5 max-h-[500px] overflow-y-auto">
              {track.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
