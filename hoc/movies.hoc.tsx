import React, { useEffect, useState } from 'react';
import MoviesGrid from '../components/movies-grid/MoviesGrid';
import useMovies from '../hooks/movies.hook';
import { NetworkError } from '../models/errors.model';
import { Movie } from '../models/movie.model';
import { Page } from '../models/page.model';

interface Props {
    movies: Page<Movie>
}

const MoviesHOC: React.FC<Props> = ({ movies }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data, error, loading } = useMovies(currentPage);

    useEffect(() => {
        if (error instanceof NetworkError) {
            alert("Network error") ;
        }
    }, [error]);

    return (
        <div className="container" style={{ marginTop: "50px" , minHeight:"100vh" }}>

            {/** pagination */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <button onClick={() => setCurrentPage((page) => page - 1)} disabled={ currentPage === 1 } style={{ backgroundColor: "transparent" }}><svg style={{ width: "32px", height: "32px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg></button>
                <button onClick={() => setCurrentPage((page) => page + 1)} style={{ backgroundColor: "transparent" }}><svg style={{ width: "32px", height: "32px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
            </div>

            <MoviesGrid movies={data} loading={loading} />
        </div>
    );
}

export default MoviesHOC;