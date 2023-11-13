import Image from "next/image";
import Link from "next/link";

interface WorksProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  website: string;
}

const WorksSite = ({
  backgroundImage,
  title,
  subtitle,
  website,
}: WorksProps) => {
  return (
    <div
      className={`h-full  w-full min-w-[600px] lg:min-w-[1100px] xl:min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6  lg:px-20 lg:py-10">
        <div className="flexCenter gap-4 bg-green-90 p-4 rounded-3xl">
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <Link
              href={website}
              key={website}
              className="bold-16 md:bold-20 text-white"
            >
              <p className="regular-14 text-white">{website}</p>
            </Link>
          </div>
        </div>

        <div className="flexCenter gap-3  bg-green-90 px-5 py-3 rounded-3xl">
          <div className="rounded-full bg-green-50 p-2">
            <Image src="/folded-map.svg" alt="map" width={12} height={12} />
          </div>
          <div className="bold-16 md:bold-20 text-white">{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section
      id="works"
      className="2xl:max-container relative flex flex-col  mb-28 lg:py-20"
    >
      <div className="hide-scrollbar flex h-[400px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[500px] xl:h-[640px] ">
        <WorksSite
          backgroundImage="bg-bg-img-1"
          title="T'z Products"
          subtitle="Shopify, UI/UX"
          website="https://tzproducts.jp"
        />
        <WorksSite
          backgroundImage="bg-bg-img-2"
          title="かもめのノート"
          subtitle="WordPress, UI/UX"
          website="https://kamomenote.org"
        />
        <WorksSite
          backgroundImage="bg-bg-img-3"
          title="幸光家具"
          subtitle="WordPress"
          website="https://saikou-kagu.com"
        />
        <WorksSite
          backgroundImage="bg-bg-img-4"
          title="SAIKOUサウナ製作所"
          subtitle="WordPress"
          website="https://saikou-sauna.com"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Works</strong>
          </h2>
          <p className="regular-16 xl:regular-16 mt-5 text-white">
            Shopifyを使った2か国語ECサイトや、WordPressサイトのデザイン〜コーディング、など制作実績の一部になります。
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="works-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
