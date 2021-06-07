import {configureStore} from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

export default Store = configureStore({
    reducer: {
        token: tokenReducer
    }
})