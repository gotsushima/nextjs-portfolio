const About = () => {
  return (
    <section className="flexCenter flex-col mb-10">
      <div className="padding-container max-container w-full pb-4  sm:mb-24">
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">About</h2>
          <p className="regular-16 my-6 text-gray-30 xl:max-w-[800px]">
            このサイトは、
            <span className="bold-16">
              Next.js + TypeScript + Tailwind CSS
            </span>{" "}
            で制作しています。
            <br />
            現在新しいスキルとして特にNext.jsの習得に取り組んでいます。
            <br />
            デザイン面では、Figmaを使用してのアプリのUI/UXデザインのスキルアップに取り組んでいます。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
