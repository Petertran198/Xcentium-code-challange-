import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: JSON.parse(window.localStorage.getItem('user')) || null,
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
                window.localStorage.setItem(
                    'user',
                    JSON.stringify({
                        Username: state.userInfo.Username,
                        Name: state.userInfo.Name,
                    })
                );
            }
        },
        signOutUser: (state) => {
            state.userInfo = null;
            window.localStorage.setItem('user', null);
        },
    },
});

// Action creators are generated for each case reducer function
export const { signInUser, signOutUser } = userSlice.actions;
export const getUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer;
