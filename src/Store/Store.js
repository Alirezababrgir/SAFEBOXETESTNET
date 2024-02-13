import { configureStore } from "@reduxjs/toolkit";
import { MetamaskApi } from "../Api/ApiSlice";
export const Store = configureStore({
    reducer: {
        [MetamaskApi.reducerPath]: MetamaskApi.reducer //save catch data in ui by api pathname => inject reducer name on slice in store (RTK QUERY way)
    },
    middleware: GetDefaultMiddleware => GetDefaultMiddleware().concat(MetamaskApi.middleware) //concat apislice middleware to defualt middleware (RTK QUERY way)
});