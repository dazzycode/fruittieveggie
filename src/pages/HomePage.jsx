import React from "react";
 import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="bg-black text-white px-6 py-10 md:py-20 font-sans">
      {/* Top Nav */}
      <div className="flex justify-between text-sm mb-10">
        <div className="flex space-x-4">
         <Link to="/bio"> <span className="hover:underline cursor-pointer">BIO</span></Link>
        <Link to="/work"> <span className="hover:underline cursor-pointer">WORK</span></Link>
        </div>
     <a href="mailto:Taiwohassantemitope2020@gmail.com?subject=Service Inquiry">   <span className="hover:underline cursor-pointer">CONTACT</span></a>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-12 mb-20">
        {/* Left Text */}
        <div>
            <h2 className="text-2xl text-pink-500 italic md:text-3xl font-bold leading-snug">
            Zillion <em className="italic">Arts</em>
          </h2> 
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
           Transforming   <em className="italic">nature’s beauty</em> into timeless masterpieces.
          </h2>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">/Quick links</h4>
         <div className="flex flex-wrap gap-3">

<div className="flex flex-wrap gap-3">
  <Link to="/bio">
    <button className="px-4 py-1 bg-pink-500 text-black font-semibold text-sm rounded-full">
      BIO
    </button>
  </Link>
  <Link to="/work">
    <button className="px-4 py-1 bg-pink-500 text-black font-semibold text-sm rounded-full">
      WORK
    </button>
  </Link>
  
  <Link to="/services">
    <button className="px-4 py-1 bg-pink-500 text-black font-semibold text-sm rounded-full">
      SERVICES
    </button>
  </Link>
</div>

</div>

        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">/Contact</h4>
        <a href="mailto:Taiwohassantemitope2020@gmail.com?subject=Service Inquiry"><p className="mb-2 text-sm">Taiwohassantemitope2020@gmail.com</p></a>
          <p className="mb-2 text-sm">07054501445</p>
           <p className="mb-2 text-sm">0707 199 6400</p>
          <p className="text-sm">
            No 24, baale street igbo <br />
             Efon , Lagos <br />
            Nigeria
          </p>
        </div>
      </div>

      {/* Creative Logo Row */}
      <div className="flex items-center space-x-4 mb-10">
        <div className="w-14 h-14 border rounded-full flex items-center justify-center text-3xl font-bold">
          ⦸
        </div>
        <h1 className="text-6xl md:text-8xl font-bold">Creative is<span> Joy</span></h1>
      </div>

      {/* Bottom Footer */}
      <div className="flex justify-between text-xs text-gray-400 border-t border-gray-700 pt-6">
        <span>©2025 ZillionArt.</span>
        <span>developed by dazzyCodes</span>
      </div>
    </div>
  );
}
