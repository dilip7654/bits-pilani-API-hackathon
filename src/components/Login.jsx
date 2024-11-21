import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./Firebase"; 
import { AuthContext } from "./AuthContext";


export default function Login() {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsAuthenticated(true); 
      navigate("/");
    } catch (err) {
      console.error("Email Login Error:", err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthenticated(true); 
      navigate("/");
    } catch (err) {
      console.error("Google Login Error:", err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      console.error("Facebook Login Error:", err.message);
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
        <motion.h2
          className="text-2xl font-bold text-center text-[#0077b6] mb-6"
          variants={itemVariants}
        >
          Lifeline Devs Login
        </motion.h2>

        <motion.form className="space-y-4" variants={containerVariants}  onSubmit={handleEmailLogin}>
          <motion.div className="space-y-2" variants={itemVariants}>
            <label className="block text-[#03045e] font-medium" htmlFor="email">
              Email:
            </label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}d
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div className="space-y-2" variants={itemVariants}>
            <label
              className="block text-[#03045e] font-medium"
              htmlFor="password"
            >
              Password:
            </label>
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 bg-[#0077b6] text-white font-bold rounded hover:bg-[#00b4d8]"
          >
            Login
          </motion.button>
        </motion.form>

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
            onClick={handleGoogleLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
          >
            <FaGoogle className="mr-2 text-[#090808]" /> Google
          </motion.button>
          <motion.button
            onClick={handleFacebookLogin}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
          >
            <FaFacebook className="mr-2 text-black" /> Facebook
          </motion.button>
        </motion.div>

        <motion.p className="text-center mt-4 text-sm" variants={itemVariants}>
          New here?
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.1 }}
            className="font-semibold text-[#0077b6] hover:underline ml-1"
          >
            Create an account
          </motion.a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
