import React from 'react'
import { Card } from 'react-bootstrap';
import { Movie } from '../../models/movie.model';

interface Props {
    movie: Movie
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    return (
        <Card style={{ width: '18rem' , marginBottom: "50px" }}>
            <Card.Img variant="top" style={{height: "250px" , objectFit: "cover"}} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
                <Card.Title className="title">{movie.title}</Card.Title>
                <Card.Text className="text">
                    {movie.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;