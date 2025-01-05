import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/ourmission.jpg";
import visionImage from "../assets/ourvision.jpg";
import bgImage from "../assets/aboutus.png";
import { Bold } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      {/* About Us Section */}
      <div
  style={{
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  }}
>
  {/* Background Image */}
  <img
    src={bgImage}
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
      alignItems: "flex-start", // Align content to the left
      color: "white",
      textAlign: "left", // Align text to the left
      zIndex: 1,
      padding: "0 40px",
    }}
  >
    <motion.h1
      style={{
        fontFamily:
          'gt-super, Georgia, Cambria, "Times New Roman", Times, serif',
        fontSize: "3rem",
        lineHeight: "1.2",
        color: ["#03045e"],
        fontWeight: "bold",
      }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Welcome to Lifeline Devs
    </motion.h1>

    <motion.p
      style={{
        fontSize: "1.5rem",
        marginTop: "20px",
        color: ["#0077b6"],
        maxWidth: "600px",
        text: Bold
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      Transforming healthcare with cutting-edge technology and compassionate care. Delivering innovative solutions to connect patients and providers seamlessly.
    </motion.p>

    <motion.button
      className="bg-[#fbb13c] hover:bg-[#f8e16c] text-[#03045e] font-bold rounded-xl text-lg px-6 py-3 shadow-lg transform transition-all duration-300 mt-6"
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
              At Lifeline Devs, we are dedicated to revolutionizing healthcare solutions through technology.
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
                Our mission is to make healthcare accessible and efficient for everyone. We empower patients and healthcare providers with tools that ensure better care and connectivity.
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
                To lead the global healthcare landscape by combining technology with human compassion. We aim to redefine patient care and empower healthcare providers with innovative tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Lifeline Devs, we are more than just a tech company—we are partners in health and wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="min-h-screen bg-gradient-to-b from-[#fcefef] to-[#90e0ef] flex flex-col items-center py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#03045e]">We’re Here to Help</h1>
          <p className="text-lg text-[#0077b6] mt-4">
            Our service team is available Mon-Fri (8 AM - 8 PM STD), and on weekends & holidays (9 AM - 6 PM STD).
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          {/* Start a Chat */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0077b6]">Start a Chat</h2>
            <p className="text-[#03045e] mt-2">
              We respond right away during normal business hours.
            </p>
            <button className="mt-4 px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition">
              Start Chat
            </button>
          </div>

          {/* Call Us */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0077b6]">Give Us a Call</h2>
            <p className="text-[#03045e] mt-2">We strive to answer within one ring.</p>
            <div className="mt-4">
              <p>
                <strong>Patients:</strong> +91 7020241088
              </p>
              <p>
                <strong>Providers:</strong> +91 9359367590
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-[#0077b6]">Send Us an Email</h2>
            <p className="text-[#03045e] mt-2">We’ll respond within a day.</p>
            <a
              href="mailto:service@zocdoc.com"
              className="mt-4 inline-block px-4 py-2 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-[#03045e] mb-6">
            Have Questions? We’ve Got Answers
          </h2>
          <button className="px-6 py-3 bg-[#fbb13c] text-[#03045e] rounded-lg hover:bg-[#f8e16c] transition">
            Visit Our Help Center
          </button>
        </section>

        {/* Get Started Section */}
        <footer className="mt-16 bg-[#90e0ef] py-6 w-full text-center">
          <p className="text-[#03045e] text-lg">Are you a practice interested in joining Lifeline Devs?</p>
          <button className="mt-2 px-6 py-3 bg-[#0077b6] text-white rounded-lg hover:bg-[#00b4d8] transition">
            Get Started
          </button>
        </footer>
      </div>
    </>
  );
};

export default AboutUs;
