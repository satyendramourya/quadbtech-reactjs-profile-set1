import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobData: [],
    userInfo: {
        fristName: "",
        lastName: "",
        email: "",
        password: "",
    },
    appliedFormUserData: [],
};

export const getUserSlice = createSlice({
    name: "getUserSlice",
    initialState,
    reducers: {
        
        //user Info
        addUser: (state, action) => {
            state.userInfo.fristName = action.payload.firstName;
            state.userInfo.lastName = action.payload.lastName;
            state.userInfo.email = action.payload.email;
            state.userInfo.password = action.payload.password;
        },

        removeUser: (state) => {
            state.userInfo.fristName = "";
            state.userInfo.lastName = "";
            state.userInfo.email = "";
            state.userInfo.password = "";
        },

        //job data
        addJobData: (state, action) => {
            state.jobData = action.payload;
        },

        //applied form user data
        addAppliedFormUserData: (state, action) => {
            state.appliedFormUserData = action.payload;
        },

    }
})

export const {
    addUser,
    removeUser,
    addJobData,
    addAppliedFormUserData,
} = getUserSlice.actions;

export default getUserSlice.reducer;