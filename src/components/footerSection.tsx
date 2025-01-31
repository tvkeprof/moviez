"use client";

import HeaderLogo from "./ui/headerLogo";
import MailSvg from "./ui/mailSvg";
import PhoneSvg from "./ui/phoneSvg";

export const FooterSection = () => {
  return (
    <div className="w-full h-[220px] bg-[#4338CA]  flex flex-col justify-between gap-y-7 lg:flex-row p-[30px]">
      <div>
        <a className="flex flex-col gap-x-2 text-indigo-700">
          <HeaderLogo className="stroke-[#4338CA]" />
          <h4 className="italic font-bold text-white">Movie Z</h4>
          <h1 className="text-white">© 2024 Movie Z. All Rights Reserved.</h1>
        </a>
      </div>
      <div className="flex gap-x-12 lg:gap-x-24">
        <div className="space-y-3">
          <h4>Contact Information</h4>
          <div>
            <div className="flex">
              <MailSvg />
              <div>
                <p>Email</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex">
              <PhoneSvg />
              <div>
                <p>Phone</p>
                <p>+976 88888888</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4>Follow us</h4>
          <div className="flex gap-3">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
