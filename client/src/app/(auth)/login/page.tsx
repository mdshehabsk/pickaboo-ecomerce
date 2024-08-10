'use client'

import { FormEvent, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Link from "next/link";
const Login = () => {
  const [passShow, setPassShow] = useState(false);

  const passShowToggle = () => {
    setPassShow(!passShow);
  };
  const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  };
  return (
    <>
      <div className="mt-5">
        <form autoComplete="off" onSubmit={loginSubmit}>
          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full border-none outline-none"
            />
          </div>

          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type={passShow ? "text" : "password"}
              name="email"
              placeholder="password"
              className="w-full border-none outline-none"
            />
            {passShow ? (
              <LuEyeOff onClick={passShowToggle} />
            ) : (
              <LuEye onClick={passShowToggle} />
            )}
          </div>

          <div className="w-full flex items-center border  my-8">
            <button className="bg-orangeColor text-white w-full h-full px-4 py-3 border border-transparent hover:bg-transparent hover:border hover:border-orangeColor duration-500 hover:text-orangeColor ">
              Login
            </button>
          </div>
          <div className="w-full flex items-center justify-center my-3 text-orangeColor">
            <Link href="/forgetPassword">Forget Password?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
