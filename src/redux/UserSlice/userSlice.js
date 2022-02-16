import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInUser: (state, action) => {
            const userIndex = action.payload.accounts.findIndex((account) => {
                return (
                    account.Username === action.payload.username &&
                    account.Password === action.payload.password
                );
            });
            if (userIndex != -1) {
                state.userInfo = action.payload.accounts[userIndex];
            } else {
                state.userInfo = null;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { signInUser } = userSlice.actions;
export const getUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
