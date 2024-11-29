'use client'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Auth = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const pathname = usePathname()
  return (
    <>
      <div className="mx-auto my-6 max-w-[400px]   ">
        <div className="flex mx-auto justify-center">
          <Link
            href="/login"
            className={`flex justify-center basis-1/2   font-semibold  ${
              pathname === "/login"
                ? "text-orangeColor  border-b-[3px] border-orangeColor "
                : null
            } `}
          >
            <h2 className="">LOGIN</h2>
          </Link>

          <Link
            href="/register"
            className={`flex justify-center basis-1/2   font-semibold  ${
              pathname === "/register"
                ? "text-orangeColor  border-b-[3px] border-orangeColor "
                : null
            } `}
          >
            <h2>REGISTER</h2>
          </Link>
        </div>
       {children}

        <div className="w-full flex justify-center">
          <button onClick={()=> signIn('google')} className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-gray-300 rounded bg-white">
            <FcGoogle />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
        </div>

        <div className="w-full flex justify-center mt-4 ">

          <button className="flex items-center justify-center w-full px-4 py-2 space-x-2 border border-blue-500 rounded bg-blue-500 text-white" >
            <FaFacebookF className="text-white" />
            <span className=" font-semibold text-white ">
              Sign in with Google
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Auth;
