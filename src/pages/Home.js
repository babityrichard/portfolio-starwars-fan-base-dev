import React from 'react';
import { useGetCharactersTwoQuery } from '../services/starwars';
import Characters from '../components/character/Characters';
import Films from '../components/film/Films';
import Planets from '../components/planet/Planets';
import ErrorDataPage from '../components/util/ErrorDataPage';
import LoadingAnimation from '../components/util/LoadingAnimation';


const Home = () => {   
    const { data, isLoading, error } = useGetCharactersTwoQuery();

    if (isLoading) return <LoadingAnimation />;
    if (error) return <ErrorDataPage />

    return (
        <>          
            <Films />
            <Characters charTwo={data}/>            
            <Planets />
        </>
    )
};

export default Home;
