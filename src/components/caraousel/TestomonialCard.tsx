import BlurFade from "../ui/blurfade";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface TestimonialCardProps {
  heading: string;
  quotation: string;
  imageUrl: string;
  name: string;
  role: string;
}

function TestimonialCard({
  heading,
  quotation,
  imageUrl,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <BlurFade duration={1} amount={0.5}>
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="p-6 ">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
          {heading}
        </h2>
        <p className="italic text-base  text-center md:text-left">
          "{quotation}"
        </p>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-center p-6">
        <Avatar className="w-16 h-16 md:w-20 md:h-20 rounded-full mb-4 md:mb-0 md:mr-6">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <p className="font-semibold text-lg">{name}</p>
          <p className="text-sm ">{role}</p>
        </div>
      </CardContent>
    </Card>
    </BlurFade>
  );
}

export default TestimonialCard;
