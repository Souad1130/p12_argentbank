import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";

// Configuration de la persistance de l’état du user slice

const persistConfig = {
    key: "user",
    storage: sessionStorage
};

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

// Configure le store avec le user slice persistant 
const store = configureStore({
    reducer: {
        user: persistedReducer
    },
    // Pour gérer les actions non sérialisables comme les fonctions asynchrones
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default store;