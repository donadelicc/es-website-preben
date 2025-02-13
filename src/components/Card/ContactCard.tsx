import Image from "next/image";
import { H1 } from "@app/components";
import Link from "next/link";
import { IconMail, IconPhone } from "@tabler/icons-react";

interface ContactCardProps {
  imageUri: string;
  name: string;
  position: string;
  email: string;
  phone: string;
}

const ContactCard = ({
  imageUri,
  name,
  position,
  email,
  phone,
}: ContactCardProps) => {
  return (
    <div className="rounded-lg relative bg-card p-4">
      <div className="flex flex-row items-center justify-start">
        <Image
          src={imageUri}
          alt={`Picture of: ${name}`}
          width={100}
          height={125}
          className="h-[135px]"
        />
        <div className="flex flex-col items-start justify-center ml-4">
          <H1 className="text-card-foreground text-lg md:text-xl">{name}</H1>
          <p className="text-card-foreground">{position}</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center absolute bottom-2 right-2">
        <Link href={`tel:${phone}`} passHref>
          <IconPhone size={30} stroke={1.5} className="text-card-foreground" />
        </Link>
        <Link href={`mailto:${email}`} passHref>
          <IconMail
            size={30}
            stroke={1.5}
            className="text-card-foreground ml-2"
          />
        </Link>
      </div>
    </div>
  );
};

export { ContactCard };
