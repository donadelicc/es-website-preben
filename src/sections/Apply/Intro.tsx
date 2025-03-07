import { SanityBlock } from "@app/components";

interface IntroSectionProps {
  title: string;
  content: any[]; // or Block[] if you import the Block type
}

export function Intro({ title, content }: IntroSectionProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="prose max-w-none">
        <SanityBlock blocks={content} />
      </div>
    </div>
  );
}