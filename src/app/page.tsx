import { HomePage, } from "@/components/homePage";
import { HeaderPage } from "@/components/headerPage";
import { SwiperSection } from "@/components/swiperPage";
import { UpcomingSection } from "@/components/upcomingSection";
import { PopularSection } from "@/components/popularSection";
import { TopRatedSection } from "@/components/topRatedSection";
import { FooterSection } from "@/components/footerSection";


export default function Home() {

  return (
    <div className="w-full h-screen bg-white-500 flex flex-col">
      <HomePage/>
      <HeaderPage/>
      <SwiperSection/>
      <UpcomingSection/>
      <PopularSection/>
      <TopRatedSection/>
      <FooterSection/>
    </div>
  );
}
