"use client";
import React, { useEffect, useState } from "react";
import Title from "@/components/molecules/Title";
import axios from "axios";
import Card from "@/components/molecules/card";

export default function TagComp({ params }) {
  const [category, setCategory] = React.useState([]);

  const fetchWhatson = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/posts/tags/" + params.hashtag
      );
      setCategory(data.data.posts);
      //   console.log(data.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWhatson();
  }, []);
  return (
    <>
      <Title title={"Tag : " + params.hashtag.split("-").join(" ")} />
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        {category.map((val, i) => {
          return (
            <>
              <Card val={val} i={i} isOne={false} />
            </>
          );
        })}
      </div>
    </>
  );
}
