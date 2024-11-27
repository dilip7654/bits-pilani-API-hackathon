import React from 'react';

const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    { label: 'Doctor', number: 1 },
    { label: 'Date', number: 2 },
    { label: 'Details', number: 3 },
    { label: 'Confirm', number: 4 },
  ];

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="flex justify-between w-full max-w-xl mb-2">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full ${
                step.number <= currentStep ? 'bg-[#0077b6]' : 'bg-[#a5d8ff]'
              } text-white font-bold`}
            >
              {step.number}
            </div>
            <span className="mt-0 text-center text-gray-700">{step.label}</span>
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-xl h-2 bg-[#a5d8ff] rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-[#0077b6] rounded-full"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
