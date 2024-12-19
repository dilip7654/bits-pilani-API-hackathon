import React, { useEffect, useRef, useState } from "react";
import patientImage from "../assets/patientmanagement.jpg";
import emergencyImage from "../assets/emergency.jpg";
import diagnosticImage from "../assets/diagnostics.jpg";
import consultingImage from "../assets/consulting.jpg";
import pharmacyImage from "../assets/pharmacy.jpg";
import BackgroundVideo from "./bgvideo"; // Ensure correct import path for BackgroundVideo

<<<<<<< HEAD
import { FaStethoscope, FaHospitalUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import healthcareImage from "../assets/image.jpeg";
import Footer from "./patient-interface/Footer";

=======
const Home = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality for the scrolling section
  useEffect(() => {
    const container = scrollContainerRef.current;
    let scrollInterval;

    if (container) {
      const scrollSpeed = 3; // Adjusted scrolling speed for faster movement
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (!isHovered) {
            container.scrollLeft += scrollSpeed; // Increased scroll speed
            if (
              container.scrollLeft + container.clientWidth >=
              container.scrollWidth
            ) {
              container.scrollLeft = 0; // Reset scrolling
            }
          }
        }, 16); // Smooth scroll effect (60fps)
      };

      startScrolling();

      return () => clearInterval(scrollInterval);
    }
  }, [isHovered]);
>>>>>>> 07e333a6c5ca80b1d8c7424bdc93b915538cff70

  const services = [
    {
      title: "Patient Management",
      description: "Streamlined patient records and appointment handling.",
      image: patientImage,
    },
    {
      title: "Emergency Services",
      description: "Round-the-clock access to emergency care.",
      image: emergencyImage,
    },
    {
      title: "Diagnostics",
      description: "State-of-the-art diagnostic tools and facilities.",
      image: diagnosticImage,
    },
    {
      title: "Telehealth",
      description: "Virtual consultations with our top specialists.",
      image: consultingImage,
    },
    {
      title: "Pharmacy Integration",
      description: "Easy access to prescribed medications.",
      image: pharmacyImage,
    },
  ];

  const features = [
    "24/7 Emergency Support",
    "AI-Powered Diagnostics",
    "Telehealth Consultations",
    "Integrated Pharmacy Management",
    "Advanced Appointment Scheduling",
    "Personalized Patient Portals",
  ];

  return (
    <div className="bg-[#f1f5f9] min-h-screen font-sans overflow-hidden">
      {/* Hero Section with Background Video */}
      <section className="relative text-white" style={{ height: "90vh" }}>
        <BackgroundVideo />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Optional overlay to darken the video */}
      
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-extrabold leading-snug mb-4 text-[#fbb13c]">
            Revolutionizing Healthcare Management
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-[#f8e16c]">
            Seamlessly modernize healthcare systems with cutting-edge technology, empowering providers and patients alike.
          </p>
          <button className="px-6 py-3 bg-[#fbb13c] text-[#03045e] text-lg font-semibold rounded-lg shadow-lg hover:bg-[#f8e16c] transition-all">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Scrolling Section for Services */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center text-[#03045e] mb-12">
          Our Core Services
        </h2>
        <div
          className="flex space-x-6 overflow-x-auto no-scrollbar px-8"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ scrollBehavior: "smooth" }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-none w-[500px] h-[600px] bg-white shadow-md rounded-xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-2/3 rounded-t-xl object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#03045e] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
<<<<<<< HEAD
          </Card>
        </motion.section>
      </main>
      <Footer/>
     </div>
=======
          ))}
        </div>
      </section>

      {/* Other Sections (Features, Testimonials, Contact) */}
      {/* The rest of your sections (Features, Testimonials, etc.) can remain unchanged */}
    </div>
>>>>>>> 07e333a6c5ca80b1d8c7424bdc93b915538cff70
  );
};

export default Home;
