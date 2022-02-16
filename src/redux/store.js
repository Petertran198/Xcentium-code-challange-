import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
