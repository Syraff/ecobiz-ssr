"use client";
import React, { useEffect, useState } from "react";
import Title from "../molecules/Title";
import Card from "../molecules/card";
import axios from "axios";
import CardAds from "../molecules/cardAds";

export default function Latest() {
  const [latest, setLatest] = useState([]);
  // const [ads, setAds] = useState();

  const fetchLatest = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/posts/latest"
      );
      setLatest(data.data.latest_posts);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // const fetchAds = async () => {
  //   try {
  //     const res = await axios.get(
  //       process.env.NEXT_PUBLIC_BASE_URL + "api/filter-ads-space/is_top_story"
  //     );
  //     setAds(res.data.data.ads_space);
  //     console.log(ads);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchLatest();
    // fetchAds();
  }, []);
  return (
    <>
      {/* <div className="mb-4">
        {ads?.map((val, i) => {
          return (
            <>
              <CardAds val={val} key={val.id} i={i} isOne={true} />
            </>
          );
        })}
      </div> */}
      <Title title={"Top Stories"} />
      {latest.map((val, i) => {
        return (
          <>
            <Card val={val} key={val.id} i={i} isOne={true} />
          </>
        );
      })}
    </>
  );
}
