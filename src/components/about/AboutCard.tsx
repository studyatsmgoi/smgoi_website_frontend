import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import BlurFade from "../ui/blurfade";

interface AboutCardProps {
  image: string;
  name: string;
  role: string;
  about: string;
}

function AboutCard({ image,name,role,about }: AboutCardProps) {
  return (
    <BlurFade duration={1} amount={0.5}>
    <Card>
      <CardHeader className="flex justify-center items-center">
        <Avatar className="h-52 w-52">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <CardDescription>{about}</CardDescription>
      </CardContent>
    </Card>
    </BlurFade>
  );
}

export default AboutCard;
