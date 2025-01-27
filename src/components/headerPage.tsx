import HeaderLogo from "./ui/headerLogo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const HeaderPage = () => {
  return (
    <>
      <header className="w-full fixed top-0 inset-x-0 z-20 h-[59px] bg-background flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl px-5 lg:px-0">
          <a className="flex items-center gap-x-2 text-indigo-700">
            <HeaderLogo />
            <h4 className="italic font-bold">Movie Z</h4>
          </a>
          <div className="relative hidden lg:flex items-center gap-x-3">
            <Button >Genre</Button>
            <Input type="text" placeholder="Search..." />
          </div>
        </div>
      </header>
    </>
  );
};
