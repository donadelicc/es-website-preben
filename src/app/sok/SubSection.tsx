import { SanityBlock } from "@app/components";

interface SubSectionProps {
    title: string;
    content: any[];  // Using any[] for SanityBlock type for simplicity here
  }
  
  export function SubSection({ title, content }: SubSectionProps) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="prose max-w-none">
          <SanityBlock blocks={content} />
        </div>
      </div>
    );
  }