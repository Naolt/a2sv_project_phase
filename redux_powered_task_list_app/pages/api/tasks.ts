// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { tasks } from "@/data";
import type { NextApiRequest, NextApiResponse } from "next";
//import { nanoid } from "reduxjs/toolkit";
let data = tasks;

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    // add todo
    data.push({
      title: req.body.title,
      completed: req.body.completed,
      id: new Date().toISOString(),
    });
    console.log(req.body, data);
    res.status(200).json({ message: "Added" });
  } else if (req.method === "PATCH") {
    // update todo
    data.forEach((task) => {
      if (task.id == req.body.id) {
        task.title = req.body.title;
        task.completed = req.body.completed;
      }
    });
    res.status(200).json({ message: "Patch" });
  } else if (req.method === "DELETE") {
    // delete todo
    data = data.filter((task) => task.id !== req.body.id);

    res.status(200).json({ message: "Delete" });
  }
  res.status(200).json({ message: "Hello" });
}
