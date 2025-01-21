import React, { useCallback } from "react";
import { throttle } from "lodash";
import { motion } from "framer-motion";
import { Hospital, Calendar, PhoneCall, FileText, Heart } from "lucide-react";

const CARD_BACKGROUNDS = {
  hospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
  appointment: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80",
  emergency: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80",
  records: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
};

function HealthcareCard({ 
  title, 
  description, 
  icon: Icon, 
  bgImage, 
  buttonText = "Learn More",
  onClick 
}) {
  const handleMouseMove = useCallback(
    throttle((e) => {
      if (!e.currentTarget) return; // Add null check
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
      e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
    }, 50),
    []
  );

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
      className="relative overflow-hidden rounded-2xl shadow-2xl h-[380px] flex-1 min-w-[320px] group bg-gray-900 border border-white/10"
      onMouseMove={handleMouseMove}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        animate={{ opacity: isHovered ? 0.95 : 0.8 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        <div className="flex items-center gap-4">
          <motion.div
            className="p-4 rounded-2xl bg-white/10"
            animate={{ rotateY: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>
        <div className="space-y-4">
          <motion.h3
            className="text-2xl font-bold text-white"
            animate={{ letterSpacing: isHovered ? "0.05em" : "0em", y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-white/90 text-base"
            animate={{ x: isHovered ? 10 : 0, opacity: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          <motion.button
            onClick={onClick}
            className="py-3 px-6 rounded-xl bg-white/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function HealthCard() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-health-red animate-pulse-slow" />
            <h1 className="text-6xl font-bold text-[#023e8a]">LifeLine Devs</h1>
          </div>
          <p className="text-[#023e8a] text-l max-w-2xl mx-auto">
            Your comprehensive healthcare companion. Access medical services, manage appointments,
            and keep track of your health records all in one place.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <HealthcareCard
            title="Locate Nearby Hospitals"
            description="Find the closest medical facilities to your location with real-time availability information."
            icon={Hospital}
            bgImage={CARD_BACKGROUNDS.hospital}
            buttonText="Find Hospitals"
          />
          <HealthcareCard
            title="Book Appointments"
            description="Schedule consultations with healthcare professionals at your convenience."
            icon={Calendar}
            bgImage={CARD_BACKGROUNDS.appointment}
            buttonText="Schedule Now"
          />
          <HealthcareCard
            title="Emergency Services"
            description="Quick access to emergency services and immediate medical assistance."
            icon={PhoneCall}
            bgImage={CARD_BACKGROUNDS.emergency}
            buttonText="Get Help Now"
          />
          <HealthcareCard
            title="Health Records"
            description="Securely access and manage your medical history and test results."
            icon={FileText}
            bgImage={CARD_BACKGROUNDS.records}
            buttonText="View Records"
          />
        </div>
      </main>
    </div>
  );
}
