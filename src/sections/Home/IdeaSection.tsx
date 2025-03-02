"use client";

import { Button, Title, H6 } from "@app/components";
import { HomePage } from "@app/types";

interface IdeaSectionProps {
  content: HomePage;
}

const splitTextIntoSentences = (text: string) => {
  return (
    text
      .match(/[^.!?]+[.!?]/g) // Match sentences ending with punctuation
      ?.map((sentence: string) => sentence.trim()) || []
  );
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
    <section className="my-12 w-full md:w-11/12 mx-auto mt-24">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2 relative">
          <div className="sticky top-24 flex flex-col">
            <Title>{content.contact.title}</Title>
            {splitTextIntoSentences(content.contact.description).map(
              (sentence, index) => (
                <H6 key={index} className="mt-2">
                  {sentence}
                </H6>
              ),
            )}
          </div>
          <div className="flex justify-center mt-8 relative hidden md:flex">
            <svg
              width="200"
              height="150"
              viewBox="0 0 80 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#FF5F15] absolute"
              style={{ bottom: "-200px" }}
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

        <form
          className="w-full md:w-1/3 flex flex-col gap-4 p-6 border border-gray-200 rounded-xl shadow-lg bg-white"
          action="mailto:besart.olluri@ntnu.no"
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
                  className={`w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-field`}
                  rows={4}
                  required
                />
              ) : (
                <input
                  type={type}
                  id={name}
                  name={name}
                  className={`w-full md:w-3/4 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent input-field`}
                  required
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="mt-2 mx-auto px-8 py-4"
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
