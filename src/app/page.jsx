import HomeIndex from "@/components/Home/HomeIndex";

export async function generateMetadata({ params }) {
  if (params.category && !params.slug)
    return {
      title: "Ecobiz" + " | " + params.category,
    };

  if (params.slug && params.category)
    return {
      title: "Ecobiz" + " | " + params.slug,
    };

  return {
    title: "Ecobiz" + " | " + "Home",
  };
}

export default function HomePage() {
  return (
    <>
      <HomeIndex />
    </>
  );
}
