import { Request, Response } from 'express';
import { createBook, getBook, getBooks, updateBook } from './services';
import Book from './book';

export const create = async (req: Request, res: Response<Book>) => {
  const { authors, name, price } = req.body as Book;
  const book = await createBook({ authors, name, price });
  res.status(201).json(book);
}

export const getAll = async (_req: Request, res: Response<Book[]>) => {
  const book = await getBooks();
  res.status(201).json(book);
}

export const getOne = async (req: Request, res: Response<Book | string>) => {
  const { id } = req.params;
  const book = await getBook(id);
  book ? res.json(book) : res.status(404).json('Book not found');
}

export const update = async (req: Request, res: Response<Book | string>) => {
  const { id } = req.params;
  const { authors, name, price } = req.body as Book;

  const book = await updateBook({ id, authors, name, price });
  book ? res.json(book) : res.status(404).json('Book not found');
}