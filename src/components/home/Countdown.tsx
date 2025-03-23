
import React, { useState, useEffect } from 'react';

type TimeLeft = {
  months: number;
  days: number;
  hours: number;
};

const calculateTimeLeft = (): TimeLeft => {
  const eventDate = new Date('2025-11-06T00:00:00');
  const now = new Date();
  
  // Total milliseconds between now and the event
  const difference = eventDate.getTime() - now.getTime();
  
  // Calculate months, days, hours
  let months = eventDate.getMonth() - now.getMonth() + 
    (eventDate.getFullYear() - now.getFullYear()) * 12;
  
  // Calculate remaining days after counting months
  const tempDate = new Date(now);
  tempDate.setMonth(tempDate.getMonth() + months);
  
  let days = Math.floor((eventDate.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
  
  // If days are negative, adjust months
  if (days < 0) {
    months--;
    tempDate.setMonth(tempDate.getMonth() - 1);
    days = Math.floor((eventDate.getTime() - tempDate.getTime()) / (1000 * 60 * 60 * 24));
  }
  
  // Calculate hours
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return {
    months,
    days,
    hours
  };
};

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60); // Update every minute
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="py-6 px-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-conference-navy">IEEE-iSSSC 2025</h2>
        <p className="text-conference-blue">November 06, 2025</p>
      </div>
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        <div className="countdown-box animate-fade-in animate-delay-100">
          <span className="number">{timeLeft.months}</span>
          <span className="label">Months</span>
        </div>
        
        <div className="countdown-box animate-fade-in animate-delay-200">
          <span className="number">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        
        <div className="countdown-box animate-fade-in animate-delay-300">
          <span className="number">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
