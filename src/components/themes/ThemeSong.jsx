import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const ThemeSong = ({ theme }) => {  
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef(null);
    
    const playThemeHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }        
    }    

    return (
        <ThemeSongStyled>
            <img src={theme.cover} alt={theme.name} />
            <h3>{theme.name}</h3>
            <FontAwesomeIcon 
                className='play' 
                icon={isPlaying ? faPause : faPlay} 
                size="2x"
                onClick={playThemeHandler}
            />
            <audio ref={audioRef} src={theme.audio}></audio>
        </ThemeSongStyled>
    )
}

const ThemeSongStyled = styled.div`
    display: flex;
    svg {
        padding: 2rem;
        color: #343434;
        cursor: pointer;
    }
    img {
        padding: 0.3rem;
    }
    h3 {
        padding-right: 0;
        color: #343434;
    }
`;

export default ThemeSong;
