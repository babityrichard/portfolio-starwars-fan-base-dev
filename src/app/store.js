import { configureStore } from '@reduxjs/toolkit';
import  { starwarsApi } from '../services/starwars';

export default configureStore({
    reducer: {
        [starwarsApi.reducerPath]: starwarsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(starwarsApi.middleware),
})