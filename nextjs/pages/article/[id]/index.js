import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "@/config";

const Article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1
        className="text-2xl font-bold mb-4
	  "
      >
        {article.title}
      </h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const article = await res.json();

  const ids = article.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

//export const getStaticProps = async (context) => {
//  const res = await fetch(
//    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//  );

//  const article = await res.json();

//  return {
//    props: {
//      article,
//    },
//  };
//};

//export const getStaticPaths = async () => {
//  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//  const article = await res.json();

//  const ids = article.map((article) => article.id);

//  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//  return {
//    paths,
//    fallback: false,
//  };
//};

export default Article;
