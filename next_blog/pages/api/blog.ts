// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const formData = req.body;
  const title = formData.title;
  const author = formData.author;
  const excerpt = formData.excerpt;
  const content = formData.content;

  // Do something with the variables...

  console.log("Received form data:", typeof formData);

  res.status(200).json({ name: "reached here" });
}
