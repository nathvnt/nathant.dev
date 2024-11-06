import { useState } from 'react';
import { MdEmail } from 'react-icons/md';

export default function EmailCopy() {
  const [tooltipText, setTooltipText] = useState("Copy email address");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nathan@ipflux.io");
    setTooltipText("Copied!");
    setShowTooltip(true);
    setTimeout(() => {
      setTooltipText("Copy email address");
      setShowTooltip(false);
    }, 2000); 
  };

  return (
    <div>
      <div 
        className="flex justify-center w-[80%] lg:w-[40%] mx-auto text-center mt-12 gap-4 text-xl relative mb-2"
        onClick={handleCopy}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <MdEmail className="mt-1" />
          <h2>nathan@ipflux.io</h2>
        </div>
        
        {/* Tooltip */}
        <span 
          className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-300 bg-opacity-20 text-white text-sm px-2 py-1 rounded ${showTooltip ? 'block' : 'hidden'}`}
          style={{ whiteSpace: 'nowrap' }}
        >
          {tooltipText}
        </span>
      </div>
      <p className='text-sm text-center mb-6'>(click to copy email)</p>
    </div>
  );
}
