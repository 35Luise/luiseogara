import React from "react";
import { FaCheck } from "react-icons/fa";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div id="services" className="w-full  p-2 mt-2">
        <div className="max-w-[1240px] m-auto flex mx-auto  flex-col justify-center h-full">
          <p className="text-xl tracking-widest uppercase text-[#295287] ">Services
          </p>
          <h2 className="py-4">What I can offer</h2>
            <div className="grid md:grid-cols-2 mt-16 gap-10"> 
                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">BASIC PACKAGE</h3>
                    <p>A basic package generally has 1-4 pages and best for landing pages, small portfolios and freelancers starting out with some of it's key features listed below:</p>
                    <ul>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Custom Responsive Design.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Simple navigation menu.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Contact form integration(with email notifications).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Social Media Links.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Basic on-page SEO(Search Engine Optimization).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Speed Optimization.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Google Maps Integration.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Cross-browser compatibility.</li>
                    </ul>
                    <p><span className="text-[#295287]">Delivery: </span>7-14 days</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">STANDARD PACKAGE</h3>
                  <p>A standard package typically has 5-8 pages and is best for small businesses, startups and personal brands.<br /> <span className="text-[#295287]">Key Features:</span></p>
                  <ul>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Inclusive of all the features of a basic package.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Contact form Intergration with email notifications and spam protection.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Three months free support after delivery.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Blog Setup(with CMS if needed).</li>
                  </ul>
                  <p><span className="text-[#295287]">Delivery: </span>10-21 days</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">PREMIUM PACKAGE</h3>
                  <p>A premium package might be a professional or an e-commerce website with pages ranging from 8 to 15. The package is best for companies, online shops, and established brands.<br /><span className="text-[#295287]">Key Features:</span></p>
                  <ul>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Fully custom design with advanced UI/UX.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
E-commerce functionality(store, payment gateway, inventory setup).</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Blog + CMS Integration.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Advanced SEO(schema markup, speed optimization, sitemap submission).</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />Security setup(SSL guidance, anti-spam, basic firewall).</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Newsletter/email marketing integration.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Analytics Integration(Google Analytics, Search Console).</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Multi-language setup(optional depending on client need).</li>
                  </ul>
                  <p><span className="text-[#295287]">Delivery: </span>6-12 weeks</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">MAINTENANCE PACKAGE</h3>
                  <p>This package helps to keep your website secure, up-to-date and performing at it's best. It can go hand in hand with one of the packages that have been described or a solo package for a website already in place.<br /><span className="text-[#295287]">Key Features:</span></p>
                  <ul>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Regular updates.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Bug fixes.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Performance Optimization.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Content Updates.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Security Monitoring.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Backups.</li>
                    <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Technical Support.</li>
                  </ul>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">THIRD PARTY INTEGRATIONS</h3>
                    <ul>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Email Integration(Gmail, Outlook, Zoho Mail, Yahoo Mail).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Payment Gateway Intergration(Mpesa, Paypal, Stripe, Flutterwave, Paystack).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Authentication and User Accounts(Google, Facebook, Apple sign in).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Database Integration.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Cloud Storage Integration(Google Drive, Cloudinary).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Maps and Location Services(Google Analytics, Conversion Tracking, Google Tag).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Customer Communication(Whatsapp Business, Live Chat).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Booking and Scheduling(Appointment Booking, Google Calendar).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Social Media Integrations(Youtube Embeds, Facebook, Instagram, X, LinkedIn).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
E-commerce Solutions(Shopify, Product Catalog, Online ordering).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
Automaion and Workflow Integration.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
SEO and Marketing tools.</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
SMS and Notifications(Twilio sms, Bulk sms, Push notifications).</li>
                        <li className="flex items-start gap-2">
  <FaCheck className="text-green-500 mt-1" />
AI and Smart features(FAQ Automation, AI chatbot, Content generation tools).</li>
                    </ul>
                  
                </div>
              
            </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Services;