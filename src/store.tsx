import { createStore } from "solid-js/store";

export const get_default_data = () => {
  return {
    "full name": "",
    designation: "",
    phone: "",
    address: "",
    "email address": "",
    "github username": "",
    profile: "",

    education: [
      { institution: "", qualification: "", duration: "" },
    ],

    "work experience": [
      { company: "", position: "", duration: "" },
    ],

    skills: [""],
    interests: [""],
    oss: [{ "project name": "", description: "", languages: "" }],
  };
};

export const [store, setStore] = createStore(get_default_data());
