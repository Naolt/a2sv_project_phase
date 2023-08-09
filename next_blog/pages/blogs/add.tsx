import CustomInput from "@/components/CustomInput";
import Label from "@/components/Label";
import React, { useState } from "react";
import { server } from "@/config";
import { useAppState } from "@/context/index";
import { useRouter } from "next/router";

const Add: React.FC = () => {
  const [form, setForm] = useState({
    id: "",
    title: "",
    author: "",
    excerpt: "",
    content: "",
  });
  const { state, dispatch } = useAppState();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => {
      return { ...s, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Create a new FormData object to store the form data
    const formData = new FormData();

    // Append each form field to the formData object
    for (const [key, value] of Object.entries(state)) {
      formData.append(key, value);
    }

    // Send a POST request to the "api/hello" URL
    dispatch({
      type: "Add_Blog",
      payload: { ...form, id: new Date().toISOString() },
    });
    router.push("/");
  };

  return (
    <form
      className="bg-neutral-200 w-full flex flex-col min-h-96 p-10 gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      {/* title */}
      <div className="flex flex-col gap-2">
        <Label name="title" text="Title" />
        <CustomInput name="title" id="title" onChange={handleChange} />
      </div>

      {/* Author */}
      <div className="flex flex-col gap-2">
        <Label name="author" text="Author" />
        <CustomInput name="author" id="author" onChange={handleChange} />
      </div>

      {/* excerpt */}
      <div className="flex flex-col gap-2">
        <Label name="excerpt" text="Excerpt" />
        <CustomInput name="excerpt" id="excerpt" onChange={handleChange} />
      </div>

      {/* content */}
      <div className="flex flex-col gap-2">
        <Label name="content" text="Content" />
        <CustomInput
          textArea={true}
          name="content"
          id="content"
          onChange={handleChange}
        />
      </div>

      <button
        className="w-full bg-blue-600 px-4 py-2 rounded
       text-white mt-4 hover:scale-95 transition-all ease-out"
      >
        Create Blog
      </button>
    </form>
  );
};

export default Add;
