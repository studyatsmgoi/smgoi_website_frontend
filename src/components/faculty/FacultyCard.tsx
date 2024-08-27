import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface FacultyCardProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

function FacultyCard({ image, name, role, description }: FacultyCardProps) {
  return (
    <Card>
      <CardHeader className="flex justify-center items-center">
        <Avatar className="h-52 w-52">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <CardTitle>{name}</CardTitle>
        <Badge variant="outline" className="mt-4">
          {role}
        </Badge>
      </CardHeader>

      <CardContent className=" flex justify-center items-center">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export default FacultyCard;
