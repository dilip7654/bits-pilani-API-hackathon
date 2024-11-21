import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ icon, title, description, children, className, headerClass, contentClass }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={`p-6 rounded-lg ${className}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {icon && title && description ? (
        <div className={`flex flex-col items-center text-center ${contentClass}`}>
          <motion.div
            className="mb-4 text-5xl text-[#0077b6]"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className={`text-2xl font-bold mb-2 ${headerClass}`}
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>
          <p className="text-lg leading-relaxed">{description}</p>
        </div>
      ) : (
        <div className={contentClass}>{children}</div>
      )}
    </motion.div>
  );
};

export default Card;