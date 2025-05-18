"use client";

import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import all components with SSR disabled
const AboutSection = dynamic(() => import("./components/homepage/about"), { ssr: false });
const Blog = dynamic(() => import("./components/homepage/blog"), { ssr: false });
const ContactSection = dynamic(() => import("./components/homepage/contact"), { ssr: false });
const Education = dynamic(() => import("./components/homepage/education"), { ssr: false });
const Experience = dynamic(() => import("./components/homepage/experience"), { ssr: false });
const HeroSection = dynamic(() => import("./components/homepage/hero-section"), { ssr: false });
const Projects = dynamic(() => import("./components/homepage/projects"), { ssr: false });
const Skills = dynamic(() => import("./components/homepage/skills"), { ssr: false });

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setBlogs([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {!isLoading && <Blog blogs={blogs} />}
      <ContactSection />
    </div>
  )
};