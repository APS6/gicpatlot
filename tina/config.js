import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.HEAD ||
  "master";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "staff",
        label: "Staff",
        path: "src/content/staff",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "designation",
            label: "Designation",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "src/content/gallery",
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
        ],
      },
      {
        name: "documents",
        label: "Documents",
        path: "src/content/documents",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Name",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
        ],
      },
    ],
  },
});
