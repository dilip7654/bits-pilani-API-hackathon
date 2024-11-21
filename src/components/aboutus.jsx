import React from "react";
import { motion } from "framer-motion";
import BackgroundVideo from "./bgvideo";
import missionImage from "../assets/ourmission.jpg";
import visionImage from "../assets/ourvision.jpg";

export default function AboutUs() {
  const milestones = [
    { year: "2020", event: "Launched the company" },
    { year: "2021", event: "Expanded to new markets" },
    { year: "2022", event: "Launched flagship product" },
    { year: "2023", event: "Achieved major funding" },
  ];
  return (
    <>
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <BackgroundVideo />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
            zIndex: 1,
            padding: "0 20px",
          }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Adds shadow to make text stand out
              color: "#fbb13c", // Change text color to a yellow-orange for contrast
            }}
          >
            Welcome to Lifeline Devs
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl max-w-3xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)", // Shadow for clarity
              color: "#f8e16c", // Soft light yellow for the paragraph
            }}
          >
            Transforming healthcare with cutting-edge technology and
            compassionate care.
          </motion.p>
          <motion.button
            className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl text-xl px-8 py-4 shadow-lg transform transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#00b4d8]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              At Lifeline Devs, we are dedicated to revolutionizing healthcare
              solutions through technology.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-[#03045e]">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to make healthcare accessible and efficient for
                everyone. We empower patients and healthcare providers with
                tools that ensure better care and connectivity.
              </p>
              <ul className="list-disc pl-5 text-lg text-gray-700 space-y-2">
                <li>Provide innovative, patient-centered solutions.</li>
                <li>Leverage technology to enhance healthcare delivery.</li>
                <li>Build a future where healthcare is accessible to all.</li>
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={missionImage}
                alt="Healthcare team"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={visionImage}
                alt="Vision of Lifeline Devs"
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-bold text-[#03045e]">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To lead the global healthcare landscape by combining technology
                with human compassion. We aim to redefine patient care and
                empower healthcare providers with innovative tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Lifeline Devs, we are more than just a tech company—we are
                partners in health and wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        className="py-16 mb-24"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-[#0077b6] to-[#00b4d8] bg-clip-text text-transparent"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Our Journey
        </motion.h2>

        {/* Timeline container */}
        <div className="flex justify-center items-center">
          {/* Milestone markers and events */}
          <div className="flex items-center w-full px-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative w-1/4"
              >
                {/* Milestone card */}
                <motion.div
                  className="bg-white p-4 rounded-xl shadow-lg mb-4"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 16px rgba(0,119,182,0.2)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-[#03045e] mb-2">
                    {milestone.year}
                  </h3>
                  <p className="text-gray-600 text-sm">{milestone.event}</p>
                </motion.div>

                {/* Arrow pointing to the next milestone */}
                {index < milestones.length - 1 && (
                  <motion.div
                    className="absolute left-[110%] top-1/2 transform -translate-y-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#fbb13c] w-8 h-8" // Adjusted arrow size
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l7-7-7-7"
                      />
                    </svg>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#00b4d8]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Lifeline Devs?
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mt-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            With a blend of technology, innovation, and empathy, we are
            reshaping healthcare for the modern world.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#03045e]">
                Innovative Solutions
              </h3>
              <p className="text-gray-700 mt-2">
                Our cutting-edge platforms make healthcare seamless and
                accessible.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#03045e]">
                Compassionate Care
              </h3>
              <p className="text-gray-700 mt-2">
                We prioritize patient well-being and personalized care
                experiences.
              </p>
            </motion.div>
            <motion.div
              className="p-6 bg-white shadow-lg rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#03045e]">
                Global Impact
              </h3>
              <p className="text-gray-700 mt-2">
                Our solutions reach people globally, improving lives and
                outcomes worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
