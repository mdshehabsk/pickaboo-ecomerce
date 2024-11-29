import baseApi from "./baseApi";
interface IRegisterApiResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<IRegisterApiResponse, IRegisterUser>({
      query: (user) => ({
        url: "/auth/register",
        method: "POST",
        data: user
      }),
    }),
    verifyUser: builder.query({
      query: (token) => ({
        url: `/auth/verify-user?token=${token}`,
      }),
    }),
  }),
});

// Export the auto-generated hooks
export const { useRegisterUserMutation, useVerifyUserQuery } = authApi;

export default authApi;
