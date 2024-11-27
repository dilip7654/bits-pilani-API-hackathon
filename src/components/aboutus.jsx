import React from "react";
import { motion } from "framer-motion";
import healthImage from "../assets/image.jpeg";
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
        {/* Background Image */}
        <img
          src={healthImage} // Replace with the path to your background image
          alt="Background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

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
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Darken the background slightly
          }}
        >
          <motion.h1
  style={{
    fontFamily: 'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)', // Shadow behind text
  }}
  className="relative text-7xl leading-[5rem] font-bold mb-4 bg-gradient-to-r from-[#00b4d8] to-[#aff2ff] bg-clip-text text-transparent"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className="absolute -z-10 left-0 top-1 text-black/60 blur-[2px] backdrop-blur-[1px] rounded-[55px]">
    Welcome to Lifeline Devs
  </span>
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
            Transforming healthcare with cutting-edge technology and compassionate
            care.
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
              <h3 className="text-4xl font-bold text-[#03045e]">
                Our Mission
              </h3>
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

      {/* Remaining sections with similar text shadow adjustments */}
    </>
  );
}
