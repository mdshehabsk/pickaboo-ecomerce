import { Response,CookieOptions } from "express";

interface IResponse<T> {
  statusCode: number | string;
  success: boolean;
  message?: string;
  data?: T;
  error?: T;
  cookie?: {
    name: string;
    value: string;
    options:CookieOptions;
  };
  clearCookie?: string;
}

const sendResponse = <T>(res: Response, data: IResponse<T>) => {
  // Set cookie if provided
  if (data.cookie) {
    const { name, value, options } = data.cookie;
    res.cookie(name, value, {
      httpOnly:true,
      secure:true,
      sameSite:'none',
      ...options
    });
  }

  // Clear cookie if provided
  if (data.clearCookie) {
    res.clearCookie(data.clearCookie);
  }

  const response = {
    success: data.success,
    statusCode: Number(data.statusCode),
    message: data.message,
    data: data.data,
    error: data.error,
  };
  return res.status(response.statusCode).json(response);
};

export default sendResponse;





