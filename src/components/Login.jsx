import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./Firebase";
import { AuthContext } from "./AuthContext";
import loginImage from "../assets/login.png";

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
      className="flex items-center justify-center min-h-screen bg-[#ffffff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-11/12 max-w-5xl bg-[#e0f7fa] shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <motion.div className="w-98 h-[500px] relative">  {/* You can adjust the height here */}
  <img
    src={loginImage}
    alt="Login"
    className="w-full h-full object-cover"  // Ensures the image covers the entire area
  />
</motion.div>



        {/* Login Form Section */}
        <motion.div
          className="p-8 w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl font-bold text-center text-[#03045e] mb-6"
            variants={itemVariants}
          >
            Lifeline Devs Login
          </motion.h2>

          <motion.form
            className="space-y-4"
            variants={containerVariants}
            onSubmit={handleEmailLogin}
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                className="block text-[#0077b6] font-medium"
                htmlFor="email"
              >
                Email:
              </label>
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            <motion.div className="space-y-2" variants={itemVariants}>
              <label
                className="block text-[#0077b6] font-medium"
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
              <FaGoogle className="mr-2 text-[#03045e]" /> Google
            </motion.button>
            <motion.button
              onClick={handleFacebookLogin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <FaFacebook className="mr-2 text-[#03045e]" /> Facebook
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

          <motion.p className="text-center mt-4 text-sm" variants={itemVariants}>
            <motion.a
              href="/forgot-password"
              whileHover={{ scale: 1.1 }}
              className="font-semibold text-[#0077b6] hover:underline"
            >
              Forgot Password?
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}
