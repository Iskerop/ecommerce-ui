import { request } from "http";
import { prisma } from "../lib/prisma";

export async function handler(req, res) {
  const { search } = req.body;
  try {
    await prisma.book.findMany({
      // where: {
      //   title: {
      //     contains: s,
      //     mode: "insensitive",
      //   },
      // },
    });
    res.status(200).json({ message: req.body });

    return {
      props: {},
    };
  } catch (err) {
    res.status(400).json({ message: `bing bong your request is wrong ${err}` });
  }
}
