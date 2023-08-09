import Link from "next/link";
import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <div className="p-3 bg-slate-200 text-blue-900 ">
      <Link
        href={"/article/[id]"}
        as={`/article/${article.id}`}
        className="flex flex-col gap-2 "
      >
        <h3
          className="font-bold
		"
        >
          {article.title} &rarr;
        </h3>
        <p>{article.body}</p>
      </Link>
    </div>
  );
};

export default ArticleItem;
