"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Krishan Kumar Bansal",
    role: "Founder Director",
    image: "/mr-krishan-kumar-bansal.webp",
  },
  {
    name: "Mr. Parth Dodeja",
    role: "Director",
    image: "/mr-parth-dodeja-big-377x474.webp",
  },
  {
    name: "Mr. Vijay Kr. Rawal",
    role: "Director",
    image: "/vijay-rawal-377x474.webp",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function OurTeam() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 md:py-12 lg:py-12">
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute -right-40 top-[15%] h-[400px] w-[400px] rounded-full bg-[#D4A017]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-black/[0.035] blur-[110px]" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-10 grid gap-7 lg:mb-12 lg:grid-cols-[1fr_380px] lg:items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#D4A017]" />

              <span className="font-[var(--font-lexend-deca)] text-[9px] font-semibold uppercase tracking-[2.5px] text-[#D4A017]">
                Our Leadership
              </span>
            </div>

            <h2 className="max-w-[700px] font-[var(--font-outfit)] text-[42px] font-semibold leading-[0.9] tracking-[-0.055em] text-[#1c1c1c] sm:text-[46px] lg:text-[50px]">
              The People
              <span className="block text-[#D4A017]">
                Behind RIL.
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="mb-4 h-px w-full bg-black/10" />

            <p className="max-w-md font-[var(--font-lexend-deca)] text-[12px] leading-6 text-black/55 md:text-[13px]">
              Experienced leadership combining industry knowledge,
              dependable relationships and a long-term vision for
              industrial material distribution.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            TEAM
        ===================================================== */}
        <div className="relative">

          {/* DESKTOP DECORATIVE LINE */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px bg-black/[0.07] lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-0">

            {teamMembers.map((member, index) => (
              <motion.article
                key={member.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                className={`
                  group relative
                  ${
                    index === 0
                      ? "lg:translate-y-0"
                      : index === 1
                      ? "lg:translate-y-10"
                      : "lg:translate-y-20"
                  }
                `}
              >

                {/* NUMBER */}
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-[var(--font-outfit)] text-[11px] font-semibold tracking-[2px] text-[#D4A017]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-black/10 transition-all duration-500 group-hover:w-16 group-hover:bg-[#D4A017]" />
                </div>

                {/* IMAGE */}
                <div className="relative mx-auto aspect-[3/3.55] w-full max-w-[350px] overflow-hidden bg-[#eeeeee]">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* GOLD BOTTOM LINE */}
                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#D4A017] transition-all duration-500 group-hover:w-full" />

                  {/* ARROW */}
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-black">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="transition-transform duration-500 group-hover:rotate-45"
                    />
                  </div>

                  {/* ROLE */}
                  <div className="absolute bottom-4 left-4">
                    <span className="font-[var(--font-lexend-deca)] text-[8px] font-semibold uppercase tracking-[2.2px] text-white/75">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* NAME */}
                <div className="mx-auto mt-4 max-w-[350px] border-b border-black/10 pb-4">

                  <h3 className="font-[var(--font-outfit)] text-lg font-semibold tracking-[-0.4px] text-[#1c1c1c] transition-colors duration-300 group-hover:text-[#D4A017] sm:text-xl">
                    {member.name}
                  </h3>

                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-[var(--font-lexend-deca)] text-[8px] uppercase tracking-[1.8px] text-black/35">
                      Resol Industries Ltd.
                    </span>

                    <span className="h-px w-7 bg-[#D4A017]/50 transition-all duration-500 group-hover:w-12" />
                  </div>
                </div>

              </motion.article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}