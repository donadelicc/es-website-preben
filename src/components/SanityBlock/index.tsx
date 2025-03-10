import { Block } from "@app/types";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { PRIMARY_GRAY } from "@app/constants";

interface SanityBlockProps {
  blocks: Block[];
  customComponents?: Partial<PortableTextReactComponents>;
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    h1: (props: any) => (
      <h1 className="text-2xl font-bold text-accent mt-4">{props.children}</h1>
    ),
    h2: (props: any) => (
      <h2 className="text-2xl font-bold text-accent mt-4">{props.children}</h2>
    ),
    h3: (props: any) => (
      <h3 className="text-2xl font-bold text-accent mt-4">{props.children}</h3>
    ),
    normal: (props: any) => <p className="mt-2"
    style={{ color: PRIMARY_GRAY }}
    >{props.children}</p>,
  },
  listItem: (props: any) => (
    <li className="list-disc list-inside">{props.children}</li>
  ),
  list: (props: any) => (
    <ul className="list-disc list-inside ml-4">{props.children}</ul>
  ),
  marks: {
    strong: (props: any) => (
      <strong className="font-bold">{props.children}</strong>
    ),
    em: (props: any) => <em className="italic">{props.children}</em>,
    link: ({ value, children }: any) => {
      return (
        <a href={value?.href} target={"_blank"} className="underline">
          {children}
        </a>
      );
    },
  },
};

const SanityBlock = ({ blocks, customComponents }: SanityBlockProps) => {
  return (
    <PortableText
      value={blocks}
      components={{ ...components, ...customComponents }}
    />
  );
};

export { SanityBlock };
