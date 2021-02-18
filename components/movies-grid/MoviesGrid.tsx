import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Movie } from '../../models/movie.model';
import MovieCard from '../movie-card/MovieCard';

interface Props {
    movies: Movie[],
    loading:boolean
}

const MoviesGrid: React.FC<Props> = ({ movies,loading }) => {
    if(loading){
        return<div style={{ display:"flex" , alignItems:"center" , justifyContent:"center" , minHeight:"100vh",fontSize:"22px",fontWeight:"bold"  }}>Loading....</div>
    }

    return (
        <Container style={{paddingTop: "50px" , paddingBottom: "50px"}}>
            <Row>
                {
                    movies.map((movie: Movie) => {
                        return (
                            <Col  key={movie.id}  xs={6} md={4}>
                                <MovieCard key={movie.id} movie={movie} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
}

export default MoviesGrid;