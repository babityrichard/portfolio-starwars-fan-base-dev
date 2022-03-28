import React from 'react';
import { useGetPlanetsQuery } from '../../services/starwars';
import styled from 'styled-components';
import Planet from './Planet';
import ErrorDataPage from '../util/ErrorDataPage';
import LoadingAnimation from '../util/LoadingAnimation';

const Planets = () => {
    const { data, isLoading, error } = useGetPlanetsQuery();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <ErrorDataPage />

    return (
        <PlanetListStyled>
            <h2>Planets</h2>
            <PlanetsStyled>
                {data && data.results.map(planet => {
                    const id = planet.url.slice(30, -1);
                    return (
                        <Planet
                            key={planet.name}
                            id={parseInt(id)}
                            name={planet.name}
                        />
                    )
                })}
            </PlanetsStyled>
        </PlanetListStyled>
    )
}

const PlanetListStyled = styled.div`
    padding: 1rem 5rem;
    h2 {
        padding: 1rem 0rem;
    }

    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }
`;

const PlanetsStyled = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;    
`;

export default Planets;
