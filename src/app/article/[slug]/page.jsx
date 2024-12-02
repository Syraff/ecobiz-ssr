import Latest from "@/components/Home/Latest";
import axios from "axios";
import SlugComp from "@/components/slug/SlugComp";
import React from "react";
import IndexSlug from "@/components/slug/IndexSlug";

export async function generateMetadata({ params }) {
  const { data } = await axios.get(
    "https://admin.ecobiz.asia/api/posts/detail/" + params.slug
  );
  const detail = data.data.post;

  if (params.category && !params.slug)
    return {
      title: "Ecobiz" + " | " + params.category.split("-").join(" "),
      // description: "resMetadata.description",
    };

  var img = "";
  if (detail?.image_big) img = "https://admin.ecobiz.asia/" + detail?.image_big;
  else img = detail?.image_url;

  if (params.slug)
    return {
      title: "Ecobiz" + " | " + detail?.title,
      description: data?.data?.meta_keywords,
      keywords: data?.data?.meta_keywords,
      openGraph: {
        images: [img],
      },
      // description: "resMetadata.description",
    };
}

export default function DetailPage({ params }) {
  return (
    <>
      <IndexSlug params={params} />
    </>
  );
}
