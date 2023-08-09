import CustomInput from "@/components/CustomInput";
import Label from "@/components/Label";
import React, { useState } from "react";
import { server } from "@/config";
import { useAppState } from "@/context/index";
import { useRouter } from "next/router";
import { Blog } from "@/model";

const Edit: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;

  const { state, dispatch } = useAppState();

  console.log("to be edited", id);
  const filtered = state.filter((blog) => blog.id.toString() === id.toString());
  let blog: Blog;
  if (filtered) {
    blog = filtered[0];
  } else {
    throw new Error("Not found");
  }
  const [form, setForm] = useState({
    id: blog.id,
    title: blog.title,
    excerpt: blog.excerpt,
    author: blog.author,
    content: blog.content,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((s) => {
      return { ...s, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Send a POST request to the "api/hello" URL
    dispatch({
      type: "Edit_Blog",
      payload: { blog: form, id: blog.id },
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
        <CustomInput
          name="title"
          value={form.title}
          id="title"
          onChange={handleChange}
        />
      </div>

      {/* Author */}
      <div className="flex flex-col gap-2">
        <Label name="author" text="Author" />
        <CustomInput
          value={form.author}
          name="author"
          id="author"
          onChange={handleChange}
        />
      </div>

      {/* excerpt */}
      <div className="flex flex-col gap-2">
        <Label name="excerpt" text="Excerpt" />
        <CustomInput
          value={form.excerpt}
          name="excerpt"
          id="excerpt"
          onChange={handleChange}
        />
      </div>

      {/* content */}
      <div className="flex flex-col gap-2">
        <Label name="content" text="Content" />
        <CustomInput
          value={form.content}
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
        Update Blog
      </button>
    </form>
  );
};

export default Edit;
