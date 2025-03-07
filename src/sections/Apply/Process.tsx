import { SanityBlock } from "@app/components";

interface ProcessSectionProps {
  title: string;
  timeline: {
    date: string;
    title: string;
    description: any[];
  }[];
}

export function Process({ title, timeline }: ProcessSectionProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="mt-8 space-y-8">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-6 border-l-2" style={{ borderColor: '#f97316' }}>
            <div className="absolute -left-[9px] top-0">
              <div className="w-4 h-4 bg-orange-500 rounded-full" />
            </div>
            <div className="mb-2">
              <span className="font-medium"
              style={{
                fontWeight: 'bold',
              }}
              >{item.date}</span>
              <span className="500 mx-2"
              style={{
                color: '#f97316',
              }}
              >—</span>
              <span className="font-medium"
              style={{
                fontWeight: 'bold',
              }}
              >{item.title}</span>
            </div>
            <div className="prose max-w-none">
              <SanityBlock blocks={item.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}