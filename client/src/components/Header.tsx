import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import BannerLeft from "./Banner/BannerLeft";
import Sidebar from "./Mobile_sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { sidebarOpen } from "@toolkit/slice/SidebarSlice";

function Navbar() {
const {sidebarShow} = useAppSelector(state => state.Sidebar)
const dispatch = useAppDispatch()
  useEffect(() => {
    if (sidebarShow) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [sidebarShow]);
  return (
    <>
      <header className="w-full min-h-max bg-mainBlueColor flex items-center py-2 lg:py-0 sticky top-0 z-50 ">
        <div className="container mx-auto px-2 md:px-0">
          <div className="flex flex-wrap h-full  items-center justify-between">
            <div className="order-1 flex gap-2 items-center ">
              <div className="  hidden lg:block  cursor-pointer group/banner lg:py-7 transition-all duration-500  group-banner ">
                <FiMenu className="text-slate-100 text-xl lg:text-2xl  " />
                <div
                  className={`hidden  absolute top-full left-0 min-w-[338px]  group-hover/banner:block   `}
                >
                  <BannerLeft />
                </div>
              </div>
              <div
                className="cursor-pointer group/banner lg:py-7  group-banner  lg:hidden  "
                onClick={() =>dispatch(sidebarOpen())}
              >
                <FiMenu className="text-slate-100 text-2xl" />
              </div>
              <div className="text-slate-100 ">
                <Link to="/" className=" text-lg md:text-2xl font-extrabold ">
                  Pickaboo
                </Link>
              </div>
            </div>
            <div className="relative bg-white order-3 lg:order-2 mt-2 basis-full lg:basis-4/6  p-1 flex">
              <input
                type="text"
                placeholder="Search for product, brands and more"
                className="ml-4 focus:outline-none px-4 py-1 grow text-sm md:text-md "
              />
              <div className="absolute w-10 top-0 flex items-center h-full text-slate-400">
                <AiOutlineSearch className="text-2xl" />
              </div>
            </div>
            <div className="flex items-center space-x-2 text-white order-2 lg:order-3 ">
              <div className="flex gap-1 cursor-pointer">
                <AiOutlineShoppingCart className=" text-xl  md:text-2xl " />
                <p>Cart</p>
              </div>
              <span className="h-[20px] w-[2px] bg-white "></span>
              <div className="md:border md:px-6 py-1 rounded cursor-pointer ">
                <Link
                  to="/login"
                  className="text-white  text-md font-medium "
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar />
    </>
  );
}

export default Navbar;
