
import { Skill_data } from "../data/skills";
import SectionTitleLightFull from "../SectionTitles/SectionTitle3";
import { useState } from "react";

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="skillsWrap px-0 py-[4.5rem] sm:px-8 sm:py-[5.5rem] md:py-[6.5rem] lg:p-[7.5rem] lg:-mb-[6.25rem] flex justify-center items-center relative w-full">
      <div className="max-w-[1224px]  ">
        <SectionTitleLightFull
          title="My Skill &"
          titleInner="Advantage"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <div className="skillsList grid gap-[1.875rem] grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 md:grid  relative w-full overflow-hidden border shadow-xl">
          {Skill_data.map((item, index) => (
            <div key={index}>
              <div
                className={`flex rounded-full overflow-hidden p-6 border-black border-2 w-40 h-40 bg-black  text-white text-3xl font-extrabold items-center relative`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.Image}
                  alt=""
                  className={`w-full h-full object-cover`}
                />

                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex items-center text-4xl font-extrabold justify-center bg-white bg-opacity-95 text-black">
                    {item.skill_per}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;