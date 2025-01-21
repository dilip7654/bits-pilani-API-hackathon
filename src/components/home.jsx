import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, Calendar } from "lucide-react";
import homeImage from "../assets/home.jpg";
import home2Image from "../assets/home2.jpg";
import home3Image from "../assets/home3.jpg";
import peopleImage from "../assets/people.jpg";
import people1Image from "../assets/people1.jpg";
import people2Image from "../assets/people2.jpg";
import { useInView } from "react-intersection-observer";
import HealthCard from "./HealthcareCard";


// Feature Card Component
const FeatureCard = ({ title, subtitle, description, imgSrc, buttonText }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#e0f7fa] border border-[#90e0ef] rounded-lg p-8 transform transition-transform hover:scale-105 hover:border-[#48cae4]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-lg mb-6" />
      <div className="text-[#023e8a] text-sm mb-2">{subtitle}</div>
      <h2 className="text-[#0077b6] text-2xl font-bold mb-4">{title}</h2>
      <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors">
        {buttonText}
      </button>
    </motion.div>
  );
};

// Testimonial Card Component

const TestimonialCard = ({ name, role, company, quote, imgSrc, rating, date }) => {
  return (
    <motion.div
      className="bg-[#e0f7fa] border border-[#90e0ef] rounded-xl p-8 w-full max-w-2xl mx-auto flex items-center"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-1/3 flex-shrink-0 h-48">
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <div className="w-2/3 pl-6">
        <p className="text-[#023e8a] text-lg italic mb-4">"{quote}"</p>
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={index < rating ? "#0077b6" : "#E4E4E4"}
              viewBox="0 0 20 20"
              className="mr-1"
            >
              <path d="M10 15l-5.236 3.292 1.418-6.236-4.864-4.732 6.264-.516L10 0l2.418 6.792 6.264.516-4.864 4.732 1.418 6.236z" />
            </svg>
          ))}
        </div>
        <h3 className="text-[#0077b6] font-bold text-lg">{name}</h3>
        <p className="text-[#023e8a] text-sm">{role}</p>
        <p className="text-[#023e8a] text-sm">{company}</p>
        <p className="text-[#023e8a]/60 text-sm mt-2">{date}</p>
      </div>
    </motion.div>
  );
};

// Contact Card Component
const ContactCard = ({ title, subtitle, description, action }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-[#e0f7fa] border border-[#90e0ef] rounded-lg p-8 transform transition-transform hover:scale-105 hover:border-[#48cae4]"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-[#023e8a] text-sm mb-2">{subtitle}</div>
      <h2 className="text-[#0077b6] text-2xl font-bold mb-4">{title}</h2>
      <p className="text-[#023e8a] mb-6">{description}</p>
      {action}
    </motion.div>
  );
};
export default function HealthcareSite() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [homeImage, home2Image, home3Image];

  const testimonials = [
    {
      name: "Maxine Whiteside",
      role: "Director of Health Information Systems",
      company: "Commonwealth Pain & Spine",
      quote: "I was able to close 300 charts in three days because of how streamlined and easy charting is.",
      imgSrc: peopleImage,
      rating: 5,
      date: "January 2025",
    },
    {
      name: "Stephen Bradley",
      role: "Asst. Director of IT",
      company: "HeartPlace",
      quote: "Every aspect is superior, from the scheduling to billing to the reports we can pull.",
      imgSrc: people1Image,
      rating: 4,
      date: "December 2024",
    },
    {
      name: "John Doe",
      role: "Chief Medical Officer",
      company: "MedTech Solutions",
      quote: "This platform has transformed how we manage patient data. It's incredibly intuitive and efficient.",
      imgSrc: people2Image,
      rating: 5,
      date: "November 2024",
    },
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(testimonialInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const nextTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white text-[#023e8a]">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={images[currentImageIndex]}
          alt="Healthcare Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <motion.div
          className="relative h-full flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
              Lifeline Devs: Your Health, Our Priority
              </h1>
              <p className="text-xl text-white mb-8">
              Experience Healthcare Like Never Before—Where Convenience Meets Care, Giving You the Tools to Manage Your Health Effortlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <HealthCard />

    
     {/* Testimonials Section */}
      <div className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#0077b6] mb-6">What Our Clients Say</h2>
          </motion.div>

          <div className="relative">
            <div className="flex items-center justify-center space-x-4">
              <ChevronLeft
                size={40}
                className="text-[#0077b6] cursor-pointer"
                onClick={prevTestimonial}
              />
              <TestimonialCard {...testimonials[testimonialIndex]} />
              <ChevronRight
                size={40}
                className="text-[#0077b6] cursor-pointer"
                onClick={nextTestimonial}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-10 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-[#0077b6] mb-6">We're Here to Help</h2>
            <p className="text-xl text-[#023e8a]">
              Our service team is available Mon-Fri (8 AM - 8 PM STD), and on weekends & holidays (9 AM - 6 PM STD).
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ContactCard
              title="Start a Chat"
              subtitle="Instant Support"
              description="We respond right away during normal business hours."
              action={
                <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors w-full">
                  Start Chat
                </button>
              }
            />
            <ContactCard
              title="Give Us a Call"
              subtitle="Voice Support"
              description="We strive to answer within one ring."
              action={
                <div className="space-y-3">
                  <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors w-full">
                    Call Doctors: +91 7020241088
                  </button>
                  <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors w-full">
                    Call Providers: +91 9359367590
                  </button>
                </div>
              }
            />
            <ContactCard
              title="Send Us an Email"
              subtitle="Email Support"
              description="We'll respond within a day."
              action={
                <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors w-full">
                  Email Us
                </button>
              }
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-20 bg-[#ffffff]">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto bg-white border border-[#90e0ef] rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-gradient-to-br from-[#0077b6] to-[#023e8a] text-white">
                <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                <p className="text-lg mb-8">
                  Join our newsletter and get the latest healthcare insights and
                  updates delivered to your inbox.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Healthcare tips and trends
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Industry news and updates
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Exclusive health resources
                  </li>
                </ul>
              </div>
              <div className="p-12 bg-white">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#023e8a] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023e8a] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0077b6] text-white px-6 py-3 rounded-lg hover:bg-[#005f99] transition-colors font-semibold"
                  >
                    Subscribe to Newsletter
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}