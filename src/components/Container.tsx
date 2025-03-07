import { cn } from "@app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto mt-24 mb-32 px-12 md:px-24 lg:px-32",
        className,
      )}
    >
      {children}
    </div>
  );
};
