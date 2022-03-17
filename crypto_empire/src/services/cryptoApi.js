import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeader = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'cc06000567msh3140240cbdaf59ap18a0d4jsndc4faeb74da0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'
const createRequest = (url) => ({url, headers: cryptoApiHeader}) 
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
    }),
})

export const { useGetCryptosQuery } = cryptoApi;