"use client";

import { CookingPot, ChefHat, ShoppingBag, Heart } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Baked Goods",
    icon: <CookingPot className="w-5 h-5 text-pink-50" />,
    description: "Fresh cakes, cupcakes, and pastries made to order.",
  },
  {
    title: "Baking Tools & Supplies",
    icon: <ShoppingBag className="w-5 h-5 text-pink-50" />,
    description: "Quality baking tools, ingredients, and packaging.",
  },
  {
    title: "Training & Workshops",
    icon: <ChefHat className="w-5 h-5 text-pink-50" />,
    description: "Baking classes for beginners and professionals.",
  },
  {
    title: "Event Dessert Catering",
    icon: <Heart className="w-5 h-5 text-pink-50" />,
    description: "We provide sweet tables and desserts for events and parties.",
  },
];

export default function Services() {
  return (
    <section className="bg-pink-950 py-12 px-6">
      <div className="w-full lg:w-[80vw] mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-pink-100 text-center lg:text-left">
          What We Offer
        </h2>
        <hr className="border-pink-800 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-pink-100 text-sm">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 font-medium">
                {service.icon}
                <span>{service.title}</span>
              </div>
              <p className="pl-7 text-pink-200">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
