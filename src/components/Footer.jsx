import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e0f7fa] to-[#03045e]/40 text-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-[#03045e]/40">
        {/* About Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#03045e] border-b-2 border-[#03045e] pb-2">
            About Life Line Dev
          </h4>
          <p className="text-gray-600 leading-relaxed">
            Life Line Dev is dedicated to providing innovative medical services, 
            comprehensive health advice, and cutting-edge solutions for your 
            holistic well-being.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#03045e] border-b-2 border-[#03045e] pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Our Services" },
              { href: "/appointments", label: "Book Appointment" },
              { href: "/contact", label: "Contact Us" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#03045e] hover:text-[#011d41] 
                             transition duration-300 ease-in-out 
                             transform hover:translate-x-2 
                             flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-[#03045e] rounded-full"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#03045e] border-b-2 border-[#03045e] pb-2">
            Contact Us
          </h4>
          <div className="space-y-3">
            {[
              { 
                icon: <Mail className="text-[#03045e]" />, 
                text: "support@lifelinedev.com" 
              },
              { 
                icon: <Phone className="text-[#03045e]" />, 
                text: "+1 (555) 123-4567" 
              },
              { 
                icon: <MapPin className="text-[#03045e]" />, 
                text: "123 Health Street, Wellness City, 56789" 
              },
            ].map((contact, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                {contact.icon}
                <span>{contact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Section */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#03045e] border-b-2 border-[#03045e] pb-2">
            Connect With Us
          </h4>
          <div className="flex space-x-4">
            {[
              { icon: Facebook, href: "https://facebook.com", color: "text-[#03045e]" },
              { icon: Twitter, href: "https://twitter.com", color: "text-[#00aaff]" },
              { icon: Instagram, href: "https://instagram.com", color: "text-pink-500" },
              { icon: Linkedin, href: "https://linkedin.com", color: "text-[#011d41]" },
            ].map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition duration-300 ease-in-out ${social.color}`}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#03045e] text-white text-center py-4">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Life Line Dev. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
