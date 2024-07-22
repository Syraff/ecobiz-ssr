"use client";
import React from "react";
import { Helmet } from "react-helmet";

const MetaSeo = ({ desc }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{desc.title || "Coal Metal | home"}</title>
      <meta property="og:title" content={desc.title} />
      <meta property="og:description" content={desc.description} />
      {/* <meta property="og:image" content="URL_Gambar_Halaman_Anda" /> */}
      <meta property="og:url" content={desc.url} />
      {/* <meta property="og:type" content="website" /> */}
      {/* <meta name="description" content={desc.description} /> */}
      <meta
        property="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta property="keyword" content={desc.keywords} />

      {/* Add more meta tags as needed */}
    </Helmet>
  );
};

export default MetaSeo;
