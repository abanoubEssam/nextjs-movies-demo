import axios from 'axios';
import { Movie } from '../models/movie.model';
import { Page } from '../models/page.model';

export async function findAllMovies():Promise<Page<Movie>>{
	const res =  await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=1");
    const page:Page<Movie> = res.data;
	return page;
}
