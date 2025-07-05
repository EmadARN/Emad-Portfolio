import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ContactUsIcon = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((info) => (
        <Link
          key={info.id}
          href={info.link}
          passHref
          target="_blank"
          rel="noopener noreferrer"
          aria-label={info.name}
          className="w-10 h-10 flex justify-center items-center cursor-pointer 
                     backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 
                     rounded-lg border border-black-300 transition hover:scale-110"
        >
          <Image src={info.img} alt={info.name} width={20} height={20} />
        </Link>
      ))}
    </div>
  );
};

export default ContactUsIcon;
