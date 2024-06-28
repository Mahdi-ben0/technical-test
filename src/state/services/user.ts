import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  fullName: number;
  email: string;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API }),
  tagTypes: [],
  endpoints: (build) => ({
    addUser: build.mutation<User, Partial<User>>({
      query(body) {
        return {
          url: `user`,
          method: "POST",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components
export const { useAddUserMutation } = userApi;
