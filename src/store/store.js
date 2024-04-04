import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../reducers/contactSlices"

const store = configureStore ({
    reducer: {
        contacts: contactReducer
    }
});


export default store;