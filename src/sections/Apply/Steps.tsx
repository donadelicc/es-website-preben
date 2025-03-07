interface StepsSectionProps {
    title: string;
    steps: {
      title: string;
      text: string;
    }[];
    outroText: {
      title: string;
      text: string;
      url: string;
    }[];
  }
  
  export function Steps({ title, steps, outroText }: StepsSectionProps) {
    return (
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
  
        <div className="mt-8 space-y-4">
          {outroText.map((item, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.text}</p>
              <a 
                href={item.url}
                className="font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#f97316',
                }}
              >
                Les mer
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }