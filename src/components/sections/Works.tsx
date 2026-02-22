import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github, websitelink } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
  websiteLink,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareColor="#aaa6c3"
      >
        <div className="bg-tertiary w-full rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.15)]">
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover object-top transition-transform duration-500 hover:scale-105"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-2">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200"
              >
                <img
                  src={github}
                  alt="source code"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
              {websiteLink && (
                <div
                  onClick={() => window.open(websiteLink, "_blank")}
                  className="black-gradient flex h-8 w-8 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200"
                >
                  <img
                    src={websitelink}
                    alt="live website"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 sm:mt-5">
            <h3 className="text-[18px] sm:text-[22px] lg:text-[24px] font-bold text-white leading-tight">{name}</h3>
            <p className="text-secondary mt-2 text-[13px] sm:text-[14px] leading-[22px] line-clamp-4">{description}</p>
          </div>
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[14px] sm:text-[17px] leading-[24px] sm:leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");