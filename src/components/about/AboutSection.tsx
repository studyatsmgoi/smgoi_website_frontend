import BlurFade from "../ui/blurfade";
import AboutHeadingComponent from "./AboutHeadingComponent";

function AboutSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" py-8 md:py-16 px-4 md:px-8 lg:px-16" id={id}>
      <BlurFade duration={1} amount={0.5}>
        <AboutHeadingComponent>{title}</AboutHeadingComponent>
      </BlurFade>
      <div>{children}</div>
    </div>
  );
}

export default AboutSection;
