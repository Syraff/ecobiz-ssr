"use client";
import React from "react";
import logo from "../assets/img/logo.png";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-white mt-10 py-5 lg:py-10">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col space-y-3 lg:space-y-0 justify-between lg:items-center lg:px-0 px-3">
            <div className="">
              <Image
                src={logo}
                alt=""
                width={200}
                height={100}
                className="hidden lg:block"
              />
              <Image
                src={logo}
                alt=""
                width={150}
                height={100}
                className="lg:hidden"
              />
              <p className="leading-3 lg:leading-5 font-medium text-[10px] lg:text-xs mt-2">

              </p>
            </div>
            <div className="flex flex-col lg:space-y-3 max-w-sm text-[10px] lg:text-xs font-medium">
              <p>
                <span className="font-light">
<<<<<<< HEAD
                To contact the news desk or submit your press release, please email to: <a href="mailto:editorial@ecobiz.asia"> editorial@ecobiz.asia </a>
=======
                  To contact the news desk or submit your press release, please email to: editorial@ecobiz.asia
>>>>>>> 943788c9e835bc331185186a84e2dacd948bd3a8
                </span>
              </p>{" "}
              <p>
                Phone : <span className="font-light">+62-21-22458787</span>
              </p>{" "}
              <p>
                Advertising inquires contact{" "}
                <span className="font-light"><a href="mailto:advertising@petromindo.com">advertising@petromindo.com</a></span>
              </p>{" "}
            </div>
            {/* <div className="flex gap-x-3 items-center">
              <div className="bg-gray-700 rounded-full p-2">
                <Icon
                  icon={"ant-design:instagram-outlined"}
                  fontSize={22}
                  className="text-white"
                />
              </div>
              <div className="bg-gray-700 rounded-full p-2">
                <Icon icon={"bxl:gmail"} fontSize={22} className="text-white" />
              </div>
              <div className="bg-gray-700 rounded-full p-2">
                <Icon
                  icon={"ic:round-phone"}
                  fontSize={22}
                  className="text-white"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto">
          <p className="text-gray-400 text-[8px] text-center lg:text-left lg:text-xs py-2 lg:py-3 font-extralight">
            Copyright 2008 - 2023 Ecobiz Asia. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
