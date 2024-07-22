import Latest from "@/components/Home/Latest";
import TagComp from "@/components/tag/TagComp";
import React from "react";

export async function generateMetadata({ params }) {
  if (params.hashtag)
    return {
      title: "Ecobiz" + " | " + "Tag: " + params.hashtag.split("-").join(" "),
      // description: "resMetadata.description",
    };
}

export default function page({ params }) {
  return (
    <>
      <div className="px-3">
        <div className="lg:grid lg:grid-cols-10 gap-x-10">
          <div className="col-span-7">
            <TagComp params={params} />
          </div>
          <div className="col-span-3 lg:mt-0 mt-5">
            <Latest />
          </div>
        </div>
      </div>
    </>
  );
}
