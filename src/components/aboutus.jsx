import React from "react";
import { motion } from "framer-motion";
import missionImage from "../assets/ourmission.jpg";
import visionImage from "../assets/ourvision.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#03045e] to-[#0077b6] text-white">
      {/* About Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-6xl baumans-regular font-extrabold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="text-xl mt-6 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              At Lifeline Devs, we are dedicated to revolutionizing healthcare
              solutions through technology.
            </motion.p>
            <div className="w-full h-[1px] bg-white opacity-40"></div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl font-extrabold">Our Mission</h3>
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
              <h3 className="text-4xl font-extrabold">Our Vision</h3>
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

      {/* Contact Section */}
      <div className="py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">We’re Here to Help</h1>
          <p className="text-xl mt-4">
            Our service team is available Mon-Fri (8 AM - 8 PM STD), and on
            weekends & holidays (9 AM - 6 PM STD).
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Start a Chat */}
          <div className="rounded-lg border border-white p-6 hover:shadow-lg transition hover:bg-white/20">
            <h2 className="text-2xl font-semibold">Start a Chat</h2>
            <p className="mt-2">We respond right away during normal business hours.</p>
            <button className="mt-4 px-4 py-2 bg-white/20 border border-white text-white rounded-lg hover:bg-white/30 transition">
              Start Chat
            </button>
          </div>

          {/* Call Us */}
          <div className="rounded-lg border border-white p-6 hover:shadow-lg transition hover:bg-white/20">
            <h2 className="text-2xl font-semibold">Give Us a Call</h2>
            <p className="mt-2">We strive to answer within one ring.</p>
            <div className="mt-4">
              <p>
                <strong>Docters:</strong> +91 7020241088
              </p>
              <p>
                <strong>Providers:</strong> +91 9359367590
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="rounded-lg border border-white p-6 hover:shadow-lg transition hover:bg-white/20">
            <h2 className="text-2xl font-semibold">Send Us an Email</h2>
            <p className="mt-2">We’ll respond within a day.</p>
            <a
              href="mailto:service@zocdoc.com"
              className="mt-4 inline-block px-4 py-2 bg-white/20 border border-white text-white rounded-lg hover:bg-white/30 transition"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Have Questions? We’ve Got Answers
          </h2>
          <button className="px-6 py-3 bg-white/20 border border-white text-white rounded-lg hover:bg-white/30 transition">
            Visit Our Help Center
          </button>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
