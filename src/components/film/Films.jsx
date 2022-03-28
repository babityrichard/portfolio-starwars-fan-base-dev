import React from 'react';
import { useGetFilmsQuery } from '../../services/starwars';
import styled from 'styled-components';
import Film from './Film';
import ErrorDataPage from '../util/ErrorDataPage';
import LoadingAnimation from '../util/LoadingAnimation';

const Films = () => {
    const { data, isLoading, error } = useGetFilmsQuery();

        if (isLoading) return <LoadingAnimation />;
        if (error) return <ErrorDataPage />

    return (
        <FilmListStyled>
            <h2>Films</h2>
            <FilmsStyled>
                {data && data.results.map(film => {
                     const id = film.url.slice(-2, -1);
                     return (
                        <Film
                            key={film.episode_id}
                            id={parseInt(id)}
                            title={film.title}
                        />
                     )
                })}
            </FilmsStyled>
        </FilmListStyled>
    )
}

const FilmListStyled = styled.div`
    padding: 1rem 5rem;
    h2 {
        padding: 1rem 0rem;
    }

    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }
`;

const FilmsStyled = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;    
`;

export default Films;
