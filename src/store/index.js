import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import todoReducer from "./todo";

const persistConfig = {
    key: 'root',
    storage,

}

const rootReducer = combineReducers({
    todo: todoReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})
export const persistor = persistStore(store)