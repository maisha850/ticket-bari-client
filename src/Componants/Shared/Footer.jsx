import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-base-content mt-12">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 – Logo + Description */}
        <div>
      <Logo></Logo>
          <p className="mt-3 text-sm leading-relaxed text-white">
            Book bus, train, launch & flight tickets easily — all in one platform.
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/all-tickets" className="hover:text-primary">All Tickets</Link></li>
            <li><Link to="/help&support" className="hover:text-primary">Help & Support</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </div>

        {/* Column 3 – Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Contact Info</h3>
          <ul className="space-y-2 text-sm text-white">
            <li className="flex items-center gap-2">
              <FaEnvelope /> ticketbari@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone/> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook/>
              <a href="https://www.facebook.com/" className="hover:text-primary">Facebook Page</a>
            </li>
          </ul>
        </div>

        {/* Column 4 – Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-primary">Payment Methods</h3>
          <div className="flex items-center gap-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGMa0R1O63GS_QNt6GxVzHJHSRBksDfSyiiw&s"
              alt="Stripe"
              className="h-8 rounded-xl"
            />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="py-4 bg-blue-950 text-center text-sm text-white">
        © 2026 <span className="font-semibold">TicketBari</span>. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
