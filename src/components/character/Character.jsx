import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 
import { First_600, Second_600, Third_600, Fourth_600, Fifth_600, Sixth_600, Seventh_600, Eigth_600, Ninth_600, Tenth_600, Eleventh_600, Twelfth_600, Thirteenth_600, Fourteenth_600, Fifteenth_600, Sixteenth_600, Eigteenth_600, Ninteenth_600, Twentieth_600, Twentyfirst_600 } from '../../img/characters';

const Character = ({ name, id }) => {
    const getImage = id => {
        switch (id) {
            case 1:
                return First_600;
            case 2:
                return Second_600;
            case 3:
                return Third_600;
            case 4:
                return Fourth_600;
            case 5:
                return Fifth_600;
            case 6:
                return Sixth_600;
            case 7:
                return Seventh_600;
            case 8:
                return Eigth_600;
            case 9:
                return Ninth_600;
            case 10:
                return Tenth_600;
            case 11:
                return Eleventh_600;
            case 12:
                return Twelfth_600;
            case 13:
                return Thirteenth_600;
            case 14:
                return Fourteenth_600;
            case 15:
                return Fifteenth_600;
            case 16:
                return Sixteenth_600;
            case 18:
                return Eigteenth_600;
            case 19:
                return Ninteenth_600;
            case 20:
                return Twentieth_600;
            case 21:
                return Twentyfirst_600;
            default:
                break;
        }
    }
    
    return (
        <Link to={`/people/${id}`}>
            <CharStyled>
                <h3>{name}</h3>
                <img src={getImage(id)} alt={name} />
            </CharStyled>
        </Link>
    )
}

const CharStyled = styled.div`
    min-height: 30vh;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    border-radius: 0.7rem;
    cursor: pointer;
    overflow: hidden;
    background: #efefef;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    &:hover {
        transform: scale(1.05);
        transition: ease 0.3s;
    }
`;

export default Character;
