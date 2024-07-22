"use client";
// import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import Card from "../molecules/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

export function Headline() {
  const [headline, setHeadline] = useState([]);

  const fetchHeadline = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/posts/headline"
      );
      setHeadline(data.data.headline_posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeadline();
  }, []);

  // const data = [
  //   {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  //     title: "Peneliti BRIN: Awal Ramadhan 1445 H Jatuh pada 12 Maret 2024",
  //     category: "Nasional",
  //     createdAt: "2 hours a go",
  //   },
  //   {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  //     title: "Peneliti BRIN: Awal Ramadhan 1445 H Jatuh pada 12 Maret 2024",
  //     category: "Nasional",
  //     createdAt: "2 hours a go",
  //   },
  //   {
  //     thumbnail:
  //       "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  //     title: "Peneliti BRIN: Awal Ramadhan 1445 H Jatuh pada 12 Maret 2024",
  //     category: "Nasional",
  //     createdAt: "2 hours a go",
  //   },
  // ];
  return (
    <>
      {/* <Carousel
        autoplay={true}
        autoplayDelay={3000}
        loop={true}
        className="rounded-xl h-[450px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left w-full h-full bg-black/30">
            <div className="flex flex-col justify-between text-white h-full p-10 pb-14">
              <p className="bg-red px-5 py-2 rounded-md w-fit font-bold uppercase italic border border-white tracking-[4px]">
                Headline
              </p>
              <div>
                <div className="w-fit mb-5">
                  <p className="font-light text-xl mb-1">Nasional</p>
                  <div className="bg-white w-full h-[1px]"></div>
                </div>
                <Link href={"/"}>
                  <p className="text-3xl font-bold hover:underline">
                    Emang Boleh Indonesia Impor Beras dan Cetak Rekor Sebesar
                    Itu? Ancaman Kedaulatan Pangan
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left w-full h-full bg-black/30">
            <div className="flex flex-col justify-between text-white h-full p-10 pb-14">
              <p className="bg-red px-5 py-2 rounded-md w-fit font-bold uppercase italic border border-white tracking-[4px]">
                Headline
              </p>
              <div>
                <div className="w-fit mb-5">
                  <p className="font-light text-xl mb-1">Nasional</p>
                  <div className="bg-white w-full h-[1px]"></div>
                </div>
                <Link href={"/"}>
                  <p className="text-3xl font-bold hover:underline">
                    Emang Boleh Indonesia Impor Beras dan Cetak Rekor Sebesar
                    Itu? Ancaman Kedaulatan Pangan
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-0 left w-full h-full bg-black/30">
            <div className="flex flex-col justify-between text-white h-full p-10 pb-14">
              <p className="bg-red px-5 py-2 rounded-md w-fit font-bold uppercase italic border border-white tracking-[4px]">
                Headline
              </p>
              <div>
                <div className="w-fit mb-5">
                  <p className="font-light text-xl mb-1">Nasional</p>
                  <div className="bg-white w-full h-[1px]"></div>
                </div>
                <Link href={"/"}>
                  <p className="text-3xl font-bold hover:underline">
                    Emang Boleh Indonesia Impor Beras dan Cetak Rekor Sebesar
                    Itu? Ancaman Kedaulatan Pangan
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel> */}
      {headline.length !== 0 && (
        <div className="relative rounded-lg max-h-96 mb-5">
          {headline[0].image_big ? (
            <Image
              src={process.env.NEXT_PUBLIC_BASE_URL + headline[0].image_big}
              alt="image 1"
              className="max-h-96 w-full object-cover rounded-lg"
              width={10000}
              height={10000}
            />
          ) : (
            <Image
              src={headline[0].image_url}
              alt="image 1"
              className="max-h-96 w-full object-cover rounded-lg"
              width={10000}
              height={10000}
            />
          )}
          <div className="absolute top-0 left w-full h-full bg-black/30 rounded-lg">
            <div className="flex flex-col justify-between text-white h-full p-5 lg:p-10 lg:pb-14">
              <p className="bg-red px-2 py-1 text-[8px] lg:text-lg lg:px-5 lg:py-2 rounded lg:rounded-md w-fit font-bold uppercase italic border border-white tracking-[2px] lg:tracking-[4px]">
                Headline
              </p>
              <div>
                <div className="w-fit mb-5">
                  <p className="font-light text-xs lg:text-xl mb-1">
                    {headline[0].categories[0].name}
                  </p>
                  <div className="bg-white w-full h-[1px]"></div>
                </div>
                <Link href={"/article/" + headline[0].title_slug}>
                  <p className="text-lg lg:text-3xl font-bold hover:underline">
                    {headline[0].title}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="grid grid-cols-3 gap-x-5 mt-7">
        {data.map((val, i) => {
          return <Card val={val} i={i + 1} isOne={true} />;
        })}
      </div> */}
    </>
  );
}
