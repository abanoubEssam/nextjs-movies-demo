import React from 'react'
import { findAllMovies } from '../api/movies.api';
import MoviesGrid from '../components/movies-grid/MoviesGrid';
import MoviesHOC from '../hoc/movies.hoc';
import { Movie } from '../models/movie.model';
import { Page } from '../models/page.model';

interface Props {
    movies: Page<Movie>
}

const MoviesPage: React.FC<Props> = ({ movies }) => <MoviesHOC movies={movies} />


export async function getServerSideProps() {
    const page: Page<Movie> = await findAllMovies()
    return { props: { movies: page } }
}

export default MoviesPage;