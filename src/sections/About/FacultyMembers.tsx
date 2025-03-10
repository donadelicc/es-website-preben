import { FacultyMember } from "@app/types";
import { H2, SanityBlock, H4 } from "@app/components";
import Image from "next/image";
import { urlForProfileImage } from "@app/config";

interface FacultyMembersProps {
  facultyMembers: FacultyMember[];
}

const facultyOrder = [
  "Dr. Roger Sørheim",
  "Dr. Øystein Widding",
  "Dr. Lise Aaboen",
  "Dr. Torgeir Aadland",
  "Dr. Dag Håkon Haneberg",
  "Ingrid (Oline) Berg Sivertsen",
  "Besart 'Bess' Olluri",
];

export const FacultyMembers = ({ facultyMembers }: FacultyMembersProps) => {
  // Sort faculty members according to the predefined order
  const sortedFacultyMembers = [...facultyMembers].sort((a, b) => {
    const indexA = facultyOrder.indexOf(a.name);
    const indexB = facultyOrder.indexOf(b.name);

    // If both names are in the order array, use their indices
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If one name is not in the order array, put it last
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    // If neither name is in the order array, sort alphabetically
    return a.name.localeCompare(b.name);
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 bg-gray-50">
      <H2 className="mb-16 text-center">Fagstaben</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        {sortedFacultyMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-xl mx-auto"
          >
            {member.image && (
              <div className="relative w-48 h-48 mb-6">
                <Image
                  src={urlForProfileImage(member.image)}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full grayscale border-2 border-gray-200"
                />
              </div>
            )}
            <div className="space-y-4">
              <div>
                <H4 className="text-2xl">{member.name}</H4>
                <p className="text-lg text-primary-600 mt-1">{member.title}</p>
              </div>
              <div className="prose prose-sm max-w-prose text-left text-gray-600 [&>p]:mb-4 last:[&>p]:mb-0">
                <SanityBlock blocks={member.bio} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
