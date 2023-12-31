import { EXPERIENCE } from "@/constants";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex-col flexCenter overflow-hidden bg-center bg-no-repeat py-24 mb-8 sm:mb-20"
    >
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col ">
          <div className="relative">
            <h2 className="bold-40 lg:bold-64">Experience</h2>
          </div>
          <ul className="mt-11 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {EXPERIENCE.map((experience) => (
              <ExperienceItem
                key={experience.title}
                title={experience.title}
                icon={experience.icon}
                description={experience.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type ExperienceItem = {
  title: string;
  icon: string;
  description: string;
};

const ExperienceItem = ({ title, icon, description }: ExperienceItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Experience;
