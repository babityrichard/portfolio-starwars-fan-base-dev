import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { First_600, Second_600, Third_600, Fourth_600, Fifth_600, Sixth_600, Seventh_600, Eigth_600, Ninth_600, Tenth_600 } from '../../img/planets';

const Planet = ({ id, name }) => {
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
            default:
                break;
        }
    }

    return (
        <Link to={`/planets/${id}`}>
            <PlanetStyled>
                <h3>{name}</h3>
                <img src={getImage(id)} alt={name} />
            </PlanetStyled>
        </Link>
    )
}

const PlanetStyled = styled.div`
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

export default Planet;
