import React, { useState } from 'react';

interface Option {
    label: string;
    image: string;
}

interface FrameProps {
    options: Option[];
}

const Frame: React.FC<FrameProps> = ({ options }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    };

    const handleSelection = () => {
        console.log("Selected:", options[currentIndex].label);
        //
    };

    return (
      <div className="flex flex-col items-center p-4 bg-slate-700">
        <img src={options[currentIndex].image} alt="Frame Content" className="max-w-full h-auto rounded-lg shadow-md" />
        <div className="flex items-center justify-between w-full pt-6">
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSelection}
          >
            Select
          </button>
          <button
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div className="font-bold text-white p-4">{options[currentIndex].label}</div>
      </div>
    );
};

export default Frame;
