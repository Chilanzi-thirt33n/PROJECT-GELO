"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/common/loginButton";
import { Pacifico } from "next/font/google";
import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });
const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });

interface LinkItem {
  label: string;
  href: string;
}

interface NavLinksProps {
  links: LinkItem[];
  logoSrc: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, logoSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop) setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* ✅ Fixed Contact Bar on desktop only, visible only when not scrolled */}
      {!isScrolled && isDesktop && (
        <div className="fixed top-0 left-0 right-0 z-40 bg-pink-100 text-pink-900 py-3 px-8 lg:px-40 flex justify-center items-center text-center">
          <span className="text-lg sm:text-xl font-semibold">
            <span className={`${pacifico.className} text-pink-600 mr-2`}>
              Call Now:
            </span>
            +260 973-015-900
          </span>
        </div>
      )}

      {/* ✅ Main Navbar — shifted down if contact bar exists */}
      <div
        className={`fixed ${
          !isScrolled && isDesktop ? "top-[48px]" : "top-0"
        } left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-pink-950" : "bg-white"
        }`}
      >
        <div className="relative flex items-center justify-between py-4 px-8 lg:px-40">
          {/* Logo */}
          <Link href={links[0]?.href || "/"}>
            <div className="flex items-center cursor-pointer">
              <Image src={logoSrc} alt="Logo" width={60} height={60} />
              <h2
                className={`ml-2 hidden lg:block text-2xl font-extrabold ${
                  isScrolled ? "text-white" : "text-pink-950"
                } ${lobster.className}`}
              >
                {"Gelo'S Treats"}
              </h2>
            </div>
          </Link>

          {/* Mobile Phone Number */}
          {!isDesktop && (
            <div className="text-sm text-pink-400 font-semibold">
              +260 973-015-900
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              className="lg:hidden flex items-center justify-center w-8 h-8 z-50"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FiX className="w-6 h-6 text-pink-200 hover:text-pink-500" />
              ) : (
                <FiMenu className="w-6 h-6 text-pink-200 hover:text-pink-500" />
              )}
            </button>
          )}

          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-2 items-center">
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <Button
                  variant="link"
                  className={`${
                    isScrolled ? "text-white" : "text-pink-950"
                  } hover:text-pink-400 active:text-gray-500 text-xs`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <LoginButton />
          </div>

          {/* Mobile Slide-in Menu */}
          <AnimatePresence>
            {!isDesktop && isOpen && (
              <motion.div
                key="mobile-nav"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-3/4 h-screen bg-white z-40 flex flex-col text-pink-600 items-start p-8 space-y-2 shadow-lg"
              >
                {links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-lg w-full text-start py-2 hover:bg-pink-100 active:bg-pink-200 rounded"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <LoginButton />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default NavLinks;
