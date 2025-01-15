import React from "react";
import { motion } from "framer-motion"; 
import BackgroundVideo from "./bgvideo"; 

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
    <div className="min-h-screen font-sans overflow-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative text-white" style={{ height: "90vh" }}>
        <BackgroundVideo />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={fadeInFromLeft}
        >
          <h1 className="text-5xl font-extrabold leading-snug mb-4 text-[#03045e]">
            LifeLine Devs: Transforming Healthcare Through Innovation
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#03045e] font-bold">
            Seamlessly modernize healthcare systems with cutting-edge
            technology, empowering providers and patients alike.
          </p>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <motion.section
        className="bg-[#fcefef] py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={fadeInFromBottom}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#0077b6] mb-12">
            Our Core Services
          </h2>
          <div className="flex justify-center gap-12">
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
                <div className="overflow-hidden">
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

      {/* Advanced Care Section */}
      <motion.section
        className="relative bg-blue-100 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={fadeInFromLeft}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
          <div className="lg:w-1/2">
            <motion.img
              src={healthImage}
              alt="Compassionate healthcare"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left lg:ml-10">
            <h1 className="text-4xl font-extrabold text-blue-800 mb-4 leading-tight">
              Advanced Care, Close to Home
            </h1>
            <p className="text-lg text-gray-900 mb-6">
              Experience world-class healthcare services tailored to your needs, from advanced diagnostics and personalized treatments to seamless telehealth options and modern patient management tools - all under one roof.
            </p>
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300"
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
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-blue-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={fadeInFromBottom}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg mb-8">
            Take the first step towards better healthcare today. We’re here to
            help you every step of the way.
          </p>
          <a
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 py-3 px-6 rounded-lg shadow-md transition duration-300 font-semibold"
          >
            Get Started
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
