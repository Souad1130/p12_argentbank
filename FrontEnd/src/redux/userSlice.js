import { createSlice } from "@reduxjs/toolkit";

// declare les state de mon stor
const initialState = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    signin: false,
    accessToken: null
};
//la confeguration de userslice j'ai mis les reducer 
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //pour actualiser le acces-stoken dans mon stor 
        setAccessToken: (state, action) => {
           
            state.accessToken = action.payload;
        },
// de charger les donner d'utilisateur dans le stor 
        signIn: (state, action) => {
          
            state.id = action.payload.id;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.signin = true;
        },
        // vider mon stor
        signOut: (state) => {
           
            state.id = null;
            state.firstName = null;
            state.lastName = null;
            state.email = null;
            state.signin = false;
            state.accessToken = null;
        },
//chenger le nom d'utilisateur
        editUser: (state, action) => {
            
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        }
    },
});

export const { setAccessToken, signIn, signOut, editUser } = userSlice.actions;

export default userSlice;