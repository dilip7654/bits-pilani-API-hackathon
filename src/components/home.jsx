import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronLeft, ChevronRight, Monitor, Calendar } from "lucide-react";
import locateImage from "../assets/locater.jpg";
import emergencyImage from "../assets/emergency.jpg";
import qualityImage from "../assets/qualitydiagno.jpg";
import homeImage from "../assets/home.jpg";
import home2Image from "../assets/home2.jpg";
import home3Image from "../assets/home3.jpg";
import peopleImage from "../assets/people.jpg";
import people1Image from "../assets/people1.jpg";
import people2Image from "../assets/people2.jpg";
import { useInView } from "react-intersection-observer";

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
      className="bg-white border border-[#0077b6] rounded-lg p-8 transform transition-transform hover:scale-105 hover:border-[#0077b6]/80"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-lg mb-6" />
      <div className="text-[#0077b6] text-sm mb-2">{subtitle}</div>
      <h2 className="text-[#0077b6] text-2xl font-bold mb-4">{title}</h2>
      <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white transition-colors">
        {buttonText}
      </button>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, company, quote, imgSrc, rating, date }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="bg-white border border-[#0077b6] rounded-lg p-6 w-full max-w-2xl mx-auto flex items-center"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      {/* Image Section */}
      <div className="w-1/3 flex-shrink-0 h-48"> {/* Change here */}
      <img
  src={imgSrc}
  alt={name}
  className="w-full h-full object-contain rounded-lg" // Changed to object-contain
/>

      </div>
      {/* Content Section */}
      <div className="w-2/3 pl-6">
        <p className="text-[#0077b6] text-base mb-4">"{quote}"</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill={index < rating ? "#FFD700" : "#E4E4E4"}
              viewBox="0 0 20 20"
              className="mr-1"
            >
              <path d="M10 15l-5.236 3.292 1.418-6.236-4.864-4.732 6.264-.516L10 0l2.418 6.792 6.264.516-4.864 4.732 1.418 6.236z" />
            </svg>
          ))}
        </div>
        <h3 className="text-[#0077b6] font-bold text-lg">{name}</h3>
        <p className="text-[#0077b6] text-sm">{role}</p>
        <p className="text-[#0077b6] text-sm">{company}</p>
        <p className="text-[#0077b6] text-sm mt-2">{date}</p>
      </div>
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
    <div className="min-h-screen bg-gradient-to-r from-[#03045e]/90 to-[#0077b6]/80">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src={images[currentImageIndex]}
          alt="Healthcare Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <motion.div
          className="relative h-full flex items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Providing care can be simpler
              </h1>
              <p className="text-xl text-white mb-8">
                Make achieving your best possible outcomes easier with our all-in-one healthcare solution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Quickly locate hospitals and healthcare facilities in your area"
              subtitle="Find Care When You Need It"
              imgSrc={locateImage}
              buttonText="Nearby Hospital Locater"
            />
            <FeatureCard
              title="Schedule appointments online 24/7 at your convenience"
              subtitle="Book Care Your Way"
              imgSrc={emergencyImage}
              buttonText="Scheduling Appointment"
            />
            <FeatureCard
              title="Get immediate assistance and critical care coordination"
              subtitle="24/7 Emergency Care Access"
              imgSrc={emergencyImage}
              buttonText="Emergency Services"
            />
            <FeatureCard
              title="Access and manage your medical records securely"
              subtitle="Your Health History at Hand"
              imgSrc={qualityImage}
              buttonText="Health Records"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">How customers feel about us</h2>
          <div className="relative w-full max-w-xl mx-auto">
            <TestimonialCard {...testimonials[testimonialIndex]} />
            <div className="flex justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="bg-[#0077b6] text-white rounded-full p-2 hover:bg-[#005f99] transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-[#0077b6] text-white rounded-full p-2 hover:bg-[#005f99] transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Let us help you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Monitor className="text-[#0077b6] w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-[#0077b6] mb-2">Dig deeper into our solution</h3>
              <p className="text-gray-800 mb-6">
                See how it can help improve efficiency, performance, and outcomes.
              </p>
              <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white">
                Learn more
              </button>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Calendar className="text-[#0077b6] w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold text-[#0077b6] mb-2">Get a personalized demo</h3>
              <p className="text-gray-800 mb-6">
                Submit a request, and we'll schedule a brief call.
              </p>
              <button className="border border-[#0077b6] text-[#0077b6] px-6 py-2 rounded-full hover:bg-[#0077b6] hover:text-white">
                Schedule a demo today
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#03045e]/90 to-[#0077b6]/80 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">Get the latest healthcare tips and updates directly to your inbox.</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-full text-black"
        />
        <button className="ml-4 px-6 py-2 bg-white text-[#03045e] rounded-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}
