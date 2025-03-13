import { cn } from "@app/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "container mx-auto mb-24 px-12 md:px-24 lg:px-32",
        className,
      )}
    >
      {children}
    </div>
  );
};
