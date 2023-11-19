import { SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-6">
      <div className="padding-container max-container flex w-full flex-col gap-6">
        <div className="flex flex-row items-start justify-center">
          <ul className="flex gap-4 ">
            {SOCIALS.map((social) => (
              <Link href={social.href} key={social.key}>
                <Image src={social.image} alt="logo" width={40} height={40} />
              </Link>
            ))}
          </ul>
        </div>

        <div className="border bg-gray-20 mt-6" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Echo | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
