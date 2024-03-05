import React, { useState } from 'react';
import { FrameMetadata } from '@coinbase/onchainkit';

interface Option {
    label: string;
    image: string;
}

interface FrameProps {
    options: Option[];
}

type FrameButtonMetadata =
  | {
      action: 'link' | 'mint';
      label: string;
      target: string;
    }
  | {
      action?: 'post' | 'post_redirect';
      label: string;
      target?: string;
    };

const Frame: React.FC<FrameProps> = ({ options }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentOption = options[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    };

    const handleBack = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + options.length) % options.length);
    };

    const handleSelection = () => {

        fetch('/api/interaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'select',
                selectedOption: currentOption.label,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data.message);
        })
        .catch(error => console.error('Error handling selection:', error));
    };

    return (
      <>
          <FrameMetadata
            buttons={options.map((option) => ({
              action: 'post',
              label: option.label,
              target: option.image,
            })) as [FrameButtonMetadata, ...FrameButtonMetadata[]]}
            image={{
              src: currentOption.image,
              aspectRatio: '1:1',
            }}
          />
  
          <div className="flex flex-col items-center justify-center p-4 bg-slate-700 min-h-screen bg-slate-700">
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
      </>
    );
};

export default Frame;
