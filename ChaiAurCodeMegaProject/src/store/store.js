import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // 1. Make sure the path to your authSlice file is correct

const store = configureStore({
    reducer: {
        auth: authReducer, // 2. Add your auth reducer here
    },
});

export default store;
