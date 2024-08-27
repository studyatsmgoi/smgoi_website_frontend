import BlurFade from "../ui/blurfade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TechItem {
  name: string;
  imgSrc: string;
  altText: string;
}

interface TechStackProps {
  techItems: TechItem[];
}

function TechStack({ techItems }: TechStackProps) {
  return (
    <BlurFade duration={1} amount={0.5}>
      <Card>
        <CardHeader>
          <CardTitle>Tech Stack 🛠️</CardTitle>
          <CardDescription>
            Here are some of the technologies I work with:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4"></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {techItems.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
              >
                <img src={tech.imgSrc} alt={tech.altText} className="h-8 w-8" />
                <span className="ml-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}

export default TechStack;
