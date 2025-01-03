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
import { motion } from "framer-motion"; // Import Framer Motion
import BackgroundVideo from "./bgvideo"; // Ensure correct import path for BackgroundVideo

// Importing images
import patientImage from "../assets/patientmanagement.jpg";
import emergencyImage from "../assets/emergency.jpg";
import consultingImage from "../assets/consulting.jpg";
import locationImage from "../assets/locater.jpg";
import scheduleImage from "../assets/scheduling.jpg";
import qualityImage from "../assets/qualitydiagno.jpg";
import expertImage from "../assets/expertconsultation.jpg";
import supportImage from "../assets/support.jpg";
import bookingImage from "../assets/booking.png";
import recordImage from "../assets/record.png";
import treatedImage from "../assets/treated.png";
import healthImage from "../assets/healthcare.jpg";


// Core Services Data
const services = [
  {
    title: "Patient Management",
    description:
      "Provide users with the ability to access their health records.",
    image: patientImage,
  },
  {
    title: "Emergency Services",
    description: "Round-the-clock access to emergency care.",
    image: emergencyImage,
  },
  {
    title: "Nearby Hospital Locator",
    description: "Tracks and displays nearby hospitals on an interactive map.",
    image: locationImage,
  },
  {
    title: "Telehealth",
    description: "Virtual consultations with our top specialists.",
    image: consultingImage,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Feature that allows users to book, reschedule, or cancel appointments with hospitals.",
    image: scheduleImage,
  },
];

const Home = () => {
  // Framer Motion Variants
  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
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


        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeInFromLeft}
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
n
            {services.map((service, index) => (
              <motion.div
              key={index}
              className="w-[300px] bg-white rounded-lg shadow-lg p-6 text-center group hover:scale-105 transition-transform duration-500"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              variants={fadeInFromBottom}
            >
              <div className="overflow-hidden"> {/* This div ensures the image stays within bounds */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-t-lg mb-4 object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-2xl font-bold text-[#03045e]">{service.title}</h3>
              <p className="text-[#03045e]">{service.description}</p>
            </motion.div>
            
            ))}
          </div>
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
              Learn More
            </a>
          </div>
        </div>
      </motion.section>

     
      {/* Trusted by Millions Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={fadeInFromLeft}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Trusted by Millions
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Our commitment to innovation and quality healthcare has earned the
            trust of families worldwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: qualityImage,
                title: "Quality Diagnosis",
                description:
                  "We provide the highest quality diagnostics for accurate results.",
              },
              {
                image: expertImage,
                title: "Expert Consultation",
                description:
                  "Consult with top healthcare professionals from around the world.",
              },
              {
                image: supportImage,
                title: "24/7 Support",
                description:
                  "Get support anytime you need with our dedicated customer service.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How We Work Section */}
      <motion.section
        className="py-20 bg-blue-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={fadeInFromBottom}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">How We Work</h2>
          <p className="text-lg text-gray-800 mb-12">
            Discover our patient-centered approach to healthcare. We ensure
            seamless care tailored to meet every individual's needs.
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="text-center max-w-sm">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={bookingImage}
                  alt="Book Your Appointment"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Book Your Appointment
                </h3>
                <p className="text-gray-600">
                  Schedule appointments quickly through our intuitive platform.
                </p>
              </div>
            </div>
            <div className="text-center max-w-sm">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={recordImage}
                  alt="Access Your Records"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Access Your Records
                </h3>
                <p className="text-gray-600">
                  View your health data securely anytime, anywhere.
                </p>
              </div>
            </div>
            <div className="text-center max-w-sm">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={treatedImage}
                  alt="Get Treated"
                  className="w-20 h-20 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  Get Treated
                </h3>
                <p className="text-gray-600">
                  Receive care from highly skilled professionals using the
                  latest advancements.
                </p>
              </div>
            </div>
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
};




export default Home;

