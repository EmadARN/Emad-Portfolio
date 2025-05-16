import { socialMedia } from "@/constants";
import Image from "next/image";
import React from "react";

const ContactUsIcon = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((info) => (
        <div
          key={info.id}
          className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
        >
          <Image src={info.img} alt="icons" width={20} height={20} />
        </div>
      ))}
    </div>
  );
};

export default ContactUsIcon;
