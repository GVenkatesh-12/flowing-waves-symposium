
import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl threejs-overlay">
      <div className="glassmorphism p-8 rounded-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-conference-navy mb-6">Contact Us</h1>
        
        <div className="prose max-w-none text-gray-700">
          <p className="mb-8">
            If you have any questions about the conference, please don't hesitate to contact us. Our team is here to assist you with any inquiries related to paper submission, registration, accommodation, or general information.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                Email
              </h2>
              <p className="mb-2">
                <strong>General Inquiries:</strong>
                <br />
                <a href="mailto:issc2025@giet.edu" className="text-conference-blue hover:underline">issc2025@giet.edu</a>
              </p>
              <p className="mb-2">
                <strong>Paper Submission:</strong>
                <br />
                <a href="mailto:papers.issc2025@giet.edu" className="text-conference-blue hover:underline">papers.issc2025@giet.edu</a>
              </p>
              <p>
                <strong>Registration:</strong>
                <br />
                <a href="mailto:registration.issc2025@giet.edu" className="text-conference-blue hover:underline">registration.issc2025@giet.edu</a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue">
              <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Phone
              </h2>
              <p className="mb-2">
                <strong>Conference Secretariat:</strong>
                <br />
                +91-1234567890
              </p>
              <p>
                <strong>Technical Support:</strong>
                <br />
                +91-0987654321
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue mb-12">
            <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Address
            </h2>
            <address className="not-italic">
              <p className="mb-2">
                <strong>Conference Venue:</strong>
              </p>
              <p>
                GIET University<br />
                Gunupur - 765022<br />
                Rayagada District<br />
                Odisha, India
              </p>
            </address>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-conference-light-blue mb-12">
            <h2 className="text-xl font-bold text-conference-blue mb-4 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Form
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-conference-blue"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-conference-blue"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-conference-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-conference-blue"
                  required
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-conference-blue text-white rounded-md hover:bg-conference-dark-blue transition-colors shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div className="bg-conference-light-blue p-6 rounded-lg">
            <h2 className="text-lg font-bold text-conference-blue mb-2">Response Time</h2>
            <p>
              We aim to respond to all inquiries within 2-3 business days. For urgent matters, please mention "URGENT" in the subject line of your email.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
