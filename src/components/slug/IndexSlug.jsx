"use client";
import React, { useEffect, useState } from "react";
import SlugComp from "./SlugComp";
import Latest from "../Home/Latest";
import axios from "axios";
import Link from "next/link";

export default function IndexSlug({ params }) {
  const [ads_head, setAds_head] = useState();

  const fetchAdsBanner = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL +
          "api/headline-ads-space/" +
          params.slug
      );
      setAds_head(res.data.data.ads_space[0]);
      //   console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdsBanner();
  }, []);
  return (
    <div className="px-2 lg:px-0">
      <div className="container lg:mx-auto mt-4 flex justify-center mb-3">
        {ads_head && (
          <>
            <Link href={`${ads_head?.url}`} target="_blank">
              <img
                src={
                  // process.env.NEXT_PUBLIC_BASE_URL +
                  ads_head?.file_paths?.image[0]
                }
                className="max-h-[150px]"
                alt=""
              />
            </Link>
          </>
        )}
      </div>
      <div className="lg:grid lg:grid-cols-10 gap-x-10">
        <div className="col-span-7 mb-5 lg:mb-0">
          <SlugComp params={params} />
        </div>
        <div className="col-span-3">
          <Latest />
        </div>
      </div>
    </div>
  );
}
