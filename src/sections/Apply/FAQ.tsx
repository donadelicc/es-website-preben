import { SanityBlock } from "@app/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@app/components/Accordion";

interface FAQSectionProps {
  faqs: {
    title: string;
    content: any[]; // or Block[] if you import the Block type
  }[];
}

export function FAQ({ faqs }: FAQSectionProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.title}
            </AccordionTrigger>
            <AccordionContent>
              <SanityBlock blocks={faq.content} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}