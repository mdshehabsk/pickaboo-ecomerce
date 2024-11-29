"use client";

import { FormEvent, useState, ChangeEvent, useEffect } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Link from "next/link";
import { useRegisterUserMutation } from "@/toolkit/api/authApi";

const PasswordInput = ({
  name,
  value,
  showPassword,
  onChange,
  toggleShowPassword,
}: {
  name: string;
  value: string;
  showPassword: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleShowPassword: () => void;
}) => (
  <div className="w-full flex items-center border px-4 py-2 my-8">
    <input
      type={showPassword ? "text" : "password"}
      name={name}
      placeholder={name === "password" ? "Password" : "Confirm Password"}
      className="w-full border-none outline-none"
      value={value}
      onChange={onChange}
      required
    />
    {showPassword ? (
      <LuEyeOff onClick={toggleShowPassword} />
    ) : (
      <LuEye onClick={toggleShowPassword} />
    )}
  </div>
);

const Register = () => {
  const [mutate, { data, isError, error, isSuccess }] =
    useRegisterUserMutation();
  const [inputVal, setInputVal] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [passShow, setPassShow] = useState({
    password: false,
    cpassword: false,
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [toast, setToast] = useState<null | React.ReactElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputVal({ ...inputVal, [event.target.name]: event.target.value });

  const togglePasswordVisibility = (field: keyof typeof passShow) =>
    setPassShow((prev) => ({ ...prev, [field]: !prev[field] }));

  const registerSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldErrors({});
    mutate(inputVal);
  };

  useEffect(() => {
    if (isError && "error" in error) {
      const newFieldErrors: Record<string, string> = {};
      if (Array.isArray(error.error)) {
        error.error.forEach((err) => {
          newFieldErrors[err.path] = err.message;
        });
      }
      setFieldErrors(newFieldErrors);
    }
  }, [error, isError]);

  useEffect(() => {
    if (isSuccess && data) {
      setFieldErrors({});
      setToast(
        <div className="w-full py-3 bg-gray-50 flex items-center justify-center">
          <p className="text-orangeColor">{data?.message}</p>
        </div>,
      );
    }
  }, [isSuccess, data]);

  const { username, email, password, cpassword } = inputVal;

  return (
    <div className="my-5">
      {isError && (
        <div className="w-full py-3 bg-gray-50 flex items-center justify-center">
          <p className="text-orangeColor">
            {isError && "message" in error && error?.message}
          </p>
        </div>
      )}
      {toast}
      <form onSubmit={registerSubmit}>
        <div className="w-full mt-2 mb-8">
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            className="w-full px-4 py-2 border outline-none"
            value={username}
            onChange={handleInputChange}
            required
          />
          {fieldErrors.username && (
            <span className="text-orangeColor my-1 block">
              {fieldErrors.username}
            </span>
          )}
        </div>

        <div className="w-full flex items-center border px-4 py-2 my-8">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="w-full border-none outline-none"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        {fieldErrors.email && (
          <span className="text-orangeColor my-1 block">
            {fieldErrors.email}
          </span>
        )}

        <PasswordInput
          name="password"
          value={password}
          showPassword={passShow.password}
          onChange={handleInputChange}
          toggleShowPassword={() => togglePasswordVisibility("password")}
        />
        {fieldErrors.password && (
          <span className="text-orangeColor my-1 block">
            {fieldErrors.password}
          </span>
        )}

        <PasswordInput
          name="cpassword"
          value={cpassword}
          showPassword={passShow.cpassword}
          onChange={handleInputChange}
          toggleShowPassword={() => togglePasswordVisibility("cpassword")}
        />
        {fieldErrors.cpassword && (
          <span className="text-orangeColor my-1 block">
            {fieldErrors.cpassword}
          </span>
        )}

        <div className="w-full flex items-center border my-8">
          <button
            type="submit"
            className="bg-orangeColor text-white w-full h-full px-4 py-3 hover:bg-transparent border border-transparent hover:border hover:border-orangeColor duration-500 hover:text-orangeColor"
          >
            Register
          </button>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-orangeColor hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
