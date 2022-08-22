import { apiSlice } from "../../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/v1/api/users",
      transformResponse: (response, meta, arg) => response.data.items,
      keepUnusedDataFor: 5, //to keep the cache ->default 60s
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
