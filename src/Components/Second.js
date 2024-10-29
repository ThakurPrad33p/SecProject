import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import Header from "./Header";

const Second = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen">
        <div className=" text-white text-3xl h-screen w-46  justify-center">
          {/* <li className='bg-slate-600 hover:bg-slate-600 px-8'>Home</li> */}
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer bg-amber-900">
            Home
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Profile
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">My Profile</span>
          </p>

          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">Favourites</span>
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">Downloads</span>
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">Logout</span>
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            Trending
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer ">
            Subscription
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 cursor-pointer">
            History
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">Tourist</span>
          </p>
          <p className="py-4 px-12 hover:bg-slate-600 flex cursor-pointer">
            <IoIosArrowForward />
            <span className="ml-2">Human</span>
          </p>
        </div>
        <span className="w-[2px] h-screen bg-slate-800 m-0"></span>
        <div className="text-white my-6 mx-auto">
          <div className=" flex flex-col justify-center items-center my-4">
            <p className="text-7xl font-semibold my-4 italic">Trial 3D Videos</p>
            <p className="text-5xl ">Example</p>
          </div>
          <div className="flex flex-wrap items-center justify-center px-20">
            <div className="h-64 w-96 m-10 border-4 flex items-center rounded-3xl">
              <p className="p-8 text-4xl items-center justify-center">
                360- Degree virtual tour for tourist places.
              </p>
            </div>
            <div className="h-64 w-96 m-10  border-4 flex items-center  rounded-3xl">
              <p className="p-8 text-4xl items-center justify-center">
                360- Degree view of a e-commerce Product.
              </p>
            </div>
            <div className="h-64 w-96 m-10  border-4 flex items-center  rounded-3xl">
              <p className="p-8 text-4xl items-center justify-center">
                360- Degree video of a human heart.
              </p>
            </div>
            <div className="h-64 w-96 m-10  border-4 flex items-center  rounded-3xl">
              <p className="p-8 text-4xl items-center justify-center">
                360- Degree tour for a hotel or restaurents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Second;
