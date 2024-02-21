"use client";
import React from "react";
import { ExpandContext } from "@/context/ExpandContext";
import Navigation from "./Navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuItems } from "@/data/menuItems";
export default function Header() {
  const { isExpanded, toggleExpansion } = React.useContext(ExpandContext);
  return (
    <header className="flex items-center justify-between  p-4 bg-slate-200 text-stone-800 text-gold uppercase tracking-wider text-lg">
      <div>
        <Link href="/">Site Name</Link>
      </div>
      <div>
        <Navigation
          menuItems={menuItems}
          isExpanded={isExpanded}
          toggleExpansion={toggleExpansion}
        />
        {isExpanded && (
          <MobileMenu
            isExpanded={isExpanded}
            toggleExpansion={toggleExpansion}
          />
        )}
      </div>
    </header>
  );
}

function MobileMenu({ isExpanded, toggleExpansion }) {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };
  const background = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  const itemA = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,

      transition: { type: "spring", ease: "linear", damping: 20 },
    },
  };

  useLockBodyScroll(isExpanded);

  return (
    <motion.div
      variants={background}
      initial="hidden"
      animate={isExpanded ? "show" : "hidden"}
      className=" backdrop-blur-xl bg-red-950/80 fixed top-0 left-0  z-10   inset-0 h-screen p-4"
    >
      <div className="relative h-full ">
        <div className="pt-8 pb-4 text-3xl  font-bold h-full">
          <div className="flex flex-col justify-center items-center  h-full w-full ">
            <motion.div
              variants={container}
              initial="hidden"
              animate={isExpanded ? "show" : "hidden"}
              className=" gap-4   w-full flex flex-col items-center justify-center text-white"
            >
              {menuItems.map((menuItem) => {
                return (
                  <div className="group relative" key={menuItem.label}>
                    <motion.div
                      variants={itemA}
                      className=" relative"
                      key={menuItem.title}
                    >
                      <Link
                        href={menuItem.path}
                        className="block"
                        onClick={() => toggleExpansion(!isExpanded)}
                        scroll={false}
                      >
                        {menuItem.title}
                      </Link>
                    </motion.div>
                  </div>
                );
              })}{" "}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, []); // Empty array ensures effect is only run on mount and unmount
}
