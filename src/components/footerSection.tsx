"use client";

import HeaderLogo from "./ui/headerLogo";
import MailSvg from "./ui/mailSvg";

export const FooterSection = () => {
  return (
    <div className="w-full h-[220px] bg-[#4338CA]">
      <div>
        <a className="flex items-center gap-x-2 text-indigo-700">
          <HeaderLogo className="stroke-[#4338CA]" />
          <h4 className="italic font-bold text-white">Movie Z</h4>
          <h1 className="text-white">© 2024 Movie Z. All Rights Reserved.</h1>
        </a>
      </div>
      <div>
        <div>
            <h4>Contact Information</h4>
            <div>
                <div>
                    <MailSvg/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
