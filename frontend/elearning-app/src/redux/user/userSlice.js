import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userRegister = createAsyncThunk('user/register', async (user) => {
    try {
        const response = await axios.post('http://localhost:4000/api/user/register', user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});

export const userLogin = createAsyncThunk('user/login', async (user) => {
    try {
        console.log('user', user);
        const response = await axios.post('http://localhost:4000/api/users/login', user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
});


const initialState = {
    user: null,
    users: null,
    status: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(userLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload?.user;

            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})



export default userSlice.reducer