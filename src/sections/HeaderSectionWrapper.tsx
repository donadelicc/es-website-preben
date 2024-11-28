export interface WrapperProps {
  children: React.ReactNode;
  //todo remove
  minHeight?: number;
}

const HeaderSectionWrapper = ({ children }: WrapperProps) => {
  return (
    <section className="py-6 relative flex justify-center">{children}</section>
  );
};

export { HeaderSectionWrapper };
