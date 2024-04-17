"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "../MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const Navebar = () => {
  const [navicons, setNavIcons] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-lg md:text-2xl text-white font-semibold"
        >
          Juliet
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-200 to-blue-400">
            Albert
          </span>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navicons ? (
            <button onClick={() => setNavIcons(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavIcons(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navicons ? <MenuOverlay links={navLinks}/> : null }
    </nav>
  );
};

export default Navebar;
