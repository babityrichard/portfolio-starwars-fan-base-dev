// Music
import { main_theme_mp3, imperial_motif_mp3, the_force_theme, leia_theme, lando_palace, imperial_march, yoda_theme, victory_celebration, duel_fates } from './';

//Covers
import { star_wars_main, death_star, light_sabre, leia, lando, march, yoda, victory, duel } from './';

function songList() {
    return [
        {
            id: 1,
            name: "The Main Theme",
            cover: star_wars_main,
            audio: main_theme_mp3,
            active: true,
        },
        {
            id: 2,
            name: "Imperial Motif",
            cover: death_star,
            audio: imperial_motif_mp3,
            active: false,
        },
        {
            id: 3,
            name: "The Force Theme",
            cover: light_sabre,
            audio: the_force_theme,
            active: false,
        },
        {
            id: 4,
            name: "Leia's Theme",
            cover: leia,
            audio: leia_theme,
            active: false,
        },
        {
            id: 5,
            name: "Imperial March",
            cover: march,
            audio: imperial_march,
            active: false,
        },
        {            
            id: 6,
            name: "Lando's Palace",
            cover: lando,
            audio: lando_palace,
            active: false,
        },
        {
            id: 7,
            name: "Yoda's Theme",
            cover: yoda,
            audio: yoda_theme,
            active: false,
        },
        {
            id: 8,
            name: "Victory Celebration",
            cover: victory,
            audio: victory_celebration,
            active: false,
        },
        {
            id: 9,
            name: "The Duel of Fates",
            cover: duel,
            audio: duel_fates,
            active: false,
        },
    ]
}

export default songList;
