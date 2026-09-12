"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaXmark,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaMessage,
  FaPaperPlane,
  FaArrowRight,
  FaShieldHalved,
  FaGlobe,
  FaHandshake,
  FaCircleCheck,
} from "react-icons/fa6";

export default function Popup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    place: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Inquiry Submitted:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();

      setFormData({
        name: "",
        email: "",
        mobile: "",
        place: "",
        message: "",
      });
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-[#080808]/85 px-3 py-5 backdrop-blur-[10px] sm:px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* =========================================================
              MODAL
          ========================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[75vh] min-h-0 w-full max-w-[800px] overflow-hidden bg-[#F4F1E8] shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
          >
            {/* =========================================================
                CLOSE
            ========================================================= */}

            <button
              onClick={onClose}
              aria-label="Close popup"
              className="group absolute right-4 top-4 z-[100] flex h-10 w-10 items-center justify-center border border-black/10 bg-white text-[#171511] transition-all duration-300 hover:border-[#D4A017] hover:bg-[#D4A017] hover:text-black sm:right-5 sm:top-5"
            >
              <FaXmark
                size={16}
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </button>

            {/* =========================================================
                LEFT CREATIVE PANEL
            ========================================================= */}

            <div className="relative hidden w-[42%] overflow-hidden bg-[#11100D] lg:block">
              {/* SVG BACKGROUND */}

              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
                viewBox="0 0 500 800"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M-80 130C90 20 160 220 320 130C410 80 450 35 570 -30"
                  stroke="#D4A017"
                  strokeWidth="1"
                />

                <path
                  d="M-100 700C90 580 170 760 330 650C400 600 460 570 560 540"
                  stroke="#D4A017"
                  strokeWidth="1"
                />

                <circle
                  cx="420"
                  cy="150"
                  r="110"
                  stroke="#D4A017"
                  strokeWidth="1"
                />

                <circle
                  cx="420"
                  cy="150"
                  r="82"
                  stroke="#D4A017"
                  strokeWidth="1"
                />

                <circle
                  cx="420"
                  cy="150"
                  r="52"
                  stroke="#D4A017"
                  strokeWidth="1"
                />

                <path
                  d="M40 0V800M120 0V800M200 0V800M280 0V800M360 0V800M440 0V800"
                  stroke="#FFFFFF"
                  strokeOpacity="0.025"
                />

                <path
                  d="M0 100H500M0 200H500M0 300H500M0 400H500M0 500H500M0 600H500M0 700H500"
                  stroke="#FFFFFF"
                  strokeOpacity="0.025"
                />
              </svg>

              {/* GOLD GLOW */}

              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-28 top-20 h-64 w-64 rounded-full bg-[#D4A017]/10 blur-[80px]"
              />

              {/* TOP NUMBER */}

              <div className="absolute left-8 top-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-[#D4A017]" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#D4A017]">
                    Resol Industries
                  </span>
                </div>
              </div>

              {/* MAIN CONTENT */}

              <div className="relative z-10 flex h-full flex-col justify-between p-9 pt-28">
                <div>
                  <motion.p
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/35"
                  >
                    01 / Inquiry
                  </motion.p>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-5 max-w-[320px] text-[clamp(3rem,5vw,5rem)] font-black leading-[0.88] tracking-[-0.055em] text-white"
                  >
                    Let's
                    <span className="block text-[#D4A017]">Build</span>
                    Together.
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-5 max-w-[300px] text-sm leading-6 text-white/45"
                  >
                    Tell us what you need. Our team will understand your
                    requirement and connect you with the right industrial
                    material solution.
                  </motion.p>
                </div>

                {/* BOTTOM INFO */}

                <div>
                  <div className="mb-7 h-px w-full bg-white/10" />

                  <div className="grid grid-cols-2 gap-5">
                
                  
                  </div>

                  {/* DECORATIVE INDEX */}

                  <div className="mt-10 flex items-end justify-between">
                    <span className="text-[8px] uppercase tracking-[0.35em] text-white/20">
                      RESOL / INDUSTRIAL MATERIALS
                    </span>

                    <span className="text-6xl font-black leading-none text-white/[0.035]">
                      RIL
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                RIGHT FORM
            ========================================================= */}

            <div className="relative min-h-0 min-w-0 flex-1 overflow-y-auto bg-[#FAF9F4]">
              {/* FORM BACKGROUND SVG */}

              <svg
                className="pointer-events-none absolute right-0 top-0 h-65 w-72 text-[#D4A017]/10"
                viewBox="0 0 300 300"
                fill="none"
              >
                <circle
                  cx="250"
                  cy="45"
                  r="90"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <circle
                  cx="250"
                  cy="45"
                  r="65"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <circle
                  cx="250"
                  cy="45"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                />

                <path
                  d="M0 170C90 130 170 220 310 130"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>

              <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                {/* MOBILE HEADER */}

                <div className="mb-8 lg:hidden">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#D4A017]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#A97900]">
                      Resol Industries
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-black leading-none text-[#171511]">
                    Let's Build
                    <span className="text-[#B8860B]"> Together.</span>
                  </h2>
                </div>

                {/* FORM HEADER */}

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <div className="flex items-center justify-between">
                    <div>

                      <h3 className=" text-2xl font-black tracking-[-0.03em] text-[#171511] sm:text-3xl">
                        Tell Us What You Need.
                      </h3>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center border border-[#D4A017]/30 bg-[#D4A017]/5 text-[#B8860B] sm:flex">
                      <FaPaperPlane size={15} />
                    </div>
                  </div>

                  <div className="mt-4 h-px w-full bg-[#D8D1C3]" />

                
                </motion.div>

                {/* SUCCESS */}

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.96,
                      }}
                      className="flex min-h-[380px] flex-col items-center justify-center text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 12,
                        }}
                        className="flex h-20 w-20 items-center justify-center border border-[#D4A017] bg-[#D4A017] text-[#171511]"
                      >
                        <FaCircleCheck size={32} />
                      </motion.div>

                      <h3 className="mt-7 text-3xl font-black text-[#171511]">
                        Inquiry Received.
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-[#777066]">
                        Thank you for contacting Resol Industries. Our team
                        will get back to you shortly.
                      </p>

                      <div className="mt-7 flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.25em] text-[#A97900]">
                        <span className="h-px w-8 bg-[#D4A017]" />
                        Resol Industries Ltd.
                        <span className="h-px w-8 bg-[#D4A017]" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      onSubmit={handleSubmit}
                      className="mt-7"
                    >
                      {/* ==========================================
                          ROW 1
                      ========================================== */}

                      <div className="grid gap-x-3 gap-y-3 md:grid-cols-2">
                        <FormInput
                          label="Your Name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          icon={<FaUser size={12} />}
                          value={formData.name}
                          onChange={handleChange}
                        />

                        <FormInput
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="Enter email address"
                          icon={<FaEnvelope size={12} />}
                          value={formData.email}
                          onChange={handleChange}
                        />

                        <FormInput
                          label="Mobile Number"
                          name="mobile"
                          type="tel"
                          placeholder="Enter mobile number"
                          icon={<FaPhone size={12} />}
                          value={formData.mobile}
                          onChange={handleChange}
                        />

                        <FormInput
                          label="Location"
                          name="place"
                          type="text"
                          placeholder="City / Location"
                          icon={<FaLocationDot size={12} />}
                          value={formData.place}
                          onChange={handleChange}
                        />
                      </div>

                      {/* ==========================================
                          MESSAGE
                      ========================================== */}

                      <div className="mt-5">
                        <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.2em] text-[#615B52]">
                          Requirement / Message
                        </label>

                        <div className="group relative">
                          <div className="pointer-events-none absolute left-0 top-0 flex h-full w-11 items-start justify-center pt-4 text-[#A69E91] transition-colors duration-300 group-focus-within:text-[#B8860B]">
                            <FaMessage size={12} />
                          </div>

                          <textarea
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your product requirement..."
                            className="block min-h-[115px] w-full resize-none border-b border-[#CFC8BB] border-l border-r border-t border-l-[#DDD6C8] border-r-[#DDD6C8] border-t-[#DDD6C8] bg-[#FFFDF8] px-11 py-3.5 text-sm text-[#28241D] outline-none transition-all duration-300 placeholder:text-[#AAA399] focus:border-[#D4A017] focus:bg-white"
                          />
                        </div>
                      </div>

                      {/* ==========================================
                          SUBMIT
                      ========================================== */}

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.985 }}
                        className="group relative mt-6 flex h-14 w-full items-center justify-between overflow-hidden bg-[#171511] px-5 text-white transition-all duration-500"
                      >
                        {/* GOLD SLIDE */}

                        <motion.span
                          className="absolute inset-0 origin-left scale-x-0 bg-[#D4A017] transition-transform duration-500 group-hover:scale-x-100"
                        />

                        <span className="relative z-10 flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] transition-colors duration-300 group-hover:text-[#171511]">
                          <FaPaperPlane size={12} />
                          Send Inquiry
                        </span>

                        <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-[#171511]/20">
                          <FaArrowRight
                            size={11}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>
                      </motion.button>

          
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ============================================================
   FORM INPUT
============================================================ */

function FormInput({
  label,
  name,
  type,
  placeholder,
  icon,
  value,
  onChange,
}) {
  return (
    <div className="group min-w-0">
      <label className="mb-1 block text-[9px] font-black uppercase tracking-[0.2em] text-[#615B52]">
        {label}
      </label>

      <div className="relative">
        {/* ICON */}

        <div className="pointer-events-none absolute left-0 top-0 flex h-12 w-11 items-center justify-center text-[#A69E91] transition-colors duration-300 group-focus-within:text-[#B8860B]">
          {icon}
        </div>

        {/* GOLD ACTIVE LINE */}

        <span className="pointer-events-none absolute bottom-0 left-0 z-10 h-[2px] w-0 bg-[#D4A017] transition-all duration-500 group-focus-within:w-full" />

        {/* INPUT */}

        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="block h-12 w-full min-w-0 border border-[#DDD6C8] bg-[#FFFDF8] px-11 text-sm text-[#28241D] outline-none transition-all duration-300 placeholder:text-[#AAA399] focus:border-[#D4A017] focus:bg-white"
        />
      </div>
    </div>
  );
}

