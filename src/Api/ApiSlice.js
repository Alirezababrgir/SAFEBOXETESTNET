import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MetamaskApi = createApi({
    tagTypes: ["CONNECT"],
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    endpoints: (builder) => ({
        ConnectWallet: builder.mutation({
            query: () => ({
                url: '/connect-wallet',
                method: 'POST',
            }),
        }),
    }),
});
export const { useConnectWalletMutation } = MetamaskApi;