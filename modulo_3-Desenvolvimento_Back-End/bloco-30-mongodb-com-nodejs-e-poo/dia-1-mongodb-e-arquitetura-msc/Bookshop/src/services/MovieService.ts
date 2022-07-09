import MovieModel from '../models/MoviesModel';
import { IMovie } from '../schemas/MovieSchema';

class MovieService {
  constructor(private movieModel = new MovieModel()) { }

  public async getMovies(): Promise<IMovie[]> {
    const movies = await this.movieModel.getMovies();
    return movies;
  }

  // public async createBook(bookData: object): Promise<IBook> {
  //   const book = await this.movieModel.createBook(bookData);
  //   return book;
  // }

  // public async getBook(id: string): Promise<IBook | null> {
  //   const data = await this.movieModel.getBook(id);
  //   return data;
  // }

  // public async updateBook(id: string, bookData: object): Promise<IBook | null> {
  //   const data = await this.movieModel.editBook(id, bookData);
  //   return data;
  // }

  // public async deleteBook(id: string): Promise<IBook | null> {
  //   const data = await this.movieModel.deleteBook(id);
  //   return data;
  // }
}

export default MovieService;