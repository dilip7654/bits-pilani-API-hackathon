import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/ourmission.jpg";
import visionImage from "../assets/ourvision.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-[#e0f7fa] text-black">
      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-6xl font-extrabold text-[#0077b6] drop-shadow-md"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-xl mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              At Lifeline Devs, we are dedicated to revolutionizing healthcare
              solutions through technology.
            </motion.p>
            <div className="w-full h-[1px] bg-[#0077b6] opacity-40 mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-extrabold text-[#0077b6]">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                Our mission is to make healthcare accessible and efficient for
                everyone. We empower patients and healthcare providers with
                tools that ensure better care and connectivity.
              </p>
              <ul className="list-disc pl-5 space-y-2">
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

      {/* Vision Section */}
      <section className="py-16">
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
              <h3 className="text-4xl font-extrabold text-[#0077b6]">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To lead the global healthcare landscape by combining technology
                with human compassion. We aim to redefine patient care and
                empower healthcare providers with innovative tools.
              </p>
              <p className="text-lg leading-relaxed">
                At Lifeline Devs, we are more than just a tech company—we are
                partners in health and wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
