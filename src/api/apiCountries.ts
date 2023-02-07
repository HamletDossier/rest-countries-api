import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCountries = createApi({
    reducerPath: "apiCountries",
    baseQuery: fetchBaseQuery({baseUrl: 'https://restcountries.com/v3.1'}),
    endpoints: (builder) => ({
        // Get all countries
        getCountries: builder.query({query: () => '/region/america',})

    })
})

export const { useGetCountriesQuery }:any = apiCountries;