import DeveloperHeroCard from "./DeveloperHeroCard";
import ProfilePic from "@/assets/developer/profile.webp";
import TechStack from "./TechStack";

function MainDeveloper() {
  const techItems = [
    {
      name: "React",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      altText: "React",
    },
    {
      name: "Next.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      altText: "Next.js",
    },
    {
      name: "TypeScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      altText: "TypeScript",
    },
    {
      name: "Tailwind CSS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      altText: "Tailwind CSS",
    },
    {
      name: "Node.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      altText: "Node.js",
    }
  ];
  return (
    <>
      <DeveloperHeroCard
        name="Amit"
        role="Full Stack Web Developer"
        image={ProfilePic}
        about="I'm Amit, a full stack web developer from New Delhi. I specialize in building responsive, user-friendly websites using technologies like React, Vite, and Tailwind CSS. My focus is on creating seamless, functional solutions for both frontend and backend. Let's connect if you're interested in collaborating or discussing tech!"
      />
      <TechStack techItems={techItems} />
    </>
  );
}

export default MainDeveloper;
