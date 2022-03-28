import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../../img/Background-main.png';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width: 0.6rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
        &::-webkit-scrollbar-track {
            background-color: white;
        }
    }
    body {
        max-width: 1920px;
        margin: 0 auto;
        font-family: 'Prompt', sans-serif;
        width: 100%;
        height: 100vh;
        background: url(${backgroundImage});
        background-size: cover;
        overflow: scroll;
        overflow-x: hidden;       
    }
    h2 {
        font-size: 2rem;
        color: #efefef;
        text-shadow: 2px 2px 4px #000000;
        margin-bottom: 1rem;
    }
    h3 {
        font-size: 1.3rem;
        font-weight: 500;
        color: #333;
        padding: 1rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
        color: #333;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    img {
        display: block;
    }
    .active {
        transform: translateX(0%);
        opacity: 1;
        transition: all 0.6s ease; 
        background: #fefefe;
        z-index: 3; 
        position: fixed;
        top: 0;
        right: 0;
        width: 25rem;
        height: 100%; 
        border-radius: 2rem 0rem 0rem 2rem;        
        box-shadow: 2px 2px 50px white; 
        overflow: scroll;
        ::-webkit-scrollbar {
            width: 0.5rem;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #8818b5;
        }
    }
    .not-active {
        transform: translateX(110%);
        opacity: 0;  
        transition: all 0.6s ease;  
        position: fixed;
        top: 0;
        right: 0;
        width: 25rem;
        height: 100%; 
    }
`;

export default GlobalStyles;
