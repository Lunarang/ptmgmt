import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const patientSlice = createSlice({
    name: "patients",
    initialState,
    reducers: {
        newPatient: (state, action) => {
            // Write code for adding a patient
        },
    },
});

// Action creators are generated for each case reducer function
export const { newPatient, } = patientSlice.actions

export default patientSlice.reducer