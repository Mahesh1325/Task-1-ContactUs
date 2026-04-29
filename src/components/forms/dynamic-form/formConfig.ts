import { FormConfig } from "../dynamic-form/formTypes";

export const formConfig: FormConfig = [
  {
    type: "text",
    name: "name",
    label: "Name",
  },
  {
    type: "text",
    name: "email",
    label: "Email",
  },
  {
    type: "textarea",
    name: "bio",
    label: "Bio",
  },
  {
    type: "select",
    name: "city",
    label: "City",
    options: ["Chennai", "Bangalore", "Delhi"],
  },
  {
    type: "drag",
    name: "file",
    label: "Upload File",
  },
  {
    type: "select",
    name: "tags",
    label: "Skills",
    options: ["C", "Java", "Python", "JS"],
  },
  {
    type: "date",
    name: "dob",
    label: "Date of Birth",
  },
  {
    type: "time",
    name: "time",
    label: "Time",
  },
];

