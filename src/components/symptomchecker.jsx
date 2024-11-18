import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStethoscope } from "react-icons/fa";

const symptomsList = [
  "Fever",
  "Cough",
  "Fatigue",
  "Headache",
  "Shortness of Breath",
  "Sore Throat",
];

const SymptomChecker = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSymptomChange = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleCheckSymptoms = () => {
    setShowResults(true);
  };

  const resetChecker = () => {
    setSelectedSymptoms([]);
    setShowResults(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-8 rounded-xl shadow-lg">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent">
          Interactive Symptom Checker
        </h2>
        <p className="text-gray-600 mt-4">
          Select your symptoms and check potential conditions in real-time.
        </p>
      </motion.div>

      {!showResults ? (
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={itemVariants}
          >
            {symptomsList.map((symptom, index) => (
              <motion.div
                key={index}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 shadow-md ${
                  selectedSymptoms.includes(symptom)
                    ? "bg-[#0077b6] text-white border-[#00b4d8]"
                    : "bg-white text-[#03045e] border-blue-100"
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => handleSymptomChange(symptom)}
              >
                <p className="text-center font-medium">{symptom}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-6" variants={itemVariants}>
            <motion.button
              className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl px-6 py-3 shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheckSymptoms}
            >
              Check Symptoms
            </motion.button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="p-6 bg-white rounded-lg shadow-md"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-[#03045e]">
              Potential Conditions
            </h3>
            <p className="text-gray-600 mt-2">
              Based on the selected symptoms, here are some potential conditions
              you might want to consult a doctor about:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
              {selectedSymptoms.length > 0 ? (
                selectedSymptoms.map((symptom, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 10 }}
                    className="text-[#0077b6]"
                  >
                    {`Condition related to ${symptom}`}
                  </motion.li>
                ))
              ) : (
                <p className="text-red-500">No symptoms selected.</p>
              )}
            </ul>
          </motion.div>

          <motion.div className="text-center mt-6" variants={itemVariants}>
            <motion.button
              className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl px-6 py-3 shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetChecker}
            >
              Reset
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default SymptomChecker;
