export const BlogHighlights = {
  label: "Blog Highlights",
  name: "bloghighlights",
  type: "object",
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Recent Blogs",
      name: "recentblogs",
      type: "object",
      list: true,
      fields: [
        {
          label: "blogs",
          name: "blogs",
          type: "reference",
          collections: ["blogs"],
        },
      ],
    },
  ],
};
