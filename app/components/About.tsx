"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { MovingBorder, Button } from "@/components/ui/moving-border";

const info = {
  title: "About me",
  descrption:
    "I have 7 years of experience as a Software Developer. I really enjoy programming and have wanted to be a programmer since I was a child.",
  details: [
    {
      fieldName: "Name",
      fieldValue: "Dan Simonson",
    },
    {
      fieldName: "Experience",
      fieldValue: "7+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:simondvanwinkle",
    },
    {
      fieldName: "Skype Phone",
      fieldValue: "1 281 407 3358",
    },
    {
      fieldName: "Nationality",
      fieldValue: "U.S. Citizen",
    },
    {
      fieldName: "Email",
      fieldValue: "dansimonson@mariposaweb.net",
    },
    {
      fieldName: "Work Status",
      fieldValue: "Available",
    },
  ],
};

const experience = {
  title: "Software Developer",
  description:
    "I have filled frontend as well as a full-stack roles for several companies from fortune 500 corporations to startups.",
  items: [
    {
      company: "TCS",
      position: "Software Developer",
      duration: "February 2021 - August 2023",
    },
    {
      company: "Matrix",
      position: "Software Developer",
      duration: "October 2020 - December 2020",
    },
    {
      company: "Cognizant",
      position: "Software Developer",
      duration: "February 2020 - September 2020",
    },
    {
      company: "Charter Global",
      position: "Software Developer",
      duration: "August 2019 - January 2020",
    },
    {
      company: "Vasavah",
      position: "Software Developer",
      duration: "November 2018 - June 2019",
    },
    {
      company: "mariposaweb",
      position: "Software Developer",
      duration: "September 2017 - September 2018",
    },
  ],
};
const education = {
  title: "My Education",
  description:
    "I have an Associates Degree in programming and a Bachelor of Science Degree in Computer Science",
  items: [
    {
      institution: "Saint Martin’s University (cum laude/3.65 GPA)",
      degree: "Bachelor of Science: Computer Science",
      duration: "2002 - 2004",
    },
    {
      institution: "Pierce College, Fort Steilacoom",
      degree: "Associate of Science: Programming",
      duration: "2000 - 2002",
    },
    {
      institution: "Excelsior College",
      degree: "Bachelor of Arts: Liberal Arts",
      duration: "1997",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have worked, sometimes as a frontend developer and other times as a full-stack developer, for companies who were big fortune 500 corporations to small startups.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
  ],
};

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h[80vh] flex items-center justify-center py-12 xl:py-0 mt-40"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            {/* <p className='pb-4 pt-3'></p> */}
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger
                className="bg-transparent text-3xl font-bold pb-[40px] text-black dark:text-white"
                value="who is Dan"
              >
                <div>
                  I&apos;m Dan <br /> I love programming
                </div>
              </TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="info">About Me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full pt-3 pl-2 pr-2 pb-2">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-cyan-400 dark:bg-cyan-700 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#827717] dark:text-[#CDDC39]">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full text-[#827717] dark:text-[#CDDC39] "></span>
                              <p className="dark:text-white/60 text-black ">
                                {item.company}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-cyan-400 dark:bg-cyan-700 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-[#827717] dark:text-[#CDDC39]">
                              {item.duration}
                            </span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full text-[#827717] dark:text-[#CDDC39] "></span>
                              <p className="dark:text-white/60 text-black ">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] xl:gap-1 text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0 ">
                      {skills.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-cyan-400 dark:bg-cyan-700 rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-white dark:group-hover:text-black transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
              <TabsContent
                value="info"
                className="w-full text-center xl:text-left"
              >
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{info.title}</h3>
                  <p className="max-w-[600px] dark:text-white/60 text-black mx-auto xl:mx-0">
                    {info.descrption}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {info.details.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex items-center justify-center xl:justify-start gap-4"
                        >
                          <span className="dark:text-white/60 text-black">
                            {item.fieldName}
                          </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};
export default About;
