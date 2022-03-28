import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const starwarsApi = createApi({
    reducerPath: 'starwarsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://swapi.dev/api/',
    }),
    endpoints: (builder) => ({
        getCharacters: builder.query({
            query: () => 'people/?page=1'
        }),
        getCharactersTwo: builder.query({
            query: () => 'people/?page=2'
        }),
        getFilms: builder.query({
            query: () => 'films/'
        }),
        getPlanets: builder.query({
            query: () => 'planets/'
        }),
        getCharDetails: builder.query({
            query: (charId) => `people/${charId}/`
        }),
        getFilmDetails: builder.query({
            query: (filmId) => `films/${filmId}/`
        }),
        getPlanetDetails: builder.query({
            query: (planetId) => `planets/${planetId}/`
        }),
    })
});

export const {
    useGetCharactersQuery,
    useGetCharactersTwoQuery,
    useGetFilmsQuery,
    useGetPlanetsQuery,
    useGetCharDetailsQuery,
    useGetFilmDetailsQuery,
    useGetPlanetDetailsQuery
} = starwarsApi;

