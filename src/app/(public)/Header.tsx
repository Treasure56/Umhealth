import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center gap-4 p-4  ">
      {/* Logo and Brand */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/logo.png"
          alt="UM-Health Logo"
          width={212}
          height={44}
          className="w-auto h-10"
          priority
        />
      </Link>
      {/* Welcome Text */}
      <div className="text-center md:text-left flex-1">
        <span className="text-gray-700 text-base md:text-lg">
          Welcome to{" "}
          <span className="font-semibold">UM-Health Patient Portal</span>
        </span>
      </div>
      <div className="flex items-center gap-2">
        {socials.map((social, index) => (
          <Link
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary p-2 rounded-full"
          >
            <social.icon className="text-white" />
          </Link>
        ))}

        <span className="ml-2 text-gray-700 text-sm md:text-base">
          @UM-Health
        </span>
      </div>
    </header>
  );
}

const socials = [
  {
    icon: LuFacebook,
    url: "https://www.facebook.com/umhealth",
  },
  {
    icon: LuInstagram,
    url: "https://www.instagram.com/umhealth",
  },
  {
    icon: FaXTwitter,
    url: "https://twitter.com/umhealth",
  },
  {
    icon: LuLinkedin,
    url: "https://www.linkedin.com/company/umhealth",
  },
];
