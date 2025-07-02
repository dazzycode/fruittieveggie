import React from "react";
 import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BioPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-16">
            <div className="max-w-6xl mx-auto ">

         <div className="py-2">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to Homepage
      </Link>
    </div>
        {/* Page Heading */}
        <h1 className="text-4xl md:text-8xl text-white font-bold mb-8"> Bio</h1>

        {/* Name & Role */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">ART BY ZILLION </h2>
          <p className="text-pink-500 font-medium">Original Artwork, custom paintings, art classes, and more!
</p>
        </div>

        {/* Short Bio */}
        <p className="text-white  text-justify leading-relaxed mb-10">
         Welcome to my world of Islamic art. I’m an artist based in the lagos. My passion lies in painting flowers and emotional images of recent occasions and Description of the prophets Hadith’s into canvas capturing beauty. I find inspiration in the intricate beauty of Islamic architecture. My passion lies in painting flowers and emotional images of recent occasions and Description of the prophets Hadith’s into canvas capturing beauty..
For me, painting is more than a profession—it’s a form of expression and a way to connect deeply with my audience. I pour my heart into each piece, aiming to evoke a profound emotional response from those who view or acquire my art. I aspire for my work to be both inspiring and cherished, resonating with the beauty it represents. 
My preferred mediums are acrylic paints and inks, which allow me to bring detail to my work. I often enhance my paintings with gold leaf, adding a luxurious touch that reflects the rich heritage of Islamic architecture.
Currently, my artistic journey is devoted to showcasing goodness, offering a sense of protection and answers through my work—even for those who feel there’s none to be found.
Through my paintings, I seek to preserve and celebrate its beauty and memory. This focus has deepened my understanding on emotional images and its profound significance in Islam. I hope that my artwork  makes a meaningful impact on those who encounter it.
Thank you for visiting my site. I invite you to explore my portfolio and experience the passion and dedication that drive my work.
        </p>

        {/* Skills List */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["Pro Canva Skills",  "grids", "effects", "templates", "Image Editing", "Resizing" ].map(
            (skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-100 text-pink-500 rounded-full text-sm font-medium"
              >
                {skill}
              </span>    
            )
          )}
        </div>

        {/* Optional Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            to="/work"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-gray-500 transition"
          >
            View Portfolio
          </Link>
          <a href="mailto:Taiwohassantemitope2020@gmail.com?subject=Service Inquiry"
            className="border border-pink-500 text-pink-500 px-6 py-2 rounded-full hover:bg-pink-500 hover:text-white transition">
          
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
