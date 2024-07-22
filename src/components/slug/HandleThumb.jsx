import React from "react";
import { Carousel } from "@material-tailwind/react";
import ReactPlayer from "react-player";

export default function HandleThumb({ detail }) {
  return (
    <>
      {detail?.post?.video_embed_code ? (
        <div className="rounded-md w-full mt-4">
          <ReactPlayer
            url={detail?.post?.video_embed_code}
            width={"100%"}
            height={"500px"}
            controls={true}
          />
        </div>
      ) : detail?.post?.video_url ? (
        <>
          <div className="rounded-md w-full mt-4">
            <ReactPlayer
              url={process.env.NEXT_PUBLIC_BASE_URL + detail?.post?.video_url}
              width={"100%"}
              height={"500px"}
              controls={true}
            />
          </div>
        </>
      ) : detail?.post?.image_url && !detail?.additional_images.length ? (
        <>
          <div
            className="w-full h-[200px] lg:h-[450px] overflow-hidden rounded-md flex items-end mt-4"
            style={{
              backgroundImage: `url(${detail?.post?.image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <p className="text-sm lg:text-md">{detail?.post?.image_caption}</p>
        </>
      ) : detail?.additional_images?.length > 0 ? (
        <>
          <Carousel
            autoplay={true}
            autoplayDelay={3000}
            loop={true}
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
            {detail?.post?.image_url ? (
              <div>
                <div
                  className="w-full h-[200px] lg:h-[450px] overflow-hidden rounded-md flex items-end mt-4"
                  style={{
                    backgroundImage: `url(${detail?.post?.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* <p className="text-sm lg:text-md">
                  {detail?.post?.image_caption}
                </p> */}
              </div>
            ) : (
              <div>
                <div
                  className="w-full h-[200px] lg:h-[450px] overflow-hidden rounded-md flex items-end mt-4"
                  style={{
                    backgroundImage: `url(${
                      process.env.NEXT_PUBLIC_BASE_URL + detail?.post?.image_big
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {/* <p className="text-sm lg:text-md">
                  {detail?.post?.image_caption}
                </p> */}
              </div>
            )}
            {detail?.additional_images.map((thumb, i) => {
              return (
                <div key={thumb.id}>
                  <div
                    className="w-full h-[200px] lg:h-[450px] overflow-hidden rounded-md flex items-end mt-4"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_BASE_URL + thumb.image_path
                      })`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
              );
            })}
          </Carousel>
          <p className="text-sm lg:text-md">{detail?.post?.image_caption}</p>
        </>
      ) : detail?.post?.image_big && !detail?.additional_images.length ? (
        <>
          <div>
            <div
              className="w-full h-[200px] lg:h-[450px] overflow-hidden rounded-md flex items-end mt-4"
              style={{
                backgroundImage: `url(${
                  process.env.NEXT_PUBLIC_BASE_URL + detail?.post?.image_big
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <p className="text-sm lg:text-md">{detail?.post?.image_caption}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
