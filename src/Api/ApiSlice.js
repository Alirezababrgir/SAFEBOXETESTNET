import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MetamaskApi = createApi({
    tagTypes: ["CONNECT"],
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.metamask.com' }),
    endpoints: (builder) => ({
        ConnectWallet: builder.mutation({
            query: () => ({
                url: '/connect-wallet',
                method: 'POST',
                body: { walletAddress: 'your_wallet_address_here' },
            }),
        }),
    }),
});
export const { useConnectWalletMutation } = MetamaskApi;