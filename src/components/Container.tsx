import { cn } from "@app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto mt-24 mb-32 px-8 md:px-16 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};
