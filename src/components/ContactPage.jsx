import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactCard from "../components/ContactCard";

// Replace this Button with a basic implementation if you don't have a custom Button component
const Button = ({ children, className }) => (
  <button className={`px-8 py-4 rounded ${className}`}>{children}</button>
);

export default function ContactPage() {
  const [selectedCard, setSelectedCard] = useState(null);

  const contactMethods = [
    {
      title: "Start a Chat",
      subtitle: "Instant Support",
      description: "We respond right away during normal business hours.",
      icon: "chat",
      action: (
        <Button className="w-full bg-gradient-to-r from-[#0077b6] to-[#e0f7fa] text-[#023e8a]">
          Start Chat
        </Button>
      ),
    },
    {
      title: "Give Us a Call",
      subtitle: "Voice Support",
      description: "We strive to answer within one ring.",
      icon: "call",
      action: (
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-[#0077b6] to-[#e0f7fa] text-[#023e8a]">
            Call Doctors: +91 7020241088
          </Button>
          <Button className="w-full bg-gradient-to-r from-[#0077b6] to-[#e0f7fa] text-[#023e8a]">
            Call Providers: +91 9359367590
          </Button>
        </div>
      ),
    },
    {
      title: "Send Us an Email",
      subtitle: "Email Support",
      description: "We'll respond within a day.",
      icon: "email",
      action: (
        <Button className="w-full bg-gradient-to-r from-[#0077b6] to-[#e0f7fa] text-[#023e8a]">
          Email Us
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#0077b6] to-[#e0f7fa] mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                onClick={() =>
                  setSelectedCard(selectedCard === method.title ? null : method.title)
                }
                className="p-4"
              >
                <ContactCard
                  title={method.title}
                  subtitle={method.subtitle}
                  description={method.description}
                  action={method.action}
                  icon={method.icon}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
