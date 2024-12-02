import React from "react";
import Link from "next/link";
import ReactTimeago from "react-timeago";
import Image from "next/image";

export default function Card({ val, i, isOne }) {
  // const created = val?.created_at.split(" ");
  const formatDate = () => {
    // Parse string tanggal ke objek Date
    const date = new Date(val.created_at);

    // Objek lokalisasi untuk mendapatkan nama bulan dalam bahasa Indonesia
    const options = { year: "numeric", month: "long", day: "numeric" };

    // Format tanggal menggunakan toLocaleDateString dengan options di atas
    return date.toLocaleDateString("en-EN", options);
  };
  return (
    <>
      <div className="bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl p-3 lg:p-4 rounded-lg mb-2 text-gray-700">
        {isOne && i < 2 ? (
          <>
            {val.image_url ? (
              <div
                className="w-full h-[120px] lg:h-[150px] overflow-hidden rounded-md flex items-end relative"
                style={{
                  backgroundImage: `url(${val.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              />
            ) : (
              <div
                className="w-full h-[120px] lg:h-[150px] overflow-hidden rounded-md flex items-end relative"
                style={{
                  backgroundImage: `url(${
                    process.env.NEXT_PUBLIC_BASE_URL + val.image_big
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              />
            )}
          </>
        ) : !isOne ? (
          <>
            {val.image_url ? (
              <div
                className="w-full h-[120px] lg:h-[150px] overflow-hidden rounded-md flex items-end relative"
                style={{
                  backgroundImage: `url(${val.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              />
            ) : (
              <div
                className="w-full h-[120px] lg:h-[150px] overflow-hidden rounded-md flex items-end relative"
                style={{
                  backgroundImage: `url(${
                    process.env.NEXT_PUBLIC_BASE_URL + val.image_big
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
              />
            )}
          </>
        ) : (
          ""
        )}
        <div className="flex space-x-1">
          {val.is_category === "1" &&
            val.categories.map((category, x) => {
              return (
                <p
                  key={x}
                  className={`font-light text-[10px] lg:text-xs ${
                    isOne && i === 0 ? "mt-3" : !isOne ? "mt-3" : ""
                  }`}
                >
                  {" "}
                  {category?.name}{" "}
                  {x % 2 == 0 && val.categories.length > 1 ? " | " : ""}
                </p>
              );
            })}
        </div>
        <p className={`font-light text-[10px] lg:text-xs mb-2 mt-2`}>
          {/* <ReactTimeago date={val.created_at} /> */}
          {val.is_time === "1" && formatDate()}
        </p>
        <Link href={"/article/" + val.title_slug}>
          <p className="text-xs lg:text-[16px] leading-normal font-semibold hover:underline ">
            {val.title}
          </p>
        </Link>
      </div>
    </>
  );
}
