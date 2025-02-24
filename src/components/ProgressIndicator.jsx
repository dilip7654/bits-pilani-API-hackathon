const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    { label: 'Specialization', number: 1 },
    { label: 'Doctor', number: 2 },
    { label: 'Date', number: 3 },
    { label: 'Details', number: 4 },
    { label: 'Confirm', number: 5 },
  ];

  return (
    <div className="w-full flex flex-col items-center mb-4">
      <div className="flex justify-between w-full max-w-xl mb-2">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-7 h-7 flex items-center justify-center rounded-full ${
                step.number <= currentStep ? 'bg-[#0077b6]' : 'bg-[#e0f7fa]'
              } text-white font-semibold`}
            >
              {step.number}
            </div>
            <span
              className={`mt-0 text-center ${
                step.number <= currentStep ? 'text-[#0077b6]' : 'text-gray-600'
              } font-medium`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-xl h-2 bg-[#e0f7fa] rounded-full">
        <div
          className="absolute top-0 left-0 h-2 bg-[#0077b6] rounded-full"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
