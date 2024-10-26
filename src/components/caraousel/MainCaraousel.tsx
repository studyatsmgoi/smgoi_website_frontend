import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Director from "@/assets/management/director.webp";
import President from "@/assets/management/president.webp";
import Manager from "@/assets/management/manager.webp";
import SeniorPrincipal from "@/assets/management/principalofseniors.webp";
import JuniorPrincipal from "@/assets/management/principalofjuniors.webp";
import TestimonialCard from "./TestomonialCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import BlurFade from "../ui/blurfade";

function MainCarousel() {
  const testimonials = [
    {
      heading: "What Our Founder Says",
      quotation:
        "In the tapestry of education, a founder weaves the threads of vision, passion, and determination to create a masterpiece called knowledge. At Sankat Mochan Group of Institutions, our founder lights the path for future generations.",
      imageUrl: Director,
      name: "Mr. Surendra Pratap Singh",
      role: "Founder Of Sankat Mochan Group Of Institutions",
    },
    {
      heading: "What Our President Says",
      quotation:
        "As the guiding force at Sankat Mochan Group of Institutions, our president is the architect of innovation and progress. With a vision that transcends boundaries, they lead by example, inspiring a community of learners to reach new heights and embrace the boundless possibilities of education.",
      imageUrl: President,
      name: "Mrs. Aruna Singh",
      role: "President Of Sankat Mochan Group Of Institutions",
    },
    {
      heading: "What Our Manager Says",
      quotation:
        "A manager orchestrates the symphony of learning, ensuring each note of progress resonates through the corridors of Sankat Mochan Group of Institutions. Guiding with wisdom, our manager transforms challenges into opportunities for growth.",
      imageUrl: Manager,
      name: "Mr. Rahul Kumar Maurya",
      role: "Manager Of Sankat Mochan Group Of Institutions",
    },
    {
      heading: "What Our Principal(Senior's Classes) Says",
      quotation:
        "As the captain of our academic ship, the principal steers Sankat Mochan Group of Institutions towards the shores of excellence. With dedication as their compass, they navigate the seas of education, shaping bright minds and promising futures.",
      imageUrl: SeniorPrincipal,
      name: "Mr. Jay Prakash Verma",
      role: "Principal Of Sankat Mochan Group Of Institutions",
    },
    {
      heading: "What Our Principal(Junior's Classes) Says",
      quotation:
        "In the educational journey, the principal stands as the steadfast companion, supporting the founder's vision and fostering an environment where students at Sankat Mochan Group of Institutions can thrive. Together, they chart a course towards educational success.",
      imageUrl: JuniorPrincipal,
      name: "Mrs. Jyoti Singh",
      role: "Principal Of Sankat Mochan Group Of Institutions",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <BlurFade duration={1} amount={0.5}>
          <CardTitle>Testimonials</CardTitle>
          <CardDescription>
            Hear from the leaders who shape the future of Sankat Mochan Group of
            Institutions.
          </CardDescription>
        </BlurFade>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4">
        <Carousel
          opts={{ align: "start" }}
          className="w-full max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  );
}

export default MainCarousel;
