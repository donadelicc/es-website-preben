'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'first-step', title: 'Første steg' },
  { id: 'application-process', title: 'Søknadsprosessen' },
  { id: 'application-content', title: 'Søknadens innhold' },
  { id: 'what-you-need', title: 'Slik søker du' },
  { id: 'faq', title: 'FAQ' },
  { id: 'questions', title: 'Noe uklart?' },
];

export function NavigationSidebar() {
  const [activeSection, setActiveSection] = useState('first-step');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 top-1/4 ml-8 hidden lg:block">
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="flex items-center">
            <div
              className={`w-1 h-8 mr-4 rounded ${
                activeSection === section.id ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            />
            <Link
              href={`#${section.id}`}
              className={`text-sm hover:text-orange-500 transition-colors ${
                activeSection === section.id
                  ? 'text-orange-500 font-medium'
                  : 'text-gray-600'
              }`}
            >
              {section.title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
