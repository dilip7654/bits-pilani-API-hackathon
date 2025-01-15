import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#fdf4d1] to-[#90e0ef]  text-[#03045e] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-3 text-[#0077b6]">About Us</h3>
          <p className="text-sm text-center md:text-left leading-relaxed">
            We’re dedicated to bringing you the best experience. Reach out for support or explore our services to know more about us.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-3 text-[#0077b6]">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/Home"
                className="hover:text-[#00b4d8] transition font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="hover:text-[#00b4d8] transition font-medium"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-[#00b4d8] transition font-medium"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/Schedule"
                className="hover:text-[#00b4d8] transition font-medium"
              >
                Schedule
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-xl font-bold mb-3 text-[#0077b6]">Follow Us</h3>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b6] hover:text-[#00b4d8] transition flex items-center space-x-2"
            >
              <i className="fab fa-twitter text-2xl"></i>
              <span>Twitter</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b6] hover:text-[#00b4d8] transition flex items-center space-x-2"
            >
              <i className="fab fa-facebook text-2xl"></i>
              <span>Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b6] hover:text-[#00b4d8] transition flex items-center space-x-2"
            >
              <i className="fab fa-instagram text-2xl"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#00b4d8] mt-6 pt-4 text-center">
        <p className="text-sm text-[#03045e]">
          © 2024 MyWebsite. Designed with 💙. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
