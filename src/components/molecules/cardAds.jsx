import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

export default function CardAds({ val, i, isOne }) {
  // const created = val?.created_at.split(" ");
  const formatDate = () => {
    // Parse string tanggal ke objek Date
    const date = new Date(val.created_at);

    // Objek lokalisasi untuk mendapatkan nama bulan dalam bahasa Indonesia
    const options = { year: "numeric", month: "long", day: "numeric" };

    // Format tanggal menggunakan toLocaleDateString dengan options di atas
    return date.toLocaleDateString("id-ID", options);
  };
  return (
    <>
      <div className="bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl p-3 lg:p-4 rounded-lg mb-2 text-gray-700">
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
                process.env.NEXT_PUBLIC_BASE_URL +
                val?.file_paths?.image_980x150[0]
              })`,
              backgroundSize: "cover",
              backgroundPosition: " center",
            }}
          />
        )}
        <Link href={val.url}>
          <p className="text-xs lg:text-[16px] leading-normal font-semibold hover:underline mt-5">
            {parse(val.content || "")}
          </p>
        </Link>
      </div>
    </>
  );
}
