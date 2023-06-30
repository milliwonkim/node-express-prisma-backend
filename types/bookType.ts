import { Author } from "./authorType";

export type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
};

export type BookRead = {
  id: number;
  title: string;
  datePublished: Date;
  isFiction: boolean;
  author: Author;
  authorId?: number;
};

export type BookWrite = {
  title: string;
  datePublished: Date;
  authorId: number;
  isFiction: boolean;
};
