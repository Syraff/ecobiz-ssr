"use client";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import drawer from "../assets/img/drawer.svg";
import Kategori from "../components/partials/kategori";
import SearchInput from "../components/molecules/SearchInput";
import Link from "next/link";
import LoginPage from "@/components/Login/LoginPage";
import Image from "next/image";
import axios from "axios";
import Banner from "./Banner";
import { registerServiceWorker } from "@/components/notification/RegisterServiceWorker";
import { subscribeUserToPush } from "@/components/notification/PushNotification";
import AlertNotif from "@/components/notification/AlertNotif";
import { useParams } from "next/navigation";

export default function Header() {
  const [ads, setAds] = useState();
  const params = useParams();
  // const { slug } = router.query;

  const fetchAds = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/filter-ads-space/is_header"
      );
      setAds(res.data.data.ads_space[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const requestNotificationPermission = async () => {
  //   if (Notification.permission !== "granted") {
  //     const permission = await Notification.requestPermission();
  //     if (permission === "granted") {
  //       console.log("Notification permission granted.");
  //       new Notification("Hello world");
  //     }
  //   }
  // };

  useEffect(() => {
    fetchAds();
    // registerServiceWorker();
  }, []);
  return (
    <>
      <AlertNotif />
      <div className="sticky top-0 z-40 lg:block hidden">
        <div
          style={{
            boxShadow: "0px 32px 24px rgba(3, 7, 18, 0.08",
          }}
        >
          <div className="bg-white border-b border-gray-200">
            <div className="container mx-auto py-3">
              <div className="flex justify-between items-center">
                <Link href={"/"}>
                  <Image src={logo} alt="" width={200} />
                </Link>
                {ads && (
                  <Link href={`${ads?.url}`}>
                    <div
                      className="lg:w-[550px] lg:h-[50px] h-[100px]"
                      style={{
                        backgroundImage: `url(${
                          // process.env.NEXT_PUBLIC_BASE_URL +
                          ads?.file_paths?.image[0]
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </Link>
                )}
                <div className="flex gap-x-3 items-center">
                  <SearchInput />
                  <LoginPage />
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="p-2 bg-gray-200 m-1 rounded"
                    >
                      <Image src={drawer} alt="" width={20} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52 shadow-xl"
                    >
                      <li>
                        <button className="h-full  px-5 py-2 text-gray-700 font-light rounded-md text-sm">
                          Magazine
                        </button>
                      </li>
                      <li>
                        <button className="h-full  px-5 py-2 text-gray-700 font-light rounded-md text-sm">
                          Advertise
                        </button>
                      </li>
                      <li>
                        <button className="h-full  px-5 py-2 text-gray-700 font-light rounded-md text-sm">
                          Subscribe
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white ">
            <div className="container mx-auto py-3">
              <Kategori isDekstop />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-40 lg:hidden ">
        <div
          style={{
            boxShadow: "0px 32px 24px rgba(3, 7, 18, 0.08",
          }}
        >
          <div className="bg-white border-b border-gray-200 px-3 py-1">
            <div className="container mx-auto py-3">
              <div className="flex justify-between items-center">
                <Link href={"/"}>
                  <Image src={logo} alt="" width={150} />
                </Link>

                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className="drawer-button">
                    <Image src={drawer} alt="" width={20} />
                  </label>
                </div>

                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
                    <div className="border-b pb-3">
                      <Link href={"/"}>
                        <Image src={logo} alt="" width={150} />
                      </Link>
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center mb-5 gap-x-5">
                        <p className="text-md lg:text-2xl text-red font-bold italic uppercase w-fit">
                          Category
                        </p>
                        <div className="grow">
                          <div className="bg-red w-full h-[0.5px]"></div>
                        </div>
                      </div>
                      <Kategori isMobile />
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bg-white ">
          <div className="container mx-auto py-3">
            <Kategori isMobile />
          </div>
        </div> */}
      </div>
      {!params.slug && <Banner />}
    </>
  );
}
