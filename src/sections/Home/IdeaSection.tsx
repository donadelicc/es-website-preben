import { Button, Title, H3 } from "@app/components";
import { HomePage } from "@app/types";
import { urlForImage } from "@app/config";
import Image from "next/image";

interface IdeaSectionProps {
  content: HomePage;
}

const splitTextIntoSentences = (text: string) => {
  return text
    .split(".")
    .filter((sentence: string) => sentence.trim().length > 0);
};

const IdeaSection = ({ content }: IdeaSectionProps) => {
  const formFields = [
    { name: "name", type: "text", label: "Name" },
    { name: "email", type: "email", label: "Email" },
    { name: "jobTitle", type: "text", label: "Job Title" },
    { name: "message", type: "textarea", label: "Message" },
  ];

  const inputClasses =
    "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClasses = "block text-gray-700 text-sm font-medium mb-1";

  return (
    <section className="my-12 w-full md:w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2 relative">
          <div className="sticky top-24 flex flex-col">
            <Title>{content.contact.title}</Title>
            {splitTextIntoSentences(content.contact.description).map(
              (sentence, index) => (
                <H3 key={index} className="mt-2">
                  {sentence}
                </H3>
              ),
            )}
            <div className="flex justify-center mt-8 relative">
              <svg
                width="200"
                height="150"
                viewBox="0 0 80 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#FF5F15] absolute"
              >
                <path
                  d="M5 5 Q 40 45 75 25 L 65 35 M 75 25 L 65 15"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>

        <form
          className="md:w-1/2 flex flex-col gap-4 p-8 border border-gray-200 rounded-xl shadow-lg bg-white"
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          {formFields.map(({ name, type, label }) => (
            <div key={name} className="flex flex-col">
              <label className={labelClasses} htmlFor={name}>
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  id={name}
                  name={name}
                  className={inputClasses}
                  rows={4}
                  required
                />
              ) : (
                <input
                  type={type}
                  id={name}
                  name={name}
                  className={inputClasses}
                  required
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="mt-2 mx-auto px-12 py-6"
            style={{
              backgroundColor: "#f97316",
              color: "#ffffff",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export { IdeaSection };
