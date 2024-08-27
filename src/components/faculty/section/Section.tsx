import BlurFade from "@/components/ui/blurfade";
import HeadingComponent from "../heading/heading-component";

function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" py-8 md:py-16 px-4 md:px-8 lg:px-16" id={id}>
      <HeadingComponent>{title}</HeadingComponent>

      <div>
        <BlurFade duration={1} amount={0.5}>
          <p className="m-8">{description}</p>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Section;
