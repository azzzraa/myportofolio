"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
 ref={ref}
    
      
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    
      
    >
  <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  I worked in the tourism
  industry before deciding to pursue my passion for programming. I enrolled
  in VSS Kranj <span className="font-medium">Computer Science program</span>.{" "}
  <span className="italic">My favorite part of programming</span> is the
  problem-solving aspect. I <span className="underline">love</span> the
  feeling of finally figuring out a solution to a problem. My core stack
  includes{" "}
  <span className="font-medium">
    React, Next.js, Node.js, SQL, HTML, and CSS
  </span>
  . I am also familiar with TypeScript and .NET. I am always looking to learn
  new technologies. I am currently looking for a{" "}
  <span className="font-medium">full-time junior position</span> as a software
  developer.
</p>

<p>
  <span className="italic">When I&apos;m not coding</span>, I enjoy playing video
  games, watching movies, and learning new things.
</p>

    </motion.section>
  );
}