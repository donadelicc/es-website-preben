import React from "react";

interface FullWidthContainerProps {
  children: React.ReactNode;
  bgColor?: string;
}

export const FullWidthContainer = ({
  children,
  bgColor = "bg-white",
}: FullWidthContainerProps) => {
  return (
    <div className={`w-full ${bgColor}`}>
      <div className="w-full px-4 sm:px-6 md:px-8">{children}</div>
    </div>
  );
};
