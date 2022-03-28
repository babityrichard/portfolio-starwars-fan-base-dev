import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// Components + Pages
import Home from './pages/Home';
import GlobalStyles from './components/util/GlobalStyles';
import CharDetails from './components/character/CharDetails';
import FilmDetails from './components/film/FilmDetails';
import PlanetDetails from './components/planet/PlanetDetails';
import Logo from './components/Logo';
import ThemePlayer from './components/themes/ThemePlayer';
import Page404 from './components/util/Page404';

function App() {
    const [themesStatus, setThemesStatus] = useState(false);
        
    return (
    <div className="App">
        <GlobalStyles />
        <Logo themesStatus={themesStatus} setThemesStatus={setThemesStatus} />
        <ThemePlayer themesStatus={themesStatus} setThemesStatus={setThemesStatus} />
        <Routes>
            <Route path='*' element={<Page404 />} />
            <Route path='/' element={<Home />} />
            <Route path='/people/:id' element={<CharDetails themesStatus={themesStatus} />} />
            <Route path='/films/:id' element={<FilmDetails themesStatus={themesStatus} />} />
            <Route path='/planets/:id' element={<PlanetDetails themesStatus={themesStatus} />} />
        </Routes>
    </div>
    );
}

export default App;
