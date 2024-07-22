import Latest from "@/components/Home/Latest";
import SearchComp from "@/components/search/SearchComp";
import React from "react";

export async function generateMetadata({ params }) {
  if (params.category && !params.slug)
    return {
      title: "Ecobiz" + " | " + params.category.split("-").join(" "),
      // description: "resMetadata.description",
    };

  if (params.slug && params.category)
    return {
      title: "Ecobiz" + " | " + params.slug.split("-").join(" "),
      // description: "resMetadata.description",
    };
  return {
    title: "Ecobiz" + " | " + "Search: " + params.search,
  };
}

export default function page({ params }) {
  return (
    <>
      <div className="px-3">
        <div className="lg:grid lg:grid-cols-10 gap-x-10">
          <div className="col-span-7">
            <SearchComp params={params} />
          </div>
          <div className="col-span-3 lg:mt-0 mt-5">
            <Latest />
          </div>
        </div>
      </div>
    </>
  );
}
