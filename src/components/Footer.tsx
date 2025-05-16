import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import MagicButton from "./MagicButton";
import { socialMedia } from "@/constants";
import ContactUsIcon from "./ui/ContactUsIcon";

const Footer = () => {
  return (
    <footer
      className="relative w-full pt-20 pb-10 mt-auto bg-transparent"
      id="contact"
    >
      {/* background grid */}
      <div className="w-full absolute left-0 top-36 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-4">
        <p className="md:text-base text-sm font-light text-white-300">
          Copyright © 2025 Emad Araban
        </p>

        <ContactUsIcon />
      </div>
    </footer>
  );
};

export default Footer;
