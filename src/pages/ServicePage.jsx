import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const services = [
  {
    title: "Custom Art Commissions",
    description:
      "Personalized artworks tailored to your vision — portraits, fantasy, digital, or mixed media pieces.",
  },
  {
    title: "Murals & Wall Art",
    description:
      "Large-scale hand-painted murals for homes, studios, cafes, offices, or event spaces.",
  },
  {
    title: "Live Event Painting",
    description:
      "On-site painting during weddings, parties, and events — a unique keepsake and live entertainment.",
  },
  {
    title: "Illustration & Editorial Art",
    description:
      "Professional illustrations for magazines, books, album covers, and storytelling visuals.",
  },
  {
    title: "Art Licensing",
    description:
      "License existing artwork for branding, product design, album art, or commercial campaigns.",
  },
  {
    title: "Workshops & Art Classes",
    description:
      "Beginner-to-advanced training sessions in drawing, painting, or digital techniques — online or in-person.",
  },
  {
    title: "Prints & Merchandise",
    description:
      "Shop high-quality prints, apparel, and merchandise featuring original artwork.",
  },
  {
    title: "Islamic Art Illustration",
    description:
      " Curate inspirations for intricate beauty of Islamic architecture.",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
         <div className=" py-2">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-gray-700 hover:text-gray-900 transition"
      >
        <FaArrowLeft className="mr-2" />
        Back to Homepage
      </Link>
    </div>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl text-pink-500 font-bold mb-4">Art Services</h1>
        <p className="text-white mb-12 max-w-2xl mx-auto">
          Explore the wide range of artistic services I offer — whether you're looking to commission a one-of-a-kind piece, attend a creative class, or collaborate on a professional project.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-pink-200 p-6 rounded-xl shadow-lg border border-pink-500 hover:border-pink-500 transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-pink-500">
                {service.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="mailto:Taiwohassantemitope2020@gmail.com?subject=Service Inquiry"
            className="inline-block bg-pink-500 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            Get in Touch for a Project
          </a>
        </div>
      </div>
    </main>
  );
}
