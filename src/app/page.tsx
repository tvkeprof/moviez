import { HomePage, } from "@/components/homePage";
import { HeaderPage } from "@/components/headerPage";
import { SwiperSection } from "@/components/swiperPage";


export default function Home() {

  return (
    <div className="w-full h-screen bg-white-500 flex flex-col">
      <HomePage/>
      <HeaderPage/>
      <SwiperSection/>
    </div>
  );
}
