import React from "react";

interface FullWidthContainerProps {
  children: React.ReactNode;
  bgColor: string;
}

export const FullWidthContainer = ({
  children,
  bgColor,
}: FullWidthContainerProps) => {
  return (
    <div
      className={`w-screen ${bgColor} relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">{children}</div>
    </div>
  );
};
