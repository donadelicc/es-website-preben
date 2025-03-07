const programStructure = {
  name: "programStructure",
  title: "Program Structure",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "intro",
      title: "Introduction",
      type: "text",
    },
    {
      name: "readMoreLink",
      title: "Read More Link",
      type: "url",
    },
    {
      name: "semesters",
      title: "Semesters",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "topic",
              title: "Topic",
              type: "string",
            },
            {
              name: "courses",
              title: "Courses",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "courseCode",
                      title: "Course Code",
                      type: "string",
                    },
                    {
                      name: "title",
                      title: "Title",
                      type: "string",
                    },
                    {
                      name: "credits",
                      title: "Credits",
                      type: "string",
                    },
                    {
                      name: "url",
                      title: "URL",
                      type: "url",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "bostonInfo",
      title: "Boston Information",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "topic",
          title: "Topic",
          type: "string",
        },
        {
          name: "text",
          title: "Text",
          type: "text",
        },
        {
          name: "url",
          title: "URL",
          type: "url",
        },
      ],
    },

    {
      name: "programProgression",
      title: "Program Progression",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "section",
          title: "Section",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "text",
                  title: "Text",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default programStructure;
