import { Blog } from "@/model";
import React from "react";
import Link from "next/link";
import { useAppState } from "@/context/index";

interface Props {
  blog: Blog;
}

const SingleBlog: React.FC<Props> = ({ blog }) => {
  const { state, dispatch } = useAppState();
  const handleDelete = () => {
    dispatch({
      type: "Delete_Blog",
      payload: blog.id,
    });
  };

  return (
    <div className="relative">
      <Link href={`blogs/${blog.id}`}>
        <div
          key={blog.id}
          className="relative w-96 h-45 bg-slate-300 p-5 hover:bg-blue-400
		rounded  transition-all ease-in-out"
        >
          <h1 className="text-xl font-bold mb-2 hover:underline hover:text-blue-800 transition-all ease-in-out w-10/12">
            {blog.title}
          </h1>
          <p className="text-clip overflow-hidden h-12">{blog.excerpt}</p>
          <div className="flex justify-between mt-5">
            <span className="font-light ">{blog.author}</span>
            <span className="font-light text-sm">{blog.publishDate}</span>
          </div>
        </div>
      </Link>
      <div className="flex absolute right-2 top-0 items-center">
        <Link href={`blogs/edit/${blog.id}`}>
          <span className="w-5 rounded-full cursor-pointer  p-2 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </span>
        </Link>

        <span
          onClick={() => handleDelete()}
          className="rounded-full hover:bg-neutral-200 p-2 transition-all cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SingleBlog;
