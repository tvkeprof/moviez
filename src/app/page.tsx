import { HomePage, } from "@/components/homePage";
import { HeaderPage } from "@/components/headerPage";


export default function Home() {

  return (
    <div className="w-full h-screen bg-white-500">
      <HomePage/>
      <HeaderPage/>
    </div>
  );
}
