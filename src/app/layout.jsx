import { Inter } from "next/font/google";
import "./globals.css";
// import "../assets/script";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata({ params }) {
//   if (params.category && !params.slug)
//     return {
//       title: "Coal Metal" + " " + params.category,
//       description: "resMetadata.description",
//     };

//   if (params.slug && params.category)
//     return {
//       title: "Coal Metal" + " " + params.slug,
//       description: "resMetadata.description",
//     };
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container mt-4 mx-auto min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
