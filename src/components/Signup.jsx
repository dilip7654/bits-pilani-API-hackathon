import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, db, googleProvider, facebookProvider } from "./Firebase";
import { doc, setDoc } from "firebase/firestore";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import signupImage from "../assets/signup.png";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        phone,
        birthDate,
        email,
        createdAt: new Date().toISOString(),
      });

      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      console.error("Signup Error:", err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const userDoc = doc(db, "users", user.uid);
      await setDoc(
        userDoc,
        {
          name: user.displayName || "Google User",
          email: user.email,
          phone: user.phoneNumber || "N/A",
          birthDate: "N/A",
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );

      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      console.error("Google Signup Error:", err.message);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      const userDoc = doc(db, "users", user.uid);
      await setDoc(
        userDoc,
        {
          name: user.displayName || "Facebook User",
          email: user.email,
          phone: user.phoneNumber || "N/A",
          birthDate: "N/A",
          createdAt: new Date().toISOString(),
        },
        { merge: true }
      );

      setIsAuthenticated(true);
      navigate("/");
    } catch (err) {
      console.error("Facebook Signup Error:", err.message);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-[#ffffff]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center w-[95%] max-w-[900px] bg-[#e0f7fa] shadow-lg rounded-lg overflow-hidden mx-auto mt-20 mb-10">
        {/* Signup Form Section on the Left */}
        <motion.div
          className="p-6 w-full md:w-1/2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl font-bold text-center text-[#03045e] mb-6"
            variants={itemVariants}
          >
            Sign Up
          </motion.h1>

          <motion.form
            className="space-y-4"
            variants={containerVariants}
            onSubmit={handleSignup}
          >
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="Name"
                className="block text-[#0077b6] font-medium mb-2"
              >
                Name
              </label>
              <motion.input
                type="text"
                id="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="phone"
                className="block text-[#0077b6] font-medium mb-2"
              >
                Phone
              </label>
              <motion.input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="email"
                className="block text-[#0077b6] font-medium mb-2"
              >
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="password"
                className="block text-[#0077b6] font-medium mb-2"
              >
                Password
              </label>
              <motion.input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            {/* Date of Birth Field */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="dob"
                className="block text-[#0077b6] font-medium mb-2"
              >
                Date of Birth
              </label>
              <motion.input
                type="date"
                id="dob"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-2 bg-[#0077b6] text-white font-bold rounded hover:bg-[#00b4d8]"
            >
              Sign Up
            </motion.button>

            {/* Log In Link */}
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

        {/* Image Section on the Right */}
        <div
  className="hidden md:flex md:w-1/2 bg-cover bg-center"
  style={{
    backgroundImage: `url(${signupImage})`,
    height: "100vh",
    marginLeft: "2rem", // Ensuring the height is set
  }}
></div>
      </div>
    </motion.div>
  );
}
