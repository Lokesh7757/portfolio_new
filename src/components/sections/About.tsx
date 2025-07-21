import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
      >
        {config.sections.about.content}
      </motion.p>

      {/* Social Icons + Download CV */}
      <div className="mt-6 flex flex-col items-start gap-4">
        {/* Social Media Icons */}
        <div className="flex gap-6 text-2xl text-black dark:text-white">
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/lokesh-khankari" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://github.com/Lokesh7757" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        {/* Download CV Button */}
        <a
          href="/portfolio_new/src/assets/Lokesh_Khankari.pdf"
          download
          className="inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2 text-white shadow-md transition hover:bg-blue-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
            />
          </svg>
          Download CV
        </a>
      </div>

      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
