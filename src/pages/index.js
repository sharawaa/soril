import ColorSection from "@/components/ColorSection";
import Comment from "@/components/Comment";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import One from "@/components/One";
import Statistics from "@/components/Statistics";
import Three from "@/components/Three";
import Youtube from "@/components/Youtube";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Header />
      </div>
      <div className="colorSection flex flex-col items-center">
        <ColorSection />
      </div>
      {/* <div className="h-[400px]">
        <Statistics />
      </div> */}
      <div className=" mt-[60px]">
        <Three />
      </div>
      <div>
        <One />
      </div>
      <div className="flex flex-col items-center bg-gray-200 mt-[60px]">
        <Youtube />
      </div>
      <div>
        <Comment />
      </div>
      <div className="flex flex-col items-center h-[177px] w-100">
        <Footer />
      </div>
    </>
  );
}
