import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { BookText } from "lucide-react";
import { Contact2 } from "lucide-react";
import BlurFade from "../ui/blurfade";
import { Card } from "../ui/card";


interface HeroCardProps {
  image: string;
  heading: string;
  description: string;
}

function HeroCard({ image, heading, description }: HeroCardProps) {
  return (
    <BlurFade duration={1} amount={0.5}>
      <Card className="py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-8 lg:px-12">
          <div className="md:w-1/2 lg:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
            <img
              src={image}
              className="rounded-md  shadow-lg"
              alt="hero"
              width={700}
              height={700}
              loading="eager"
            />
          </div>

          <div className="md:w-1/2 lg:w-2/3 flex flex-col items-center md:items-start text-center md:text-left md:pl-8 lg:pl-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              {heading}
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
              <Link to="/about" className="w-full md:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full md:w-auto flex items-center gap-3"
                >
                  <BookText size={24} />
                  About Us
                </Button>
              </Link>
              <Link to="/contact" className="w-full md:w-auto">
                <Button
                  size="lg"
                  className="w-full md:w-auto flex items-center gap-3"
                >
                  <Contact2 size={24} />
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </BlurFade>
  );
}

export default HeroCard;
