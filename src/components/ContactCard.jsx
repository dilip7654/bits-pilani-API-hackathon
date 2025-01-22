import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";

const iconComponents = {
  chat: MessageCircle,
  call: Phone,
  email: Mail,
};

const ContactCard = ({ title, subtitle, description, action, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = iconComponents[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="h-full overflow-hidden bg-[#e0f7fa] border-2 border-transparent transition-all duration-300 hover:border-blue-500 rounded-md">
        <div className="relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#0077b6] to-[#e0f7fa]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="relative z-10"
            animate={{ color: isHovered ? "white" : "#0077b6" }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-2xl font-bold flex items-center p-6">
              <IconComponent className="mr-2" />
              {title}
            </div>
            <div className="text-lg font-semibold p-6">{subtitle}</div>
          </motion.div>
        </div>
        <div className="p-8">
          <p className="text-[#023e8a] mb-4">{description}</p>
        </div>
        <div className="bg-gray-50 p-8">
          <motion.div
            className="w-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {action}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
