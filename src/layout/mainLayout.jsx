"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet, useLocation, useParams } from "next/link";
import Footer from "./Footer";
import axios from "axios";
import MetaSeo from "./meta";
import Banner from "./Banner";
import { registerServiceWorker } from "@/components/notification/RegisterServiceWorker";
import { subscribeUserToPush } from "@/components/notification/PushNotification";

export default function MainLayout() {
  // const [path, setPath] = useState();
  const { category, slug } = useParams();
  const { pathname } = useLocation();
  const [desc, setDesc] = useState({
    title: "Coal Metal | Home",
  });

  const fetchInitial = async () => {
    try {
      // console.log(window.location);
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/initial_homepage"
      );
      setDesc(data.data);
      if (category && !slug) {
        setDesc({
          ...desc,
          title: `${data.data.title} | ${category.split("-").join(" ")}`,
        });
      } else if (category && slug) {
        setDesc({
          ...desc,
          title: `${data.data.title} | ${slug.split("-").join(" ")}`,
        });
      } else {
        setDesc({
          ...desc,
          title: `${data.data.title} | Home`,
        });
      }
      setDesc({ ...desc, url: window.location.href });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInitial();
  }, [category, slug]);

  return (
    <>
      <MetaSeo desc={desc} />
      <Header />
      <div className="container mt-4 mx-auto min-h-screen">
        {/* {path !== "/login" && path !== "/register" ? <Banner /> : ""} */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
