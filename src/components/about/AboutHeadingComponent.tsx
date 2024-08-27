import React from "react";
import { Separator } from "@/components/ui/separator";

function AboutHeadingComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="border rounded-full p-2">
        <h2 className="text-xl font-bold text-center md:text-5xl lg:text-6xl mx-4 md:mx-1 m-1">
          {children}
        </h2>
      </div>
      <Separator className="hidden md:flex flex-grow max-w-full w-1/3 md:w-auto mb-4 md:mb-0" />
    </div>
  );
}

export default AboutHeadingComponent;
