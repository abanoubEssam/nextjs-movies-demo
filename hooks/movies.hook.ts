import { useEffect, useState } from 'react';
import { findAllMovies } from '../api/movies.api';
import { NetworkError } from '../models/errors.model';
import { Movie } from '../models/movie.model';
import { Page } from '../models/page.model';

const useMovies = (page:number) => {
    const [data, setData] = useState<Movie[]>()
    const [loading, setLoading] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [error, setError] = useState<NetworkError>()

    const mapError = (apiError) => {
        if (!apiError.response) {
            return new NetworkError();
        } 
    }

    
    const _findMovies = async () => {
        setLoading(true)
        setError(null);
        try {
            const pageResult:Page<Movie> = await findAllMovies(page);
            setData(pageResult.results)
            setSuccess(true)
            setLoading(false)
        } catch (error) {
            setSuccess(false)
            setError(mapError(error));
            setLoading(false)
        }
    }


    useEffect(() => {
       _findMovies() ;
    }, [page])

    return {
        data:data || [],
        loading,
        success,
        error
    }
}

export default useMovies;