import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-28 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">FRONTEND, UI/UX</h1>
        <p className="regular-16 my-6 text-gray-30 xl:max-w-[1000px]">
          LP・バナーのデザイン・コーディングなどWEBマーケティングのクリエイティブや、ワードプレスを使ったコーポレートサイトなどの制作において７年の経験があります。<br />
          モバイルアプリのUIデザインや、Shopifyを使ったECサイトの運営もしています。<br />
          ミュージシャンとして海外での活動経験もあり、基本的な英語はできます。大阪在住です。
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row items-center">
          <Link href="/#works" className="w-full sm:w-64">
            <Button type="button" title="制作実績" variant="btn_green" />
          </Link>
          <Link href="/#skill" className="w-full sm:w-auto">
            <Button
              type="button"
              title="持っているスキル"
              icon="/play.svg"
              variant="btn_white_text"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
