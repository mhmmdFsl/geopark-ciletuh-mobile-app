import {createSlice} from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        jwt: '',
        isLogin: false
    },
    reducers: {
        addToken: (state, value) => {
            state.jwt = value.payload
        },
        setIsLogin: (state, value) => {
            state.isLogin = value.payload
        }
    }
})

export const {addToken, setIsLogin} = tokenSlice.actions

export default tokenSlice.reducer