import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
