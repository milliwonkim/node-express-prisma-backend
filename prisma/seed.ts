import { GetResult } from "@prisma/client/runtime";
import { db } from "../src/utils/db.server";
import { Book } from "../types/bookType";
import { Author } from "../types/authorType";

const getAuthors = (): Author[] => {
  return [
    { firstName: "John", lastName: "Doe" },
    { firstName: "William", lastName: "Shakespeare" },
    { firstName: "Yuval Noah", lastName: "Harari" },
  ];
};

const getBooks = (): Book[] => {
  return [
    {
      title: "Sapiens",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "Homo Deus",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "The Ugly Duckling",
      isFiction: true,
      datePublished: new Date(),
    },
  ];
};

const seed = async () => {
  await Promise.all(
    getAuthors().map((author) => {
      const { firstName, lastName } = author;
      return db.author.create({
        data: {
          firstName,
          lastName,
        },
      });
    })
  );

  const author = (await db.author.findFirst({
    where: {
      firstName: "Yuval Noah",
    },
  })) as any;

  await Promise.all(
    getBooks().map((book) => {
      const { title, isFiction, datePublished } = book;
      return db.book.create({
        data: {
          title,
          isFiction,
          datePublished,
          authorId: author.id,
        },
      });
    })
  );
};

seed();
