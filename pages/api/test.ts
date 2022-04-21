import { prisma } from "../../lib/prisma";

export default async function handler(req, res) {
  const { isbn, title, author, description, language, publishedDate } =
    req.body;
  try {
    await prisma.book.create({
      data: {
        isbn,
        title,
        author,
        publishedDate,
        description,
        language,
      },
    });
    res.status(200).json({ message: "Endpoint Success" });
  } catch (err) {
    res.status(400).json({ message: `bing bong your request is wrong ${err}` });
  }
}
