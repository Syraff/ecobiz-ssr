"use client";
import { Icon } from "@iconify/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [search, setSearch] = React.useState("");
  const router = useRouter();

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      router.push("/search/" + search);
      // console.log(search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className="flex items-center bg-[#4bd819]/30 rounded-lg p-[5.5px]"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="search"
          className="focus:outline-none text-sm py-1 px-2  rounded-l-md min-w-[220px] bg-white"
          placeholder="Search.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <div className="px-2 bg-[#4bd819] rounded-r-md py-[4px]">
            <Icon icon="mdi:search" fontSize={20} className="text-white" />
          </div>
        </button>
      </form>
    </div>
  );
}
