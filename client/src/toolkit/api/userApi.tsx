import baseApi from "./baseApi";



const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getUserData : builder.query({
        query: () => ({
            url:'/user/get-user-data',
            method:'GET',
        })
      })
    }),
  });

export const {useGetUserDataQuery} = userApi
