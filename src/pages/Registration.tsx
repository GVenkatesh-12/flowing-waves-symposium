
import React from 'react';
import { Calendar, CreditCard, Info, AlertTriangle } from 'lucide-react';

const Registration = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Registration</h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 flex items-start gap-4">
          <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-700 mb-1">Registration Not Yet Open</h3>
            <p className="text-gray-700">
              Registration for iSSSC 2025 will open in early 2025. The information provided below is tentative and subject to change.
            </p>
          </div>
        </div>
        
        <div className="prose max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Registration Fees</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full border border-conference-light-blue rounded-lg overflow-hidden">
              <thead className="bg-conference-light-blue">
                <tr>
                  <th className="py-3 px-4 text-left text-conference-blue">Category</th>
                  <th className="py-3 px-4 text-center text-conference-blue">Early Bird (Before Sep 30, 2025)</th>
                  <th className="py-3 px-4 text-center text-conference-blue">Regular (After Sep 30, 2025)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-conference-light-blue">
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">IEEE Member (Student)</td>
                  <td className="py-3 px-4 text-center">$200</td>
                  <td className="py-3 px-4 text-center">$250</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">IEEE Member (Professional)</td>
                  <td className="py-3 px-4 text-center">$300</td>
                  <td className="py-3 px-4 text-center">$350</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Non-IEEE Member (Student)</td>
                  <td className="py-3 px-4 text-center">$250</td>
                  <td className="py-3 px-4 text-center">$300</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Non-IEEE Member (Professional)</td>
                  <td className="py-3 px-4 text-center">$350</td>
                  <td className="py-3 px-4 text-center">$400</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-4 font-medium">Attendee (Without Paper)</td>
                  <td className="py-3 px-4 text-center">$150</td>
                  <td className="py-3 px-4 text-center">$200</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Additional Paper</td>
                  <td className="py-3 px-4 text-center">$100</td>
                  <td className="py-3 px-4 text-center">$100</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Registration Process</h2>
          <p className="mb-4">
            Registration will be available through the conference online registration system. The link will be provided here once registration opens.
          </p>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Registration Includes</h2>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Access to all technical sessions</li>
            <li>Conference materials</li>
            <li>Lunch and refreshments during the conference days</li>
            <li>Welcome reception</li>
            <li>Conference banquet</li>
            <li>Certificate of participation</li>
          </ul>
          
          <div className="bg-conference-light-blue p-6 rounded-lg mb-8 flex items-start gap-4">
            <Info className="h-6 w-6 text-conference-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-conference-blue mb-2">Important Notes</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>At least one author must register at the full registration rate to present the paper.</li>
                <li>Each registration covers one paper presentation.</li>
                <li>IEEE membership will be verified during registration.</li>
                <li>Student registrants must provide proof of student status.</li>
                <li>Cancellation and refund policies will be announced along with registration details.</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Important Dates</h2>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
              <Calendar className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Early Bird Registration Deadline</h3>
                <p>September 30, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
              <Calendar className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Regular Registration Deadline</h3>
                <p>October 31, 2025</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm">
              <CreditCard className="h-5 w-5 text-conference-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Payment Methods</h3>
                <p>Credit Card, Bank Transfer</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-conference-blue mt-8 mb-4">Contact</h2>
          <p className="mb-4">
            For any queries regarding registration, please contact: <a href="mailto:issc2025@giet.edu" className="text-conference-blue hover:underline">issc2025@giet.edu</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
