'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Head from 'next/head';
import Display from './components/OutlineCards';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
};

const team = [
  {
    id: 1,
    name: "Shauryan Kanaujia",
    role: "Co-President",
    bio: "",
    img: "/1.png"
  },
  {
    id: 2,
    name: "Hanjoon Lee",
    role: "Co-President",
    bio: "",
    img: "/2.png"
  },
  {
    id: 3,
    name: "Kalyaa Pradeep",
    role: "Vice President",
    bio: "",
    img: "/3.png"
  },
];


export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('show');
  }, [controls]);

  return (
    <>
      <Head>
        <title>TITLED | Creative Design Agency</title>
        <meta name="description" content="TITLED is a cutting-edge design agency redefining branding through impactful storytelling." />
      </Head>

      {/* Hero Section */}
      <section className="h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="z-10 text-center px-4"
        >
          <h1 className="text-7xl sm:text-9xl md:text-[15rem] font-extrabold tracking-tighter leading-none">
            <span className="text-gray-500 line-through">UN</span>
            <span className="ml-2 text-white">[TITLED]</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Transforming ideas into visual impact.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12"
        >
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-white text-gray-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 variants={fadeUp} initial="hidden" animate={controls} className="text-6xl font-extrabold mb-6">
            <span className="inline-block bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text">
              Who We Are
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={controls}
            className="text-xl text-gray-600 mb-20 max-w-3xl mx-auto"
          >
            <span className="font-semibold text-black">TITLED</span> is a boundary-pushing design agency transforming
            <span className=""> brand identity </span>
            through visual storytelling.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            {team.map((person) => (
              <motion.div
                key={person.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="w-72 bg-white border border-gray-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="h-40 w-40 object-cover rounded-full mx-auto mb-4 border border-gray-300"
                />
                <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                <p className="text-sm font-medium text-gray-700 mb-2">{person.role}</p>
                <p className="text-sm text-gray-500">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smooth Transition Divider */}
      <div className="h-32 bg-gradient-to-b from-white to-gray-50" />

      {/* Projects Section */}
      <section className="py-32 bg-gray-50 text-gray-900">
  <div className="text-center mb-16">
    <h2 className="text-5xl font-extrabold text-gray-800">Featured Projects</h2>
    <p className="text-lg text-gray-500 mt-4">
      Explore some of our latest creations and collaborations.
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 place-items-center">
    {[
      {
        id: 1,
        name: "Competitive Math Club",
        link: "https://competitivemathclub.vercel.app/",
        img: "/image1.png",
      },
      {
        id: 2,
        name: "Hearts of Baking",
        link: "https://heartsofbaking.vercel.app/",
        img: "/image2.png",
      },
      {
        id: 3,
        name: "AI Pioneers",
        link: "https://aipioneers.vercel.app/",
        img: "/image3.png",
      },
      {
        id: 4,
        name: "CHS Bike Club",
        link: "https://chs-bike-club.vercel.app/",
        img: "/bike.png",
      },
    ].map((project) => (
      <motion.a
        key={project.id}
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center text-center group"
      >
        <img
          src={project.img}
          alt={project.name}
          className="w-48 h-48 object-cover rounded-full border-4 border-gray-200 shadow-lg transition-all duration-300 group-hover:border-gray-400"
        />
        <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition">
          {project.name}
        </h3>
      </motion.a>
    ))}
  </div>
</section>

 {/* CTA Section */}
<section className="py-24 bg-white text-gray-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-5xl font-bold mb-4">Let’s Collaborate</h2>
    <p className="text-lg text-gray-600 mb-8">
      Have an idea? Let’s bring it to life through bold design and creative direction.
    </p>
  </div>
</section>



<footer className="bg-gray-950 text-gray-300 py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
    <div>
      <h3 className="text-2xl font-bold mb-4 text-white">TITLED</h3>
      <p className="text-sm leading-relaxed text-gray-400">
        Redefining design through storytelling and innovation.
        <br /> Based in California.
      </p>
    </div>
  </div>

  <div className="text-center text-xs text-gray-600 mt-12">
    © {new Date().getFullYear()} TITLED. All rights reserved.
  </div>
</footer>

    </>
  );
}
