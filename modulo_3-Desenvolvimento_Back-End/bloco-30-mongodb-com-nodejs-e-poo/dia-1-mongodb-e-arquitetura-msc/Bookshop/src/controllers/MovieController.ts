import { Request, Response } from 'express';
import MovieService from '../services/MovieService';

class MovieController {
  constructor(private movieService = new MovieService()) { }

  notFound = 'Movie not found';

  internalError = 'Internal server error';

  public getMovies = async (req: Request, res: Response): Promise<Response> => {
    try {
      const movies = await this.movieService.getMovies();

      return res.status(200).send(movies);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  // public create = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const book = await this.bookService.createBook(req.body);
  //     return res.status(201).send(book);
  //   } catch (err: unknown) {
  //     return res.status(500).send({ message: this.notFound });
  //   }
  // };

  // public getBook = async (req: Request, res: Response): Promise<Response> => {
  //   try {
  //     const { id } = req.params;
  //     const book = await this.bookService.getBook(id);
  //     if (book) {
  //       return res.status(200).send(book);
  //     }
  //     return res.status(404).send({ message: this.notFound });
  //   } catch (err: unknown) {
  //     return res.status(500).send({ message: this.internalError });
  //   }
  // };

  // public updateBook = async (req: Request, res: Response):
  //   Promise<Response> => {
  //   try {
  //     const { id } = req.params;
  //     const book = await this.bookService.updateBook(id, req.body);
  //     if (book) {
  //       return res.status(200).send(book);
  //     }
  //     return res.status(404).send({ message: this.notFound });
  //   } catch (err: unknown) {
  //     return res.status(500).send({ message: this.internalError });
  //   }
  // };

  // public deleteBook = async (req: Request, res: Response):
  //   Promise<Response> => {
  //   try {
  //     const { id } = req.params;
  //     const book = await this.bookService.deleteBook(id);
  //     if (book) {
  //       return res.status(200).send(book);
  //     }
  //     return res.status(404).send({ message: this.notFound });
  //   } catch (err: unknown) {
  //     return res.status(500).send({ message: this.internalError });
  //   }
  // };
}

export default MovieController;