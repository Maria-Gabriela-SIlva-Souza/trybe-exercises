import { Request, Response, NextFunction } from 'express';
import Book from './book';

export const validateBody = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<string> | void> => {
  const { authors, name, price } = req.body as Book;
  if(!authors || !name || !price) {
    return res.status(400).send("Name, authors and price are required fields");
  }
  next();
}