import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amazoncloneimg from "@/public/amazoncloneimg.png"; 
import gdiimg from "@/public/gdiimg.png"; // Correct
import Restoranimg from "@/public/Restoranimg.png"; // Correct

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "VSS Kranj - Informatika",
    location: "Kranj, Slovenia",
    
    description:
      "I am currently pursuing my degree in Informatika at VSS Kranj. I have completed all exams, but am unable to graduate as I still need to complete my diploma project, which requires a mentor in an IT company..",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  {
    title: "IT Student Intern",
    location: "Telekom Slo, Slovenia",
    description:
      "During my internship at Telekom Slo, I worked in IT, focusing on testing and assisting with various IT-related tasks, further enhancing my technical skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Data Management & Testing Specialist",
    location: "A1 Slovenia",
    description:
      "At A1 Slovenia, I worked for a year in testing, data management, and various IT-related tasks, refining my problem-solving and analytical skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - May 2024",
  },
  {
    title: "Developer Intern - GDI",
    location: "Slovenia",
    description:
      "In 2024, I worked on the Blizzard .NET app and participated in various projects using TypeScript, gaining experience in software development and project collaboration.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - September 2024",
  },
] as const;

export const projectsData = [
 

  {
    title: "Amazon",
    description:
      "A simplified e-commerce app where users can browse products, add items to a basket, and enter card details for simulated transactions.",
    tags: ["React", "Next.js", "Firebase", "Tailwind CSS"],
    imageUrl: amazoncloneimg ,
  },

 

  {
    title: "Azras Restoran",
    description:
      "Simple web application that allows users to view the menu, learn about the chefs, and book tables online. It was built as a school project to demonstrate core web development skills.",
    tags: ["CSS", "JS", "Sql", "Php"],
    imageUrl: Restoranimg ,
  },

  {
    title: "WorkLog",
    description: "I developed a user-friendly application over the course of four months to help users track their work hours, vacations, and related data.",
      
    tags: [" C# with Blazor", "MudBlazor", "Azure AD Authentication", "Tailwind"],
    imageUrl: gdiimg  ,
  },
 
 
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sql",
  "C#"
] as const;