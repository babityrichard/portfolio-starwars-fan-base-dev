import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import songListArray from '../../audio/util/songListArray';
import ThemeSong from './ThemeSong';

const ThemePlayer = ({ themesStatus, setThemesStatus }) => {
    const isToggled = themesStatus;
    const closeHandler = () => setThemesStatus(!isToggled)

    const [themes] = useState(songListArray);

    isToggled ? document.body.style.overflow = 'hidden' : document.body.style.overflowY = 'scroll';;

    return (
        <div className={`${isToggled ? 'active' : 'not-active'}`}>
            <ThemePlayerStyled>     
                <HeadStyled>
                    <h2>Theme Player</h2>
                    <FontAwesomeIcon onClick={closeHandler} icon={faClose} />
                </HeadStyled>
                <ThemeSongsStyled>
                    {themes.map(theme => 
                        <ThemeSong 
                            key={theme.id}
                            theme={theme} 
                    />)}  
                </ThemeSongsStyled>        
            </ThemePlayerStyled>
        </div>
    )
}

const ThemePlayerStyled = styled.div`
    h2 {
        padding: 2rem 0rem 0rem 2rem;
        color: #8818b5;
        text-shadow: none;
    }
`;

const HeadStyled = styled.div`
    display: flex;
    svg {
        margin: 3rem 1rem 0rem 5rem;
        transform: scale(1.4);
        color: #454545;
        cursor: pointer;
    }
`;

const ThemeSongsStyled = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1rem 2rem 1rem 2rem;
    img {
        width: 30%;
        border-radius: 10%;
    }
`;

export default ThemePlayer;