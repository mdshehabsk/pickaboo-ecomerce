import { Response } from "express";

interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message?: string;
  data: T;
}

const sendResponse = <T>(res: Response, data: IResponse<T>) : IResponse<T> => {
  const response = {
    success: data.success,
    statusCode: data.statusCode,
    message: data.message,
    data: data.data,
  };
  return response
};

export default sendResponse;
