import React from "react";
import { motion } from "framer-motion";
import Card from "./cards";
import { FaStethoscope, FaHospitalUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import healthcareImage from "../assets/image.jpeg";

export default function Home() {
  const services = [
    {
      icon: <FaLocationDot />,
      title: "Nearby Hospital Locater",
      description:
        "Find the closest healthcare facilities with real-time availability updates",
    },
    {
      icon: <RiHealthBookFill />,
      title: "Health Records",
      description:
        "Secure, digital access to your complete medical history and test results",
    },
    {
      icon: <SlCalender />,
      title: "Scheduling Appointments",
      description:
        "Book and manage appointments with your healthcare providers instantly",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-[#fbf5dc]">
      
      <main className="container mx-auto px-4 py-9">
        {/* Hero Section */}
        <motion.section
          className="mb-24 relative h-[85vh] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl shadow-2xl"
            style={{
              backgroundImage: `url(${healthcareImage})`,
              backgroundPosition: "center ",
              backgroundSize: "cover",
              backgroundAttachment: "fixed", 
              zIndex: 1, 
            }}
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent rounded-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 py-8">
            <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
              <motion.h1
                style={{
                  fontFamily:
                    'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
                }}
                className="relative text-7xl leading-[5rem] font-bold mb-4 bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="absolute -z-10 left-1 top-1 text-black/60 blur-[2px] backdrop-blur-[1px] rounded-[55px] ">
                  Your Health,
                  <br />
                  Our Priority
                </span>
                Your Health,
                <br />
                Our Priority
              </motion.h1>

              <motion.p
                className="text-xl text-white leading-relaxed relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="absolute -z-10 left-1 top-1 text-black/60 blur-[1px]">
                  Experience seamless healthcare management with Lifeline Devs.
                  Book appointments, find specialists, and access your records
                  with ease.
                </span>
                Experience seamless healthcare management with Lifeline Devs.
                Book appointments, find specialists, and access your records
                with ease.
              </motion.p>

              <motion.button
                className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl text-xl px-7 py-3 shadow-lg transform transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
          style={{
            fontFamily:
              'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
          }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="bg-[#f8e16c] backdrop-blur-lg bg-opacity-80 text-[#03045e] shadow-xl rounded-xl border border-blue-100 h-[250px]"
                headerClass="text-[#03045e]"
              />
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
          style={{
            fontFamily:
              'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
          }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Why Choose Lifeline Devs?
          </motion.h2>
          <div className="flex justify-center">
            <Card
              className="bg-gradient-to-br from-[#0077b6] to-[#00b4d8] text-white p-8 shadow-xl rounded-xl w-[90%] md:w-[80%]"
              contentClass="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FaLocationDot className="mr-2" /> Convenient Locations
                </h3>
                <p>Multiple facilities across the city for easy access.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FaHospitalUser className="mr-2" /> Expert Doctors
                </h3>
                <p>Highly qualified and experienced medical professionals.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <SlCalender className="mr-2" /> 24/7 Availability
                </h3>
                <p>Round-the-clock service for your health needs.</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <FaStethoscope className="mr-2" /> Advanced Technology
                </h3>
                <p>State-of-the-art medical equipment and facilities.</p>
              </motion.div>
            </Card>
          </div>
        </motion.section>

        {/* Symptom Checker Section */}
                {/* Symptom Checker Section */}
                <motion.section
          className="mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
          style={{
            fontFamily:
              'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
          }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Symptom Checker
          </motion.h2>
          <motion.p
            className="text-lg text-center text-gray-600 mb-8"
            variants={itemVariants}
          >
            Not feeling well? Use our interactive Symptom Checker to get
            insights into your health and decide if it's time to consult a
            doctor. Select your symptoms and receive real-time suggestions.
          </motion.p>
          <motion.div
            className="flex flex-col items-center space-y-6 bg-white backdrop-blur-lg bg-opacity-80 text-[#03045e] shadow-xl rounded-xl border border-blue-100 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Add Symptom Checker Component or UI */}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              placeholder="Enter your symptom..."
              className="w-full md:w-1/2 p-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
            />
            <motion.button
              className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl text-xl px-8 py-4 shadow-lg transform transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Check Symptoms
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
          style={{
            fontFamily:
              'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
          }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Get in Touch
          </motion.h2>
          <Card className="bg-sky-200 shadow-xl rounded-xl border border-blue-100">
            <div className="grid md:grid-cols-2 gap-12 p-8">
              <motion.div className="space-y-6" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-[#03045e]">
                  Contact Information
                </h3>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaLocationDot className="text-[#0077b6] text-xl" />
                  </div>
                  <p className="text-gray-600">
                    123 Health Street, Medical City, 12345
                  </p>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-[#0077b6]" />
                  </div>
                  <p className="text-gray-600">7020241088</p>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaEnvelope className="text-[#0077b6]" />
                  </div>
                  <p className="text-gray-600">lifelinedevs@gmail.com</p>
                </motion.div>
              </motion.div>
              <motion.div className="space-y-6" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-[#03045e]">
                  Send us a Message
                </h3>
                <div className="space-y-4">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Email"
                    type="email"
                    className="w-full p-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                  />
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-blue-100 focus:ring-2 focus:ring-[#0077b6] focus:border-transparent transition-all"
                  />
                  <motion.button
                    className="w-full bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl text-xl px-6 py-4 shadow-lg transform transition-all duration-300"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.section>
      </main>
    </div>

  );
}


