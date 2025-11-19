// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

import CTAImage from "../assets/TeamImg/image1.jpeg";
import Image2 from "../assets/TeamImg/image2.jpg";
import Image3 from "../assets/TeamImg/image7.jpg";
import Image4 from "../assets/TeamImg/image9.jpg";
import AboutVideo from "../assets/AboutUS.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const About = () => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.15 }}
    >

      {/* ================= HEADER VIDEO SECTION ================= */}
      <motion.section
        variants={fadeIn}
        className="w-full h-[70vh] relative mt-20 overflow-hidden"
      >
        <motion.video
          src={AboutVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold">
            About Us
          </motion.h1>

          <motion.p variants={fadeUp} className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl">
            We unfold organizational potential by blending purpose, people, and process.
          </motion.p>
        </div>
      </motion.section>

      {/* ================= SECTION 1 — WHO WE ARE ================= */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <motion.div variants={fadeIn} className="w-full h-full rounded-xl shadow-lg overflow-hidden">
            <img src={CTAImage} className="w-full h-full object-cover" />
          </motion.div>

          {/* TEXT */}
          <div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">
              Who We Are
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4">
              Jain Impact Labs is a strategic consulting practice that blends the art of human 
              understanding with the science of data-driven strategy. Our purpose is to architect 
              organizations that are structurally sound, creatively inspired, and impact-oriented.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4">
              Inspired by the philosophy of origami, we see every organization as a sheet of untapped 
              potential. Through precise “folds”—strategic clarity, leadership development, people 
              systems, and process excellence—we transform that potential into resilient, scalable, 
              high-performing ecosystems.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
              Our expertise spans Leadership Development, Organizational Design, Strategic HR, 
              People Analytics, and Capability Building across industries and geographies.
            </motion.p>
          </div>

        </div>
      </section>

      {/* ================= NEW PEOPLE-CENTRIC SECTION (TEXT LEFT, IMAGE RIGHT) ================= */}
      <motion.section
        variants={fadeIn}
        className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center"
      >

        {/* LEFT SIDE — TEXT */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            People at the Center of Everything We Do
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            At Jain Impact Labs, we follow a deeply people-centric philosophy.  
            We believe progress is never an individual journey — it is a collective movement forward.  
            We bring people together, align their strengths, and build environments where everyone 
            feels supported, valued, and empowered to grow.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Just like origami, where each fold shapes beauty, structure, and purpose,  
            we help individuals, teams, and organizations unfold into stronger, more meaningful 
            versions of themselves. Every fold is intentional — every shift is designed to unlock 
            potential.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our commitment is simple: elevate people, strengthen teams, and help the entire 
            organization move forward — together.
          </p>
        </motion.div>

        {/* RIGHT SIDE — IMAGE */}
        <motion.div
          variants={fadeIn}
          className="w-full h-[60vh] rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src={Image2}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* ================= ORIGAMI PHILOSOPHY ================= */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">
          Our Philosophy: The Origami of Organizational Success
        </motion.h2>

        <motion.div variants={fadeUp} className="space-y-6 text-gray-700 leading-relaxed">

          <p>
            We believe that every organization holds infinite possibilities—just like a single 
            sheet of paper. The mastery lies in the folds. Our Origami Model brings together:
          </p>

          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Purpose is the Design:</strong> The blueprint that guides direction and alignment.
            </li>
            <li>
              <strong>People are the Paper:</strong> The inherent strength, uniqueness, and potential 
              of the workforce.
            </li>
            <li>
              <strong>Process is the Fold:</strong> The deliberate systems, learning journeys, and HR 
              architectures that create structure and performance.
            </li>
          </ul>

          <p>
            Just like modern origami — where mathematical precision meets artistic creativity —  
            we combine evidence-based research, analytics, and experiential methods to engineer 
            organizations ready for the future.
          </p>

        </motion.div>
      </section>

      {/* ================= CONSULTING ENSEMBLE ================= */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* TEXT */}
          <div>
            <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-4">
              Our Consulting Ensemble
            </motion.h2>

            <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed mb-4">
              Our strength lies in a multidisciplinary ensemble of strategists, psychologists, 
              researchers, and learning architects who bring deep expertise across HR, OD, 
              Leadership Sciences, and People Development.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Dr. Aman Jain — Founder & Strategic Architect:</strong> Designs end-to-end HR 
                ecosystems informed by research and global leadership experience.
              </li>
              <li>
                <strong>Vinay Sirsi — Leadership & Culture Architect:</strong> Builds psychologically 
                safe, high-trust environments where leadership truly thrives.
              </li>
              <li>
                <strong>Priya Venkatesh — Talent & Learning Scientist:</strong> Crafts evidence-based 
                learning journeys rooted in instructional design and behavior change.
              </li>
              <li>
                <strong>Rashid Dwivedi — OD & Strategic HR Expert:</strong> Engineers the structural 
                frameworks that give organizations their form and stability.
              </li>
            </motion.ul>
          </div>

          {/* IMAGE */}
          <motion.div variants={fadeIn} className="rounded-xl shadow-lg overflow-hidden">
            <img src={Image4} className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ================= FULL HEIGHT BANNER ================= */}
      <motion.section variants={fadeIn} className="w-full h-[100vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <img src={Image3} className="w-full h-full object-cover" />

        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white px-6">
          <motion.div variants={fadeUp} className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unfold Your Potential</h2>
            <p className="text-xl md:text-2xl">
              Transform your organization with precision, purpose, and people-centric design.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= WHAT WE STAND FOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-gray-900 mb-6">
          What We Stand For
        </motion.h2>

        <motion.div variants={fadeUp} className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            We fuse analytical depth with human insight. Our work embodies innovation, integrity, and 
            measurable outcomes—delivered through deep research, empathy, and strategic craft.
          </p>

          <p>
            Whether we are designing organization-wide capability frameworks, enabling leadership 
            transitions, or building data-powered HR systems, our approach ensures every intervention 
            creates sustainable, long-term value.
          </p>

          <p>
            Our mission is simple: <strong>Help organizations unfold into their best versions.</strong>
          </p>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default About;
