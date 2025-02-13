import { H6 } from "@app/components";
import Link from "next/link";
import { NSE_MAIL_URL, NSE_PHONE_URL } from "@app/constants";

const ContactInformation = () => {
  return (
    <div className="flex flex-col sm:justify-center md:justify-start items-center flex-1">
      <div className="flex flex-row md:w-full sm:justify-start">
        <H6 className="text-primary-foreground">Phone</H6>
        <Link href={NSE_PHONE_URL} passHref>
          <H6 className="text-primary-foreground font-semibold ml-4">
            +47 73 59 36 09
          </H6>
        </Link>
      </div>
      <div className="flex flex-row sm:w-3/5 md:w-full">
        <H6 className="text-primary-foreground">E-mail</H6>
        <Link href={NSE_MAIL_URL} passHref>
          <H6 className="text-primary-foreground font-semibold ml-4">
            es.rekruttering@iot.ntnu.no
          </H6>
        </Link>
      </div>
    </div>
  );
};

export { ContactInformation };
