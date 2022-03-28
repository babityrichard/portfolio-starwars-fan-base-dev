import React from 'react'
import styled from 'styled-components';

const EmbedYoutube = ({ id }) => {    
    const getSlug = id => {
        switch (id) {
            case '1':
                return 'nbTK3KE6748';
            case '2':
                return 'vU6L3jXt2r8';
            case '3':
                return 'elvp0H0oM48';
            case '4':
                return 'mlF4VwaKMxM';
            case '5':
                return '6DACKXQTaRQ';
            case '6':
                return 'BQ1kR64uaRI';
            default:
                break;
        }
    }
    
    return (
        <YouTubeStyled>
            <iframe 
                width="100%"
                height="315" 
                src={`https://www.youtube.com/embed/${getSlug(id)}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
            </iframe>
        </YouTubeStyled>
    )
};

const YouTubeStyled = styled.div`
    margin-top: 1rem;
`;

export default EmbedYoutube;
