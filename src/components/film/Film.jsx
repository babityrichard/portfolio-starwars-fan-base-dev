import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { First_600, Second_600, Third_600, Fourth_600, Fifth_600, Sixth_600 } from '../../img/films';

const Film = ({ title, id }) => {
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
            default:
                break;
        }
    }
    
    return (
        <Link to={`/films/${id}`}>
            <FilmStyled>
                <h3>{title}</h3>
                <img src={getImage(id)} alt={title} />
            </FilmStyled>
        </Link>
    )
}

const FilmStyled = styled.div`
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

export default Film;