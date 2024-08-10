'use client'
import { FormEvent, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Link from "next/link";
const Register = () => {

  const [passShow, setPassShow] = useState(false);

  const passShowToggle = () => {
    setPassShow(!passShow);
  };
  const registerSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }
  return (
    <>
          <div className="mt-5">
        <form autoComplete="off" onSubmit={registerSubmit}>

          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type="text"
              name="username"
              placeholder="Full Name"
              className="w-full border-none outline-none"
            />
          </div>
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
              name="password"
              placeholder="password"
              className="w-full border-none outline-none"
            />
            {passShow ? (
              <LuEyeOff onClick={passShowToggle} />
            ) : (
              <LuEye onClick={passShowToggle} />
            )}
          </div>


          <div className="w-full flex items-center border px-4 py-2 my-8">
            <input
              type={passShow ? "text" : "password"}
              name="cpassword"
              placeholder="Confirm password"
              className="w-full border-none outline-none"
            />
            {passShow ? (
              <LuEyeOff onClick={passShowToggle} />
            ) : (
              <LuEye onClick={passShowToggle} />
            )}
          </div>
          <div className="w-full flex items-center border  my-8">
            <button className="bg-orangeColor text-white w-full h-full px-4 py-3 hover:bg-transparent border border-transparent hover:border hover:border-orangeColor duration-500 hover:text-orangeColor">
            Register
            </button>
          </div>
        </form>
      </div>
 
    </>
  )
}

export default Register