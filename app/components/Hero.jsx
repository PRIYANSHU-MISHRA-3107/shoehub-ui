"use client";

import React, { useState } from "react";
import { GrUserManager } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";

export default function Hero() {
  const [mainImage, setMainImage] = useState("/2.0.png");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0C1118] text-white">

      {/* 3D GLASS NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[85%] backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-12 py-5 flex justify-between items-center shadow-[0_8px_40px_rgba(0,0,0,0.4)] z-50">
        
        {/* BRAND */}
        <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-gray-200 to-yellow-400 text-transparent bg-clip-text">
          JORDAN
        </h1>

        {/* NAV ITEMS */}
        <ul className="flex gap-10 text-sm tracking-widest font-semibold">
  {[
    { name: "Home", href: "/" },
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
  ].map((item, i) => (
    <li key={i} className="group cursor-pointer relative">
      <a href={item.href} className="hover:text-yellow-400 transition">
        {item.name}
      </a>

      {/* Underline animation */}
      <span
        className="
          absolute left-0 bottom-[-4px] w-0 h-[3px] rounded-full 
          bg-gradient-to-r from-gray-300 to-yellow-500 
          transition-all duration-300 group-hover:w-full
        "
      ></span>
    </li>
  ))}
</ul>
        {/* ICONS + CLERK */}
        <div className="flex gap-6 text-xl">

          {/* USER AVATAR OR SIGN-IN MODAL */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-7 h-7 mt-[-2.5px] hover:scale-110 transition-all",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button>
                <GrUserManager className="hover:scale-110 transition-all" />
              </button>
            </SignInButton>
          </SignedOut>

          {/* CART ICON */}
          <IoMdCart className="hover:scale-110 transition-all" />
        </div>
      </nav>

      {/* BACKGROUND PARTICLES */}
      <div className="absolute inset-0 pointer-events-none animate-pulse opacity-20">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-red-500 blur-[250px] -top-40 -left-40"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full bg-red-500 blur-[250px] -bottom-40 right-10"></div>
      </div>

      {/* 3D ROTATING RING */}
      <div className="absolute right-[30%] top-1/2 -translate-y-1/2">
        <div className="w-[420px] h-[420px] border-[4px] border-cyan-800 rounded-full animate-spin-slow blur-[1px] opacity-60"></div>
      </div>

      {/* MAIN SHOE IMAGE */}
      <img
        key={mainImage}
        src={mainImage}
        className="absolute right-[26%] top-[55vh] -translate-y-1/2 w-[90vh]
        drop-shadow-[0_50px_120px_rgba(0,255,255,0.5)]
        animate-float-3d transition-all duration-500"
      />

      {/* LEFT TITLE */}
      <div className="absolute left-20 top-1/3 text-left">
        <h2 className="text-[90px] font-black leading-none tracking-tight animate-slideLeft">
          JUMP  
          <span className="block text-cyan-400">MAN</span>
        </h2>

        <p className="text-gray-300 mt-6 w-[360px] leading-relaxed animate-fadeIn">
          A futuristic take on Jordan’s classic design—re-engineered for 
          speed, stability and air-boosted comfort.
        </p>

        <button className="mt-8 px-10 py-4 bg-white text-black font-bold tracking-widest rounded-md shadow-xl hover:scale-105 transition-all">
          ADD TO CART
        </button>
      </div>

      {/* COLOR PICKER */}
      <div className="absolute left-20 bottom-28 animate-fadeIn">
        <p className="uppercase tracking-wider mb-3">Choose Color :</p>

        <div className="flex gap-6">
          {["/2.0.png", "/2.3.png"].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`
                h-20 w-24 object-cover rounded-xl cursor-pointer transition-all
                hover:scale-110
                ${mainImage === img ? "ring-4 ring-cyan-400 scale-110" : ""}
              `}
            />
          ))}
        </div>
      </div>

      {/* PRICE SECTION */}
      <div className="absolute right-16 top-1/4 text-right animate-slideRight">
        <p className="text-yellow-300 text-5xl font-bold">$134</p>
        <p className="uppercase tracking-widest text-sm mt-2">
          Jordan Jumpman 2021 PF
        </p>
        <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-md mt-2 inline-block">
          exclusive
        </span>
      </div>

      {/* BOTTOM TRANSPARENT FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none">
        <div className="w-full h-full blur-3xl opacity-70 bg-[#0C1118]"></div>
      </div>

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes float3d {
            0% { transform: translateY(-20px) rotate(-2deg); }
            50% { transform: translateY(20px) rotate(2deg); }
            100% { transform: translateY(-20px) rotate(-2deg); }
          }
          .animate-float-3d {
            animation: float3d 7s ease-in-out infinite;
          }

          @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spinSlow 18s linear infinite;
          }

          @keyframes slideLeft {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slideLeft { animation: slideLeft 1.8s ease-out forwards; }

          @keyframes slideRight {
            0% { transform: translateX(100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slideRight { animation: slideRight 2s ease-out forwards; }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fadeIn { animation: fadeIn 1.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
}
