import React from "react";
import { motion } from "framer-motion";
import SolutionsAnimation from "../components/SolutionAnimation";
import { Award, Layers, Briefcase, Settings, Cpu } from "lucide-react";
import Image10 from "../assets/TeamImg/Image10.jpeg"
import Image11 from "../assets/TeamImg/Image11.jpg"
import Image12 from "../assets/TeamImg/Image12.jpg"
import Image13 from "../assets/TeamImg/Image15.jpg"
import Image14 from "../assets/TeamImg/Image16.jpg"

const solutions = [
  {
    Icon: Award,
    title: "Talent & Leadership Transformation",
    img: Image10,
    desc: "We build future-ready leaders through experiential and sustained development journeys Our offerings include:",
    bullets: [
      "Experiential Programs: OBL, Adventure-Based Learning & Business Simulations",
      "Development Tracks: First-Line Leader Ascend, Manager Excellence Ignite & Leadership Evolution",
      "High-Potential Acceleration: ADCs & executive coaching",
      "Behavioural Mastery: Belbin, MBTI, DISC & NLP-based interventions",
    ],
  },
  {
    Icon: Layers,
    title: "Organizational Design & Development",
    img: Image11,
    desc: "We architect the blueprints for high-performing, agile organizations.",
    bullets: [
      "Organization Structuring & Role Clarity.",
      "Competency Framework Development.",
      "Job Analysis & JD Harmonization (using AI-tools).",
      "KRA & KPI Cascade.",
    ],
  },
  {
    Icon: Briefcase,
    title: "Strategic HR Consulting",
    img: Image12,
    desc: "We build the strategic HR function from the ground up.",
    bullets: [
      "HR Function Setup & Maturity Modeling.",
      "Compensation & Benefits Structuring.",
      "Performance Management System (PMS) Design.",
      "Career Architecture & Pathing.",
    ],
  },
  {
    Icon: Settings,
    title: "HR Operations & Digital Transformation",
    img: Image13,
    desc: "We create efficient, scalable, and employee-centric HR engines.",
    bullets: [
      "HR Policy Suite Formulation.",
      "HRMS Selection & Implementation.",
      "Payroll Structuring & Governance.",
      "Employee Experience & Engagement (Surveys, R&R, Helpdesks).",
    ],
  },
  {
    Icon: Cpu,
    title: "People Analytics & AI",
    img: Image14,
    bullets: [
      "Predictive Talent Analytics.",
      "Skills Ontology & Future-Readiness.",
      "Impact & ROI Dashboards (Tableau / Power BI).",
      "Research & Insights Lab: Custom research on Gamification, Intergenerational Learning, and Market Benchmarking.",
    ],
  },
];

const Solutions = () => {
  return (
    <section className="bg-gradient-to-br from-white to-indigo-50 py-20 px-6 mt-8">

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our <span className="text-indigo-600">Solutions</span>: The Master Fold Portfolio
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center mt-6"
        >
          <SolutionsAnimation />
        </motion.div>

        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          We offer a mosaic of interconnected services, designed to address the complete talent lifecycle.
        </p>
      </div>

      {/* Alternating Left + Right Layout */}
      <div className="max-w-6xl mx-auto space-y-24">

        {solutions.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.45 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}
          >

            {/* IMAGE */}
            <div
              className={`w-full rounded-2xl overflow-hidden shadow-sm
              ${i % 2 === 1 ? "md:order-2" : "md:order-1"}
            `}
            >
              <motion.img
                loading="lazy"
                src={`${s.img}?q=60&w=1200`}
                alt={s.title}
                className="w-full h-72 md:h-80 object-cover rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* TEXT */}
            <div className={`${i % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <div className="flex items-start gap-4 mb-3">
                <s.Icon className="w-10 h-10 text-indigo-600 mt-1" />
                <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
              </div>

              <p className="text-gray-600 mb-4">{s.desc}</p>

              <ul className="text-gray-700 list-disc ml-5 space-y-2 text-[15px]">
                {s.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Solutions;
