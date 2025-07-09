"use client";

import Form from "@/components/common/form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const contactDetails = [
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+(260) 977-543-774 ",
    link: "tel:+260977543774",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: "gelostreats@gmail.com",
    link: "mailto:gelostreats@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Lusaka and Kitwe, Zambia",
    link: "https://www.google.com/maps/dir//-15.3865833,28.3243333/@-15.3865833,28.3243333,16z",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactPage() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Header */}
      <motion.header
        className="text-center w-full bg-white bg-[url('/bg.svg')] bg-cover bg-center"
        variants={itemVariants}
      >
        <section className="flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]">
          <h1 className="text-3xl font-black text-pink-950">Contacts</h1>
          <p className="text-lg lg:text-xl text-center text-pink-400">
            Get in touch
          </p>
        </section>
      </motion.header>

      {/* Main Content */}
      <motion.section
        className="py-10 px-4 md:px-12 max-w-7xl mx-auto max-h-max -mt-20 bg-pink-100 rounded-sm mb-10"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          {/* Form Section */}
          <motion.div
            className="w-full bg-transparent p-2 md:p-8"
            variants={itemVariants}
          >
            <Form />
          </motion.div>

          {/* Contact Info Section */}
          <motion.div className="space-y-10 pt-4" variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-pink-950 text-center lg:text-start">
                Let’s Talk Baking & Tools
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Have questions about our baking tools, pastries, or custom
                orders? We are here to help. Use the form to reach out or
                connect with us directly for anything from pricing to product
                recommendations.
              </p>
            </div>

            <div className="rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-medium text-gray-800 mb-6">
                Contact Us
              </h3>

              <motion.ul className="space-y-6" variants={containerVariants}>
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.li
                      key={index}
                      className="flex items-center gap-4"
                      variants={itemVariants}
                    >
                      <div className="bg-pink-100 p-3 rounded-lg">
                        <Icon className="text-pink-600 w-5 h-5 shrink-0" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.label}
                        </p>
                        <Link
                          className="text-gray-700 text-base hover:text-pink-600"
                          href={item.link}
                        >
                          {item.value}
                        </Link>
                      </div>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
