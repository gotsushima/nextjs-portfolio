import Image from "next/image";
import React from "react";

const Skill = () => {
  return (
    <section id="skill" className="flexCenter flex-col mb-14">
      <div className="padding-container max-container w-full pb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Skill Set</h2>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/bg.jpg"
          alt="bg"
          width={1440}
          height={580}
          className="w-full object-cover object-center xl:rounded-5xl h-[480px]"
        />

        <div className="absolute flex bg-white py-8 px-12 gap-3 rounded-3xl border shadow-md  ">
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Development</p>
              <p className="bold-20 mt-2">HTML / CSS (SCSS) </p>
              <p className="bold-20 mt-2">Javascript</p>
              <p className="bold-20 mt-2">WordPress</p>
              <p className="bold-20 mt-2">Shopify</p>
            </div>
            <div className="flex w-full flex-col mt-5">
              <p className="regular-16 text-gray-20">Design</p>
              <p className="bold-20 mt-2">Figma</p>
              <p className="bold-20 mt-2">Adobe XD</p>
              <p className="bold-20 mt-2">Illustrator</p>
              <p className="bold-20 mt-2">Photoshop</p>
              <p className="bold-20 mt-2">Premier Pro</p>
              <p className="bold-20 mt-2">After Effects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
