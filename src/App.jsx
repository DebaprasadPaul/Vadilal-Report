import React, { useState, useEffect } from 'react';
import { reportData } from './assets/data/reportData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Thesis from './components/Thesis';
import FinancialDashboard from './components/FinancialDashboard';
import StrategicAnalysis from './components/StrategicAnalysis';
import Testimonial from './components/Testimonial';
import DownloadSection from './components/DownloadSection';
import Conclusion from './components/Conclusion';
import ThreeDScene from './components/ThreeDScene';
import MobileBackground from './components/MobileBackground';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main>
      <Navbar />

      {/* Dynamic Background Toggle - Now disabled for mobile per user request */}
      {!isMobile && <ThreeDScene />}

      <Hero
        ticker={reportData.ticker}
        profile={reportData.profile}
      />

      <Thesis items={reportData.investmentThesis} />

      <StrategicAnalysis data={reportData} id="strategic" />

      <FinancialDashboard reportData={reportData} />

      <Conclusion verdict={reportData.verdict} />

      <Testimonial />

      <DownloadSection downloadLink={`${import.meta.env.BASE_URL}Vadilal_Research_Report.pdf`} />
    </main>
  );
}

export default App;
