import Image from "next/image";
import Check from "../../public/assets/check.svg"
import Checkwhite from "../../public/assets/check-white.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export function Pricing() {
    return (
      <>
        <div className="w-full flex flex-col items-center justify-center py-12 lg:pt-[60px]">
          <h1 className="font-medium text-[24px] leading-[36px] text-[#172026] lg:text-[42px]">
            Flexible plans for you
          </h1>
          <p className="text-[16px] text-[#36485C] mb-10 lg:mb-[64px] lg:mt-[16px] lg:text-[18px]">
            No hidden fees!
          </p>

          <div className="flex flex-col gap-y-6 w-full lg:flex-row gap-4">
            <div className="bg-[#F5F4FF] flex flex-col gap-y-4 p-6 rounded-[8px] lg:w-1/3 lg:gap-y-8">
              <div className="flex flex-col gap-y-3 lg:gap-y-4">
                <h1 className="text-[#4328EB] font-medium text-[18px] lg:text-[20px]">
                  Free Trial
                </h1>
                <p className="text-[#36485C] lg:text-[18px]">
                  Perfect for testing the waters
                </p>
              </div>

              <div className="flex gap-x-[2px]">
                <p className="font-medium text-[#172026] text-[24px] lg:text-[32px]">
                  $0
                </p>
                <p className="font-medium text-[24px] text-[#5F7896] lg:text-[32px]">
                  /mo
                </p>
              </div>

              <ul className="flex flex-col gap-y-2">
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image src={Check} alt=""></Image>
                  </span>
                  <span className="text-[#36485C]">
                    Lorem ipsum dolor sit amet
                  </span>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image src={Check} alt=""></Image>
                  </span>
                  <span className="text-[#36485C]">
                    Sed do eiusmod tempor incididunt
                  </span>
                </li>
                <li className="flex gap-x-4 items-center lg:mb-[60px]">
                  <span>
                    <Image src={Check} alt=""></Image>
                  </span>
                  <span className="text-[#36485C]">
                    Consectetur adipiscing elit
                  </span>
                </li>
              </ul>

              <button className="text-[#4328EB] font-medium rounded-[4px] bg-white py-[14px] px-[30px]">
                Start Trial
              </button>
            </div>

            <div className="bg-[#4328EB] flex flex-col gap-y-4 p-6 rounded-[8px] lg:w-1/3 lg:gap-y-8">
              <div className="flex flex-col gap-y-3">
                <h1 className="text-white font-medium text-[18px] lg:text-[20px]">
                  Business
                </h1>
                <p className="text-[#F4F8FA] lg:text-[18px]">
                  Perfect for small businesses
                </p>
              </div>
              <div className="flex gap-x-[2px]">
                <h1 className="text-white font-medium text-[24px] lg:text-[32px]">
                  $500
                </h1>
                <span className="text-[#F4F8FA] font-medium text-[24px] lg:text-[32px]">
                  /mo
                </span>
              </div>

              <ul className="flex flex-col gap-y-2">
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image
                      className="text-[#F4F8FA]"
                      src={Checkwhite}
                      alt=""
                    ></Image>
                  </span>
                  <span className="text-[#F4F8FA]">
                    Lorem ipsum dolor sit amet
                  </span>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image
                      className="text-[#F4F8FA]"
                      src={Checkwhite}
                      alt=""
                    ></Image>
                  </span>
                  <span className="text-[#F4F8FA]">
                    Sed do eiusmod tempor incididunt
                  </span>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image
                      className="text-[#F4F8FA]"
                      src={Checkwhite}
                      alt=""
                    ></Image>
                  </span>
                  <span className="text-[#F4F8FA]">
                    Consectetur adipiscing elit
                  </span>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image
                      className="text-[#F4F8FA]"
                      src={Checkwhite}
                      alt=""
                    ></Image>
                  </span>
                  <span className="text-[#F4F8FA]">
                    Lorem ipsum dolor sit amet
                  </span>
                </li>
                <li className="flex gap-x-4 items-center">
                  <span>
                    <Image
                      className="text-[#F4F8FA]"
                      src={Checkwhite}
                      alt=""
                    ></Image>
                  </span>
                  <span className="text-[#F4F8FA]">
                    Sed do eiusmod tempor incididunt
                  </span>
                </li>
              </ul>

              <button className="text-[#4328EB] font-medium rounded-[4px] bg-white py-[14px] px-[30px]">
                Get Started
              </button>
            </div>

            <div className="bg-[#F5F4FF] flex flex-col gap-y-4 p-6 rounded-[8px] lg:w-1/3 lg:gap-y-8">
              <div className="flex flex-col gap-y-3 lg:gap-y-4">
                <h1 className="text-[#4328EB] font-medium text-[18px] lg:text-[20px]">
                  Enterprise
                </h1>
                <p className="text-[#36485C] lg:text-[18px]">
                  Perfect for big companies
                </p>
              </div>
              <span className="text-[24px] font-medium text-[#172026] lg:text-[32px]">
                Custom
              </span>
              <span className="text-[#36485C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. <br />
                <br />
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.
              </span>
              <button className="text-[#4328EB] font-medium rounded-[4px] bg-white py-[14px] px-[30px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </>
    );
}