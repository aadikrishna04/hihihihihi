"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "Aadit Krishna", linkedin: "https://www.linkedin.com/in/aaditkrishna/" },
  { name: "Ajay Raj", linkedin: "hhttps://www.linkedin.com/in/ajay-raj-670850230/" },
  { name: "Jay Wankhede", linkedin: "https://www.linkedin.com/in/jaywankhede/" },
  { name: "Marshall Mandell", linkedin: "https://www.linkedin.com/in/marshall-mandell/" },
];

export function HeroSection() {
  return (
    <header className="relative text-center py-0 my-0 bg-transparent border-none">
      <Image
        src="/banner.svg"
        alt="XRBridge"
        width={1200}
        height={200}
        className="block w-auto max-w-full h-auto mx-auto"
        style={{ background: 'transparent' }}
        unoptimized
      />
      {/* Team Banner */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 px-4 py-3 bg-white/[0.03] backdrop-blur-xl border-t border-white/[0.06]">
        {teamMembers.map((member, index) => (
          <Link
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base text-neutral-400 hover:text-white transition-colors duration-300 relative group"
          >
            {member.name}
            {index < teamMembers.length - 1 && (
              <span className="mx-2 md:mx-3 text-neutral-600">•</span>
            )}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>
    </header>
  );
}
