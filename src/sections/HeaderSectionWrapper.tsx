import { useMediaQuery } from "@app/hooks";

export interface WrapperProps {
  children: React.ReactNode;
  minHeight?: number;
}

const HeaderSectionWrapper = ({ children, minHeight }: WrapperProps) => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const height = isMobile ? "auto" : minHeight ?? 400;

  return (
    <section
      className="py-6 relative flex justify-center"
    >
      {children}
    </section>
  );
};

export { HeaderSectionWrapper };
