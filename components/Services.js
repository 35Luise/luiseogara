import React from "react";

const Services = () => {
  return (
    
      <div id="services" className="w-full">
        <div className="max-w-[1240px] mx-auto flex px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#295287] ">Services
          </p>
          <h2 className="py-2">What I can offer</h2>
            <div class="flex gap-4 md:flex-row flex-col items-center"> 
                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">BASIC PACKAGE</h3>
                    <p>A basic package generally has 1-4 pages and best for landing pages, small portfolios and freelancers starting out with some of it's key features listed below:</p>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>
Custom Responsive Design.</li>
                        <li>Simple navigation menu.</li>
                        <li>Contact form integration(with email notifications).</li>
                        <li>Social Media Links.</li>
                        <li>Basic on-page SEO(Search Engine Optimization).</li>
                        <li>Speed Optimization.</li>
                        <li>Google Maps Integration.</li>
                        <li>Cross-browser compatibility.</li>
                    </ul>
                    <p><span className="text-[#295287]">Delivery: </span>7-14 days</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">STANDARD PACKAGE</h3>
                  <p>A standard package typically has 5-8 pages and is best for small businesses, startups and personal brands.<br /> <span className="text-[#295287]">Key Features:</span></p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Inclusive of all the features of a basic package.</li>
                    <li>Contact form Intergration with email notifications and spam protection.</li>
                    <li>Three months free support after delivery.</li>
                    <li>Blog Setup(with CMS if needed).</li>
                  </ul>
                  <p><span className="text-[#295287]">Delivery: </span>10-21 days</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">PREMIUM PACKAGE</h3>
                  <p>A premium package might be a professional or an e-commerce website with pages ranging from 8 to 15. The package is best for companies, online shops, and established brands.<br /><span className="text-[#295287]">Key Features:</span></p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Fully custom design with advanced UI/UX.</li>
                    <li>E-commerce functionality(store, payment gateway, inventory setup).</li>
                    <li>Blog + CMS Integration.</li>
                    <li>Advanced SEO(schema markup, speed optimization, sitemap submission).</li>
                    <li>Security setup(SSL guidance, anti-spam, basic firewall).</li>
                    <li>Newsletter/email marketing integration.</li>
                   <li>Analytics Integration(Google Analytics, Search Console).</li>
                    <li>Multi-language setup(optional depending on client need).</li>
                  </ul>
                  <p><span className="text-[#295287]">Delivery: </span>6-12 weeks</p>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">MAINTENANCE PACKAGE</h3>
                  <p>This package helps to keep your website secure, up-to-date and performing at it's best. It can go hand in hand with one of the packages that have been described or a solo package for a website already in place.<br /><span className="text-[#295287]">Key Features:</span></p>
                  <ul className="list-disc ml-5 space-y-1">
                    <li>Regular updates.</li>
                    <li>Bug fixes.</li>
                    <li>Performance Optimization.</li>
                    <li>Content Updates.</li>
                    <li>Security Monitoring.</li>
                    <li>Backups.</li>
                    <li>Technical Support.</li>
                  </ul>
                </div>

                <div className="p-6 shadow-xl rounded-xl  hover:scale-105 ease-in duration-300">
                  <h3 className="text-[#295287]">THIRD PARTY INTEGRATIONS</h3>
                    <ul className="list-disc ml-5 space-y-1">
                        <li>Email Integration(Gmail, Outlook, Zoho Mail, Yahoo Mail).</li>
                        <li>Payment Gateway Intergration(Mpesa, Paypal, Stripe, Flutterwave, Paystack).</li>
                        <li>Authentication and User Accounts(Google, Facebook, Apple sign in).</li>
                        <li>Database Integration.</li>
                        <li>Cloud Storage Integration(Google Drive, Cloudinary).</li>
                        <li>Maps and Location Services(Google Analytics, Conversion Tracking, Google Tag).</li>
                        <li>Customer Communication(Whatsapp Business, Live Chat).</li>
                        <li>Booking and Scheduling(Appointment Booking, Google Calendar).</li>
                        <li>Social Media Integrations(Youtube Embeds, Facebook, Instagram, X, LinkedIn).</li>
                        <li>E-commerce Solutions(Shopify, Product Catalog, Online ordering).</li>
                        <li>Automaion and Workflow Integration.</li>
                        <li>SEO and Marketing tools.</li>
                        <li>SMS and Notifications(Twilio sms, Bulk sms, Push notifications).</li>
                        <li>AI and Smart features(FAQ Automation, AI chatbot, Content generation tools).</li>
                    </ul>
                  
                </div>
              
            </div>

        </div>
      </div>
  );
};

export default Services;
