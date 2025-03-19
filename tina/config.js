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
        ui: {
          filename: {
            readonly: true,
            slugify: () => {
              const timestamp = new Date().getTime();
              return `gallery-${timestamp}`;
            },
          },
        },
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
      {
        name: "results",
        label: "Exam Results",
        path: "src/content/results",
        fields: [
          {
            type: "string",
            name: "year",
            label: "Year",
            isTitle: true,
            required: true,
          },
          {
            type: "number",
            name: "class12PassPercentage",
            label: "Class 12 Pass Percentage",
            required: true,
          },
          {
            type: "number",
            name: "class10PassPercentage",
            label: "Class 10 Pass Percentage",
            required: true,
          },
          {
            type: "object",
            name: "interResults",
            label: "Intermediate (Class 12) Results",
            fields: [
              {
                type: "object",
                name: "topFiveStudents",
                label: "Top 5 Students Overall",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Student Name",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "percentage",
                    label: "Percentage",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "toppersBySubject",
                label: "Subject Toppers",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.subject };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "subject",
                    label: "Subject",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "studentName",
                    label: "Student Name",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "percentage",
                    label: "Percentage",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "highSchoolResults",
            label: "High School (Class 10) Results",
            fields: [
              {
                type: "object",
                name: "topFiveStudents",
                label: "Top 5 Students Overall",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.name };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Student Name",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "percentage",
                    label: "Percentage",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "toppersBySubject",
                label: "Subject Toppers",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.subject };
                  },
                },
                fields: [
                  {
                    type: "string",
                    name: "subject",
                    label: "Subject",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "studentName",
                    label: "Student Name",
                    required: true,
                  },
                  {
                    type: "number",
                    name: "percentage",
                    label: "Percentage",
                    required: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
