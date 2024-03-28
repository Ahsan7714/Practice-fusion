import React from "react";
import { Link } from "react-router-dom";
import img from "./assets/img2.png";

const Register = () => {
  return (
    <div>
      <div className="flex justify-between p-8 shadow-md sticky w-full">
        <p className="font-medium text-[22px]"> Practice Fusion</p>
        <p className="text-[18px] font-medium">
          Already have an account ? <Link to="/" className="text-[#7c0000]">Login</Link>
        </p>
      </div>
      <div className="flex justify-around my-16">
        <div className="flex-1 px-28">
          <img src={img} alt="" className="w-[500px]" />
          <p className=" text-[#7c0000] pt-4 pl-24">
            Learn about our EHR program
          </p>
        </div>
        <div className="flex-1 flex-col  gap-5">
          <div className=" flex flex-col gap-8">
            <h1 className="text-[35px]">Start your free 14-day trial</h1>
            <p className="pr-20">
              No credit card required. We'll send you an email with instructions
              to book a demo of the EHR.
            </p>
          </div>
          <div className="flex gap-16 pt-5">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className=" text-[16px] text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className=" text-[16px] text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-16 pt-5">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className=" text-[16px] text-gray-700">
                First Practice zip code
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className=" text-[16px] text-gray-700">
                Preferred phone number
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-5">
              <label htmlFor="" className=" text-[16px] text-gray-700">
              Your email address

              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg w-[470px]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className=" text-[16px] text-gray-700">
              What is your role in your practice?
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" outline-none border border-gray-300 px-2 py-2 rounded-lg w-[470px]"
              />
            </div>
            <button className='bg-[#7c0000] p-3 rounded-lg text-white font-medium mt-7 w-[472px]'>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
