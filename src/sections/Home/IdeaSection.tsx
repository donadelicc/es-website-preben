import { Button, Title, H3 } from "@app/components";
import { HomePage} from "@app/types";
import { urlForImage } from "@app/config";

interface IdeaSectionProps {
    content: HomePage;
}

const IdeaSection = ({ content }: IdeaSectionProps) => {
  const formFields = [
    { id: 'name', type: 'text', label: 'Name' },
    { id: 'email', type: 'email', label: 'Email' },
    { id: 'jobTitle', type: 'text', label: 'Job Title' },
    { id: 'message', type: 'textarea', label: 'Message', rows: 4 },
  ];

  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const labelClasses = "block text-gray-700 text-sm font-medium mb-1";

  return (
    <section className="my-12 w-10/12 md:w-4/5 mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2">
          <div className="sticky top-24 flex flex-col">
            <Title>{content.contact.title}</Title>
            <H3 className="mt-4">{content.contact.description}</H3>
            {content.contact.image && (
              <img
                src={urlForImage(content.contact.image)}
                alt="Contact section image"
                className="mt-8 rounded-lg w-3/4 object-cover mx-auto block"
              />
            )}
          </div>
        </div>
        
        <form
          className="md:w-1/2 flex flex-col gap-4 p-8 border border-gray-200 rounded-xl shadow-lg bg-white"
          action="mailto:your-email@example.com"
          method="post"
          encType="text/plain"
        >
          {formFields.map(({ id, type, label, rows }) => (
            <div key={id} className="flex flex-col">
              <label className={labelClasses} htmlFor={id}>
                {label}
              </label>
              {type === 'textarea' ? (
                <textarea
                  id={id}
                  name={id}
                  className={inputClasses}
                  rows={rows}
                  required
                />
              ) : (
                <input
                  type={type}
                  id={id}
                  name={id}
                  className={inputClasses}
                  required
                />
              )}
            </div>
          ))}
          
          <Button type="submit" className="mt-2 mx-auto px-8">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export { IdeaSection };