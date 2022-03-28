import React from 'react'
import styled from 'styled-components'
import { useGetCharDetailsQuery } from '../../services/starwars';
import { useParams, useNavigate } from 'react-router-dom';
import { First_1280, Second_1280, Third_1280, Fourth_1280, Fifth_1280, Sixth_1280, Seventh_1280, Eigth_1280, Ninth_1280, Tenth_1280, Eleventh_1280, Twelfth_1280, Thirteenth_1280, Fourteenth_1280, Fifteenth_1280, Sixteenth_1280, Eigteenth_1280, Ninteenth_1280, Twentieth_1280, Twentyfirst_1280 } from '../../img/characters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import ErrorDataPage from '../util/ErrorDataPage';

const CharDetails = ({ themesStatus }) => {
    const { id } = useParams();
    const { data, error } = useGetCharDetailsQuery(id);
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
            case '7':
                return Seventh_1280;
            case '8':
                return Eigth_1280;
            case '9':
                return Ninth_1280;
            case '10':
                return Tenth_1280;
            case '11':
                return Eleventh_1280;
            case '12':
                return Twelfth_1280;
            case '13':
                return Thirteenth_1280;
            case '14':
                return Fourteenth_1280;
            case '15':
                return Fifteenth_1280;
            case '16':
                return Sixteenth_1280;
            case '18':
                return Eigteenth_1280;
            case '19':
                return Ninteenth_1280;
            case '20':
                return Twentieth_1280;
            case '21':
                return Twentyfirst_1280;
            default:
                break;
        }
    }

    if (!themesStatus) document.body.style.overflow = 'hidden';

    if (error) return <ErrorDataPage />
    
    return (
        <>
        {data &&
            <CardShadowStyled className="shadow" onClick={exitHandler}>            
                <DetailStyled>
                    <StatsStyled>       
                        <FontAwesomeIcon icon={faClose} onClick={iconExitHandler} />
                        <h3>{data.name}</h3>
                        <img src={getImage(id)} alt={data.name} />
                        <p><span>Height</span>: {data.height}</p>
                        <p><span>Mass</span>: {data.mass}</p>
                        <p><span>Hair Color</span>: {data.hair_color}</p>
                        <p><span>Skin Color</span>: {data.skin_color}</p>
                        <p><span>Eye Color</span>: {data.eye_color}</p>
                        <p><span>Birth Year</span>: {data.birth_year}</p>
                        <p><span>Gender</span>: {data.gender}</p>                        
                    </StatsStyled>
                </DetailStyled>
            </CardShadowStyled>}
        </>
    )
}

const CardShadowStyled = styled.div`
    width: 100%;
    min-height: 100%;
    background: linear-gradient(270deg, #2a3ed4, #a734d1);
    position: fixed;
    top: 0;
    left: 0;
    h3 {
        font-weight: bold;
    }
    span {
        font-weight: 500;
    }
`;

const DetailStyled = styled.div`
    width: 80%;
    height: 100vh;
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
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 0.6rem;
    }
    &::-webkit-scrollbar-thumb {
        background: darkgray;
    }
    &::-webkit-scrollbar-track {
        background: white;
    } 
    
    @media (max-width: 900px) {
        padding: 2rem;
        overflow: hidden;
    }
`;

const StatsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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

    @media (max-width: 900px) {
        svg {
            position: absolute;
            top: 0;
            right: 0;
        }
    }
`;

export default CharDetails;
