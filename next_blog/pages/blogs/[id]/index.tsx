import { Blog } from "@/model";
import React from "react";
import { blogData } from "@/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppState } from "@/context/index";

interface Props {
  blog: Blog;
}

const Blog: React.FC = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);

  const { state, dispatch } = useAppState();
  const filtered = state.filter((blog) => blog.id.toString() === id.toString());
  let blog: Blog = [];
  if (filtered) {
    blog = filtered[0];
  }

  return (
    <div className="text-black  h-screen w-full flex flex-col py-16 px-16">
      <Link href="/">
        <span className="text-2xl">&larr;</span>
      </Link>
      <h1 className="text-2xl font-bold mb-4 mt-8">{blog.title}</h1>
      <span className="font-light ">{blog.author}</span>
      <span className="font-light text-sm mb-8">{blog.publishDate}</span>
      <p dangerouslySetInnerHTML={{ __html: blog.content }}></p>
    </div>
  );
};

//export const getStaticProps: GetStaticProps = async (context) => {
//  const id = context.params.id;
//  const blog = blogData.filter((blog) => blog.id.toString() === id.toString());

//  return {
//    props: {
//      blog: blog[0],
//    },
//  };
//};

//export const getStaticPaths: GetStaticPaths = async () => {
//  const ids = blogData.map((blog) => blog.id);
//  const paths = ids.map((id) => ({
//    params: {
//      id: id.toString(),
//    },
//  }));

//  return {
//    paths,
//    fallback: false,
//  };
//};

export default Blog;
