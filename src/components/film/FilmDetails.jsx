import React from 'react'
import styled from 'styled-components'
import { useGetFilmDetailsQuery } from '../../services/starwars';
import { useParams, useNavigate } from 'react-router-dom';
import { First_1280, Second_1280, Third_1280, Fourth_1280, Fifth_1280, Sixth_1280 } from '../../img/films';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ErrorDataPage from '../util/ErrorDataPage';
import EmbedYoutube from './EmbedYoutube';

const FilmDetails = ({ themesStatus }) => {
    const { id } = useParams();
    const { data, error } = useGetFilmDetailsQuery(id);
    const navigate = useNavigate();

    const exitHandler = e => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    }

    const iconExitHandler = e => {
        document.body.style.overflow = 'auto';
        navigate('/');
    }

    const getImage = id => {
        switch (id) {
            case '1':
                return First_1280;
            case '2':
                return Second_1280;
            case '3':
                return Third_1280;
            case '4':
                return Fourth_1280;
            case '5':
                return Fifth_1280;
            case '6':
                return Sixth_1280;
            default:
                break;
        }
    }

    if (!themesStatus) document.body.style.overflow = 'hidden';

    if (error) return <ErrorDataPage />
    
    return (
        <>
        {data &&
            <CardShadowStyled 
                className="shadow" 
                onClick={exitHandler}
            >
                <DetailStyled>
                    <FontAwesomeIcon icon={faClose} onClick={iconExitHandler} />
                    <h3>{data.title}</h3>                
                    <img src={getImage(id)} alt={data.title} />  
                    <p><span>Director</span>: {data.director}</p>
                    <p><span>Producer</span>: {data.producer}</p>
                    <p><span>Release Date</span>: {data.release_date}</p>
                    <p><span>Opening crawl</span>: {data.opening_crawl}</p>    
                    <EmbedYoutube id={id} />                
                </DetailStyled>       
            </CardShadowStyled>
        }
        </>
    )
}

const CardShadowStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(270deg, #2a3ed4, #a734d1);
    position: fixed;
    top: 0;
    left: 0;
    
    h3 {
        text-align: center;
        font-weight: bold;
        padding: 0rem 0rem 1rem 0rem;
    }
    p {
        text-align: justify;
    }
    span {
        font-weight: 500;
    }
`;

const DetailStyled = styled.div`
    width: 80%;
    padding: 3rem 20rem;
    background: #eee;
    position: absolute;
    left: 10%;
    top: 0%;    
    color: black;
    img {
        width: 100%;
        border-radius: 0.3rem;
        margin-bottom: 0.75rem;
    }
    svg {
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 5%;
        padding-top: 3.5%;
        transform: scale(1.6);
        color: #555;
        opacity: 0.7;
        cursor: pointer;
    }
    height: 100%;
    overflow: visible;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 0.6rem;
    }
    &::-webkit-scrollbar-thumb {
        background: darkgrey;
    }
    &::-webkit-scrollbar-track {
        background: white;
    } 
    
    @media (max-width: 900px) {
        padding: 2rem;
        svg {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`;

export default FilmDetails;
