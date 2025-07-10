"use client";

import {
  ThumbsUp,
  Clock,
  Handshake,
  Leaf,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Trusted by Locals",
    description:
      "We’ve served hundreds of happy customers across Lusaka and beyond with quality and consistency.",
    icon: <ThumbsUp className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "Fresh & Timely Delivery",
    description:
      "We prioritize freshness and deliver your treats or supplies right on time, every time.",
    icon: <Clock className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "Easy to Work With",
    description:
      "From custom orders to wholesale supplies, we’re flexible and always ready to help.",
    icon: <Handshake className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "Natural Ingredients",
    description:
      "We use locally sourced, natural ingredients where possible for healthier, better-tasting treats.",
    icon: <Leaf className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "Secure Payments",
    description:
      "We support local mobile money like Airtel Money and MTN for fast, secure payments.",
    icon: <ShieldCheck className="w-6 h-6 text-pink-600" />,
  },
  {
    title: "One-Stop Baking Shop",
    description:
      "From birthday cakes to baking pans, find everything you need in one place.",
    icon: <ShoppingCart className="w-6 h-6 text-pink-600" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-sm transition ${
                index % 2 === 0 ? "bg-white" : "bg-pink-50"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                {reason.icon}
                <h3 className="text-lg font-semibold text-pink-800">
                  {reason.title}
                </h3>
              </div>
              <p className="text-sm text-pink-700">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
