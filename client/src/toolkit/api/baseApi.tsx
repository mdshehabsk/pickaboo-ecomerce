import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";




// Define the global error type
export interface IApiError {
  statusCode: number;
  message: string;
  error?: string | { path: string; message: string }[];
}

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url?: string;
      method?: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    IApiError
  > =>
  async ({ url, method, data, params, headers }): Promise<any> => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
        withCredentials: true,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: err?.response?.data,
      };
    }
  };

const baseApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
  }),
  endpoints: () => ({}),
});

export default baseApi;
