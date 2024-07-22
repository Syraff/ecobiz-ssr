"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Banner() {
  const [ads_banner, setAds_banner] = useState();

  const fetchAdsBanner = async () => {
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/filter-ads-space/is_headline"
      );
      setAds_banner(res.data.data.ads_space[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdsBanner();
  }, []);
  return (
    <>
      <div className="mt-4 container px-3 lg:px-0 lg:mx-auto">
        {ads_banner && (
          <Link href={`${ads_banner?.url}`} className="" target="_blank">
            <img
              src={ads_banner?.file_paths?.image[0]}
              className="max-h-[150px] mx-auto"
              alt=""
            />
          </Link>
        )}
      </div>
    </>
  );
}
