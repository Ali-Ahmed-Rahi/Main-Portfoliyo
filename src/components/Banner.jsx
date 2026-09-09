"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MdOutlineSimCardDownload } from "react-icons/md";
import Image from "next/image";
import img2 from "../assets/Banner/2.png";
import GlowWrapper from "../helpers/GlowWrapper";

const Banner = () => {
  const prefersReducedMotion = useReducedMotion();
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const MotionH1 = motion.h1;
  const MotionH2 = motion.h2;
  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <div className="relative h-[430px] overflow-hidden bg-black sm:h-[520px] md:h-[620px] lg:h-[min(70vh,760px)]">
      <MotionDiv
        initial={prefersReducedMotion ? false : { scale: 1.06, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          className="object-cover object-center"
          src={img2}
          alt="Ali Ahmed Rahi portfolio banner"
          priority
          fill
          sizes="100vw"
        />
      </MotionDiv>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent" />

      <MotionDiv
        {...reveal(0.35)}
        className="absolute right-3 top-3 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full border border-white/30 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:right-5 sm:top-5 sm:text-xs md:right-8 md:top-8 md:tracking-[0.18em]"
      >
        <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
        Available for work
      </MotionDiv>

      <div className="absolute bottom-8 left-4 mx-3 flex max-w-[calc(100%-2rem)] flex-col gap-3 text-white sm:bottom-10 sm:left-5 sm:gap-5 md:bottom-20 md:left-8">
        <MotionP
          {...reveal(0.5)}
          className="font-roboto text-[10px] uppercase tracking-[0.2em] text-yellow-300 sm:text-xs md:text-sm md:tracking-[0.3em]"
        >
          Full-stack developer
        </MotionP>
        <MotionH1
          {...reveal(0.65)}
          className="font-playfair text-3xl font-bold sm:text-5xl lg:text-7xl"
        >
          Hi!
        </MotionH1>
        <MotionH2
        
          {...reveal(0.8)}
          className="font-playfair text-4xl font-bold text-yellow-500 sm:text-5xl lg:text-7xl"
        >
          I&apos;m Rahi
        </MotionH2>
        <MotionDiv {...reveal(0.95)}>
          <GlowWrapper>
            <a
              href="https://drive.google.com/uc?export=download&id=1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5"
              className="group flex items-center justify-center gap-2 bg-black p-3 text-white transition-colors hover:text-yellow-500"
              aria-label="Download resume"
            >
              Download Resume
              <MdOutlineSimCardDownload className="text-lg transition-transform group-hover:translate-y-1" />
            </a>
          </GlowWrapper>
        </MotionDiv>
      </div>
    </div>
  );
};

export default Banner;
