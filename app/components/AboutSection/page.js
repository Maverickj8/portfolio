"use client";
import React from "react";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "../TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>Nextjs</li>
        <li>MongoDB</li>
      </ul>
    )
  },
  {title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Chemistry</li>
        <li>University of Nigeia</li>
      </ul>
    )
  },
  {title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Developer</li>
        <li>frontend Developer</li>
        <li>Mobile Developer</li>
      </ul>
    )
  }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, onTransition] = useTransition();

  const handleTransition = (id) => {
    onTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 h-full">
        <Image src="/images/setup.jpeg " width={500} height={500} alt="setup" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base">
            I am a frontend and mobile developer passionate about creating
            intuitive digital experiences. With years of experience, I
            specialize in HTML, CSS, JavaScript, React, React Native, Nextjs,
            MongoDB and Nodejs. I excel in crafting
            polished websites and mobile apps, paying attention to detail and
            staying updated with the latest trends. Let's collaborate to bring
            your vision to life!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTransition("skills")}
              active={tab === "skills"}
            >
              Skills{"" }
            </TabButton>

            <TabButton
              selectTab={() => handleTransition("education")}
              active={tab === "education"}
            >
              {" "}
              <span className="text-transparent bg-clip-text">....</span>Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTransition("experience")}
              active={tab === "experience"}
            >
              {" "}
              <span className="text-transparent bg-clip-text">....</span>Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
