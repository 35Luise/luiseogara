import React, { useRef, useState } from "react";
import comp from "../public/computer.jpg";
import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !title || !message) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_c5zeaxo",
          "template_x00dn4s",
          form.current,
          "68oFe01h-eUBkw-pF"
        )
        .then(
          (result) => {
            setName("");
            setEmail("");
            setTitle("");
            setMessage("");
            setTimeout(() => {
              toast.success("Email Sent , I will get back to you soon", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error);
            toast.error("Failed to send email. Check EmailJS Config.")
          }
        );
    }
  };

  return (
    <div id="contact" className="w-full h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-10  w-full">
        <p className="text-xl tracking-widest uppercase text-[#295287]  ">
          Contact
        </p>
        <h2 className="py-2">Get in Touch</h2>
        <p className="  text-sm text-gray-500 mb-4    font-semibold">
          Reach out to me for any freelancing opportunities , contract work or
          just to say hi !
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* { left} */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  src={comp}
                  alt="computer"
                  width={500}
                  height={500}
                  className="rounded-xl hover:scale-105 cursor-pointer ease-in duration-200"
                />
              </div>
              <div className="py-2">
                <h2 className="text-xl font-semibold">Luise Ogara</h2>
                <p>Full Stack Web Developer</p>
                <p className="text-gray-600 py-4">
                  {" "}
                  Do you have any ideas you would love to bring to life ,
                  whether it is a landing page designed to drive more sales, a business website that strengthens your online presence , or a large-scale system that streamlines operations and supports growth, I'm here to help turn your vision into reality.
                  Reach out , I would love to walk this journey with you{" "}
                </p>
              </div>
              <div>
                <p className="uppercase pt-10">Connect with me</p>
                <div className="flex items-center justify-between  m-auto py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer  hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://www.linkedin.com/in/luise-ogara-38a9a123b/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                 
                  <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 p-4 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://x.com/LuiseOgara?t=BrN1s4-ytsgGtrxWKMV-KA&s=09"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a rel="noopener noreferrer" href="tel:0114697174">
                      <FiPhoneCall />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 md:p-6 p-4 cursor-pointer hover:scale-110 ease-in   duration-300">
                    <a
                      href="https://wa.me/254114697174"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {right} */}
          <div className="col-span-3 lg:col-span-3 w-full h-auto shadow-xl shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      type="text"
                      className="border-2  rounded-lg p-3"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2  rounded-lg p-3 w-full"
                    name="email"
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="border-2  rounded-lg p-3 w-full"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2  rounded-lg p-3 border-gray-300 "
                    rows="10"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#295287] to-[#709dff] text-white"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in   duration-300">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#5651e5]"
                size={30}
              />
            </div>
          </Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
