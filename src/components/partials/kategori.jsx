import axios from "axios";
import React from "react";
import Link from "next/link";

export default function Kategori({ isMobile, isDekstop }) {
  const [kategori, setKategori] = React.useState([]);

  const fetchKategori = async () => {
    try {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_BASE_URL + "api/menu_homepage"
      );
      const cat = data.data.menu;
      const tmp = [];
      for (let i = 0; i < cat.length; i++) {
        cat[i].sub_category = [];
        if (cat[i].parent_id === "0") tmp.push(cat[i]);
      }
      for (let i = 0; i < cat.length; i++) {
        if (cat[i].parent_id !== "0") {
          for (let x = 0; x < tmp.length; x++) {
            if (tmp[x].id === cat[i].parent_id)
              tmp[x].sub_category.push(cat[i]);
          }
        }
      }
      setKategori(tmp);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchKategori();
  }, []);
  return (
    <>
      {isDekstop && (
        <div className="flex gap-x-5 gap-y-3 flex-wrap">
          {kategori.map((val, i) => {
            return (
              <>
                <div
                  className={
                    val.sub_category.length ? "dropdown dropdown-hover" : ""
                  }
                  key={i}
                >
                  <Link href={"/" + val.slug}>
                    <div
                      tabIndex={0}
                      role="button"
                      className="capitalize text-[12px] text-black lg:text-sm hover:text-red hover:font-bold"
                    >
                      {val.name}
                    </div>
                  </Link>
                  <ul
                    tabIndex={0}
                    className={
                      val.sub_category.length
                        ? "dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                        : "hidden"
                    }
                  >
                    {val.sub_category.map((sub, x) => {
                      return (
                        <li key={x}>
                          <Link href={"/" + sub.slug}>{sub.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      )}
      {isMobile && (
        <div className="lg:hidden px-3 flex flex-col gap-y-3">
          {kategori.map((val, i) => {
            return (
              <>
                <Link href={"/" + val.slug} key={i}>
                  <p className="capitalize py-1 px-2 bg-base-200 rounded text-[12px] lg:text-sm ">
                    {val.name}
                  </p>
                </Link>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
