"use client";
import { Breadcrumbs, ThemeProvider } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import parse from "html-react-parser";
import {
  FacebookShare,
  WhatsappShare,
  TwitterShare,
  LinkedinShare,
} from "react-share-kit";
import { usePathname } from "next/navigation";
import HandleThumb from "./HandleThumb";

export default function SlugComp({ params }) {
  // const { category, slug } = useParams();
  const pathname = usePathname();
  const window = "https://ecobiz.asia" + pathname;

  const [detail, setDetail] = useState({});
  const [ads_banner, setAds_banner] = useState();

  const fetchDetail = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "/api/posts/detail/" + params.slug
      );
      setDetail(data.data);
      setAds_banner(data.data.ads);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = () => {
    // Parse string tanggal ke objek Date
    const date = new Date(detail?.post?.created_at);

    // Objek lokalisasi untuk mendapatkan nama bulan dalam bahasa Indonesia
    const options = { year: "numeric", month: "long", day: "numeric" };

    // Format tanggal menggunakan toLocaleDateString dengan options di atas
    return date.toLocaleDateString("en-EN", options);
  };

  useEffect(() => {
    fetchDetail();
  }, [params.slug]);

  return (
    <>
      <ThemeProvider>
        <div className="hidden lg:block mb-4">
          <Breadcrumbs>
            <Link href="/" className="opacity-60 hover:text-red">
              Home
            </Link>
            <Link
              href={"/" + detail?.post?.categories[0].name}
              className="opacity-60 hover:text-red"
            >
              {detail?.post?.categories[0].name}
            </Link>
            <p className="hover:text-red font-semibold max-w-[620px] truncate ">
              {params.slug.split("-").join(" ")}
            </p>
          </Breadcrumbs>
        </div>
        <div className="bg-white px-5 py-1 pb-7 rounded-lg w-full mt-4 lg:mt-0">
          <div className="mt-4 lg:mt-6 text-center mb-5">
            <p className="font-bold text-xl lg:text-4xl text-gray-800 mt-2 mb-0 lg:leading-[48px]">
              {detail?.post?.title}
            </p>

            <p className="mt-3 text-gray-600 text-xs lg:text-md font-normal">
              By {detail?.post?.username}{" "}
              {/* <span className="text-red"></span> */}
            </p>
            <p className="font-light text-[10px] lg:text-xs text-gray-600 mt-3">
              {detail?.post?.categories.map((category, x) => {
                return <span key={x}>{category.name} | </span>;
              })}
              {/* <ReactTimeago date={detail?.post?.created_at} /> */}
              {formatDate() +
                " " +
                detail?.post?.created_at.split(" ")[1].split(":")[0] +
                ":" +
                detail?.post?.created_at.split(" ")[1].split(":")[1] +
                " UTC+7"}
            </p>
          </div>
          <HandleThumb detail={detail} />
          <div
            className="lg:content lg:flex flex-col space-y-2 text-[16px] text-black lg:text-md mt-7 gap-y-[14px] lg:gap-y-4"
            style={{ fontSize: "16px" }}
          >
            <div className="flex flex-col space-y-2">
              {parse(detail?.post?.content_1 || "")}
            </div>
            <div className="container mx-auto mt-4 flex flex-col items-center">
              {ads_banner && (
                <>
                  {ads_banner.map((ads, i) => (
                    <Link href={`${ads?.url}`} key={i} target="_blank">
                      <img
                        src={
                          // process.env.NEXT_PUBLIC_BASE_URL +
                          ads?.file_paths?.image[0]
                        }
                        className="max-h-[150px]"
                        alt=""
                      />
                    </Link>
                  ))}
                </>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              {parse(detail?.post?.content_2 || "")}
            </div>
          </div>
          {detail?.additional_files?.length > 0 && (
            <div className="mt-10">
              <p>Attachment :</p>
              {detail?.additional_files?.map((file, z) => {
                return (
                  <Link href={file.file_url} key={z} target="_blank">
                    <p className="px-3 py-2 bg-gray-200 w-fit rounded mt-2 text-blue-600 text-md font-normal capitalize max-w-[320px] lg:max-w-full truncate">
                      PDF:{" "}
                      {file.file_name.split(".pdf")[0].split("-").join(" ")}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
          {/* <p className="mb-3 mt-10">Viewers: {detail?.post?.hit}</p> */}
          <div className="mt-10">
            {detail?.post_tags?.length > 1 ? (
              <div className="flex space-x-2 mb-3 flex-wrap">
                <p className="">Tag: </p>
                {detail?.post_tags?.map((tag, i) => {
                  return (
                    <Link key={i} href={"/tag/" + tag.tag_slug}>
                      <p className="px-2 py-1 bg-gray-300 rounded mb-3">
                        {tag.tag}
                      </p>
                    </Link>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            <p className="mb-3">Share button:</p>
            <div className="flex gap-x-3">
              <FacebookShare
                url={window}
                size={"42px"}
                title={detail?.post?.title}
                ima
              />
              <WhatsappShare
                url={window}
                size={"42px"}
                title={detail?.post?.title}
              />
              <TwitterShare
                url={window}
                size={"42px"}
                title={detail?.post?.title}
              />
              <LinkedinShare
                url={window}
                size={"42px"}
                title={detail?.post?.title}
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
