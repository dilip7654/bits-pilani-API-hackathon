import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { auth, db, googleProvider, facebookProvider } from "./Firebase";
import { doc, setDoc } from 'firebase/firestore';
import { AuthContext } from "./AuthContext"; 
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
      
        <motion.form className="space-y-6" variants={containerVariants} onSubmit={handleSignup}>
          <motion.div variants={itemVariants}>
            <label
              htmlFor="Name"
              className="block text-[#03045e] font-medium mb-2"
            >
              Name
            </label>
            <motion.input
              type="text"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              whileFocus={{ scale: 1.02 }}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label
              htmlFor="Name"
              className="block text-[#03045e] font-medium mb-2"
            >
              Phone no
            </label>
            <motion.input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
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
              onClick={handleGoogleSignup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <FaGoogle className="mr-2 text-[#0a0707]" /> Google
            </motion.button>
            <motion.button
              onClick={handleFacebookSignup}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
            >
              <FaFacebook className="mr-2 text-black" /> Facebook
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
