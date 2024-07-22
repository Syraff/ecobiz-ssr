// "use client";
import React from "react";
import Latest from "@/components/Home/Latest";
import CategoryComp from "@/components/category/CategoryComp";

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
}

export default function CategoryPage({ params }) {
  return (
    <>
      <div className="px-3">
        <div className="lg:grid lg:grid-cols-10 gap-x-10">
          <div className="col-span-7">
            <CategoryComp params={params} />
          </div>
          <div className="col-span-3 lg:mt-0 mt-5">
            <Latest />
          </div>
        </div>
      </div>
    </>
  );
}
