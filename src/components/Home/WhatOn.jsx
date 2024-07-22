"use client";
import React, { useEffect, useState } from "react";
import Title from "../molecules/Title";
import Card from "../molecules/card";
import axios from "axios";

export default function WhatOn() {
  const [whatson, setWhatson] = useState([]);
  const fetchWhatson = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/posts/whatson"
      );
      setWhatson(data.data.whatson_posts);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWhatson();
  }, []);

  return (
    <>
      <div className="">
        <Title title={"What's On"} />
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
          {whatson.map((val, i) => {
            return (
              <>
                <Card val={val} i={i} isOne={false} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
