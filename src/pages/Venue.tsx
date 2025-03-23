
import React from 'react';
import { MapPin, Hotel, Bus, Plane, Coffee } from 'lucide-react';

const Venue = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Conference Venue</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            The 3rd IEEE International Symposium on Sustainable Energy, Signal Processing and Cyber Security (iSSSC 2025) will be held at GIET University, Gunupur, Odisha, India.
          </p>
          
          <div className="bg-gray-200 h-80 mb-8 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-conference-blue mx-auto mb-2" />
              <p className="text-gray-600">Map will be embedded here</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">About GIET University</h2>
          <p className="mb-4">
            GIET University, located in Gunupur, Odisha, is a leading institution known for its academic excellence and research contributions. The university offers a wide range of undergraduate, postgraduate, and doctoral programs across various disciplines.
          </p>
          <p className="mb-8">
            With state-of-the-art infrastructure and a vibrant academic environment, GIET University provides the perfect venue for iSSSC 2025, facilitating knowledge exchange and collaboration among participants from around the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Hotel className="h-5 w-5 mr-2" />
                Accommodation
              </h2>
              <p className="mb-4">
                A list of recommended hotels near the conference venue will be provided soon. Special rates will be negotiated for conference participants.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Hotel Grand Palace (4-star, 2 km from venue)</li>
                <li>Hotel Sunshine (3-star, 1 km from venue)</li>
                <li>University Guest House (on campus)</li>
                <li>Budget Stays (various options within 3 km)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Plane className="h-5 w-5 mr-2" />
                Travel Information
              </h2>
              <p className="mb-4">
                The nearest airports to Gunupur are:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Visakhapatnam Airport (120 km)</li>
                <li>Bhubaneswar Airport (350 km)</li>
              </ul>
              <p>
                From these airports, you can reach Gunupur by taxi or bus. The organizing committee will arrange for pickup services from major transportation hubs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Bus className="h-5 w-5 mr-2" />
                Local Transportation
              </h2>
              <p className="mb-4">
                Various transportation options are available within Gunupur:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Taxi services</li>
                <li>Auto-rickshaws</li>
                <li>Shuttle services (will be arranged by the conference)</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Coffee className="h-5 w-5 mr-2" />
                Local Attractions
              </h2>
              <p className="mb-4">
                Explore the cultural and natural beauty of Odisha during your visit:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Mahendragiri Hills (50 km)</li>
                <li>Jiranga Monastery</li>
                <li>Gupteswar Cave</li>
                <li>Local Handicraft Markets</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-conference-light-blue p-6 rounded-lg mt-8">
            <h2 className="text-lg font-bold text-conference-blue mb-2">Visa Information</h2>
            <p className="mb-4">
              International participants may require a visa to enter India. We recommend applying for a visa well in advance of the conference. The organizing committee can provide invitation letters to support your visa application upon request.
            </p>
            <p>
              For visa-related inquiries, please contact: <a href="mailto:issc2025@giet.edu" className="text-conference-blue hover:underline">issc2025@giet.edu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
