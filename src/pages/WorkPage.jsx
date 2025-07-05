import React from "react";
 import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Canvas Art",
    image: "/art2.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 2,
    title: "Canvas Art",
    image: "/art19.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 3,
    title: "Islamic Art",
    image: "/art4.jpg",
    link: "https://yourprojectlink.com",
  },
 {
    id: 4,
    title: "Islamic Art",
    image: "/art5.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 5,
    title: "Canvas Art",
    image: "/art1.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 6,
    title: "Islamic Art",
    image: "/art6.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 7,
    title: "Canvas Art",
    image: "/art9.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 8,
    title: "Canvas Art",
    image: "/art7.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 9,
    title: "Canvas Art",
    image: "/art10.jpg",
    link: "https://yourprojectlink.com",
  },
 {
    id: 10,
    title: "Canvas Art",
    image: "/art11.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 11,
    title: "Canvas Art",
    image: "/art12.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 12,
    title: "Canvas Art",
    image: "/art13.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 13,
    title: "Canvas Art",
    image: "/art14.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 14,
    title: "Canvas Art",
    image: "/art15.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 15,
    title: "Canvas Art",
    image: "/art16.jpg",
    link: "https://yourprojectlink.com",
  },
 {
    id: 16,
    title: "Canvas Art",
    image: "/art17.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 17,
    title: "Canvas Art",
    image: "/art18.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 18,
    title: "Canvas Art",
    image: "/art19.jpg",
    link: "https://yourprojectlink.com",
  },
   {
    id: 19,
    title: "Canvas Art",
    image: "/art20.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 20,
    title: "Canvas Art",
    image: "/art21.jpg",
    link: "https://yourprojectlink.com",
  },
 {
    id: 21,
    title: "Canvas Art",
    image: "/art22.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 22,
    title: "Canvas Art",
    image: "/art23.jpg",
    link: "https://yourprojectlink.com",
  },
  {
    id: 23,
    title: "Canvas Art",
    image: "/art24.jpg",
    link: "https://yourprojectlink.com",
  },
   {
    id: 24,
    title: "Canvas Art",
    image: "/art25.jpg",
    link: "https://yourprojectlink.com",
  },
];

const WorkPage = () => {
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
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl text-pink-500 font-bold mb-4">My Work</h1>
        <p className="text-white max-w-xl mx-auto">
          Here are some of the projects — My passion lies in painting flowers and emotional images of recent occasions and Description of the prophets Hadith’s into canvas capturing beauty..

        </p>
      </section>

      <section className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#1A172D] rounded-xl shadow-lg overflow-hidden">
           <img
  src={project.image}
  alt={project.title}
  className="w-full h-64 object-cover rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-110"
/>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
             <a
            href="mailto:Taiwohassantemitope2020@gmail.com?subject=Service Inquiry"
                className="inline-block bg-pink-500 hover:bg-pink-500 text-white px-4 py-2 rounded-md transition"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </section>
      <section className="mt-24 max-w-3xl mx-auto text-center px-4">
  <h2 className="text-3xl font-bold mb-4 text-white">Get In Touch</h2>
  <p className="text-white mb-8">
    Have a project idea or need help bringing your vision to life? Reach out and let's make it happen.
  </p>

  <div className="space-y-6 text-left">
    <div>
      <label className="text-sm text-gray-300 block mb-1">Name</label>
      <input
        type="text"
        className="w-full bg-pink-200 text-white px-4 py-2 rounded-lg border border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Your name"
        disabled
      />
    </div>

    <div>
      <label className="text-sm text-gray-300 block mb-1">Email</label>
      <input
        type="email"
        className="w-full bg-pink-200 text-white px-4 py-2 rounded-lg border border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="you@example.com"
        disabled
      />
    </div>

    <div>
      <label className="text-sm text-gray-300 block mb-1">Message</label>
      <textarea
        rows="5"
        className="w-full bg-pink-200 text-white px-4 py-2 rounded-lg border border-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Contact me..."
        disabled
      />
    </div>

    {/* Call to Action */}
    <a
      href="mailto:Taiwohassantemitope2020@gmail.com?subject=Let's Collaborate&body=Hi, I came across your portfolio and I’d love to work with you!"
      className="inline-block w-full text-center bg-pink-500 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-lg transition"
    >
      Send Message
    </a>
  </div>
</section>

    </main>
  );
};

export default WorkPage;
