import { TypographyProps } from "@app/types";

const H4 = ({ children, className }: TypographyProps) => (
  <h4 className={`text-xl ${className}`}>{children}</h4>
);

export { H4 };
