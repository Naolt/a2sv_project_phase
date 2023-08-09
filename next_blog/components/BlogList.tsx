import { Blog } from "@/model";
import React from "react";
import SingleBlog from "./SingleBlog";

interface Props {
  blogs: Blog[];
}

const BlogList: React.FC<Props> = ({ blogs }) => {
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center">
      <ul className="flex flex-wrap gap-4 w-full px-32 py-8 md:px-3  justify-center">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
