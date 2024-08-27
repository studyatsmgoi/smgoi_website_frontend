import Typewriter from "../ui/typewriter";
import BlurFade from "../ui/blurfade";
import { Button } from "../ui/button";
import { Globe } from "lucide-react";
import { Contact } from "lucide-react";
interface DeveloperHeroCardProps {
  name: string;
  role: string;
  image: string;
  about: string;
}

function DeveloperHeroCard({
  name,
  role,
  image,
  about,
}: DeveloperHeroCardProps) {
  return (
    <div className="relative z-0 flex justify-center items-center min-h-screen overflow-hidden">
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 space-y-12 md:space-y-0 md:space-x-16 max-w-7xl mx-auto z-0">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <BlurFade duration={1} amount={0.5}>
            <div className="flex-shrink-0">
              <img
                src={image}
                alt={`${name} Profile Picture`}
                className="rounded-full bg-black dark:bg-white object-cover max-w-full h-auto"
              />
            </div>
          </BlurFade>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <BlurFade duration={1} amount={0.5}>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4">
              Hi, I am {name} 👋
            </h2>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4 min-h-[2.5em] whitespace-nowrap">
              <Typewriter text={role} delay={100} infinite={true} />
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">{about}</p>
            {/* <div className="mt-4">
                <Button variant="secondary" size="lg" className="m-2 gap-4"><ContactIcon />Get in touch</Button>
                <Button  size="lg" className="m-2 gap-4"><DownloadIcon />Download Resume</Button>
              </div> */}

            <div className="mt-4">
              <a
                href="https://beamitpal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-4">
                  <Globe className="h-5 w-5" />
                  Visit My Website
                </Button>
              </a>
              <a
                href="https://beamitpal.com#contact"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className=" m-2 gap-4">
                  <Contact className="h-5 w-5" />
                  Contact Me
                </Button>
              </a>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  );
}

export default DeveloperHeroCard;
