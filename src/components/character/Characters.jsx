import React from 'react';
import { useGetCharactersQuery } from '../../services/starwars';
import styled from 'styled-components';
import Character from './Character';
import ErrorDataPage from '../util/ErrorDataPage';
import LoadingAnimation from '../util/LoadingAnimation';

const Characters = ({ charTwo }) => {
    const { data, isLoading, error } = useGetCharactersQuery();

    if (isLoading) return <LoadingAnimation />
    if (error) return <ErrorDataPage />

    const charAll = data?.results.concat(charTwo?.results)

    return (
        <CharListStyled>
            <h2>Main Characters</h2>
            <CharsStyled>
                {charAll && charAll?.map(character => {
                    const id = character.url.slice(29, -1);
                    return (
                        <Character
                            key={character.url}
                            id={parseInt(id)}
                            name={character.name}
                        />
                    )
                })}
            </CharsStyled>
        </CharListStyled>
    )
}

const CharListStyled = styled.div`
    padding: 1rem 5rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 600px) {
        padding: 0rem 2rem;
    }
`;

const CharsStyled = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;    
`;


export default Characters;
