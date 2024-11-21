import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGoogle, FaApple } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase"; 

export default function Signup() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login'); // Redirect to Home after successful signup
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#90e0ef] to-[#fcefef]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl font-bold text-center text-[#0077b6] mb-6"
          variants={itemVariants}
        >
          Sign Up
        </motion.h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <motion.form className="space-y-6" variants={containerVariants} onSubmit={handleSignup}>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="Name"
              className="block text-[#03045e] font-medium mb-2"
            >
              Name
            </label>
            <motion.input
              type="Name"
              id="Name"
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="email"
              className="block text-[#03045e] font-medium mb-2"
            >
              Email:
            </label>
            <motion.input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="password"
              className="block text-[#03045e] font-medium mb-2"
            >
              Password:
            </label>
            <motion.input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="dob"
              className="block text-[#03045e] font-medium mb-2"
            >
              Date of Birth:
            </label>
            <motion.input
              type="date"
              id="dob"
              name="dob"
              required
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div className="text-center my-4" variants={itemVariants}>
            <span className="px-2 text-gray-500 text-sm block">
              Or continue with
            </span>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-2"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <FaGoogle className="mr-2 text-[#0a0707]" /> Google
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <FaApple className="mr-2 text-black" /> Apple
            </motion.button>
          </motion.div>

          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-[#0077b6] text-white font-bold rounded hover:bg-[#00b4d8]"
          >
            Sign Up
          </motion.button>

          <motion.p
            className="text-center mt-4 text-sm"
            variants={itemVariants}
          >
            Already have an account?
            <motion.a
              href="/login"
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-[#0077b6] hover:underline ml-1"
            >
              Log In
            </motion.a>
          </motion.p>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
