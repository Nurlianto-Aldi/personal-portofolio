import { Icon } from "@iconify/react";
import Image from "next/image";


export default function Home() {
  return (
      <main
        className="flex flex-col items-center justify-center min-h-[calc(100vh-90px)] p-24 max-lg:p-16 max-sm:p-6"
      >
        <div
          className="flex flex-row items-center justify-center w-[800px] max-w-full gap-6 md:gap-12 lg:gap-12 max-md:flex-col max-md:text-center"
        >
          <div>
            <div
              className="bg-gray-400 rounded-full w-[180px] h-[180px] shrink-0 max-sm:w-[150px] max-sm:h-[150px] relative overflow-hidden"
            >
              <Image 
                src="/IMG_1154 - crop (1).png"
                alt="nurlianto-aldi"
                fill
                style={{objectFit: "cover"}}
              />
            </div>
          </div>
          <div
            className="flex flex-col gap-6"
          >
            <h1
              className="text-5xl font-bold m-0 p-0 max-sm:text-4xl"
            >Nurlianto Aldi</h1>
            <p className="m-0 p-0">I am a Front-End Web Developer with a distinctive background in Marketing Management, where I spent over three years driving growth and operational efficiency in startup settings. This transition has armed me with a powerful combination of technical expertise and business insight.</p>
            <p className="m-0 p-0">I build robust applications using React.js, Next.js, TypeScript, and Tailwind CSS. Crucially, my history in business strategy, market analysis, and negotiation translates directly into strong project management, stakeholder communication, and solution-driven problem-solving. I am eager to leverage this unique duality to create user-centric and scalable software that directly supports high-level business goals and accelerates company development.</p>
            <div
              className="flex flex-row gap-8 mt-2 max-md:justify-center"
            >
              <a href="https://github.com/Nurlianto-Aldi" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:github-dark" width={37.5} height={37.5} aria-label="GitHub" /></a>
              <a href="https://www.linkedin.com/in/nurlianto-aldi" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:linkedin" width={37.5} height={37.5} aria-label="LinkedIn" /></a>
              <a href="https://www.instagram.com/nurlianto_aldi/" target="_blank" rel="noopener noreferrer"><Icon icon="skill-icons:instagram" width={37.5} height={37.5} aria-label="Instagram" /></a>
            </div>
          </div>
        </div>
      </main>
  );
}
