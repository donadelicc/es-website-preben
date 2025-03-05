const apply = {
  name: "apply",
  title: "Apply",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subsections",
      title: "Subsections",
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
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
    {
      name: "FAQ",
      title: "FAQ",
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
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
          },
          ],
        },
      ],
    },
  ],
};

export default apply;
