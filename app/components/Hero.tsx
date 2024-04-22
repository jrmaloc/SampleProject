import Image from "next/image";
import blueArrowBtn from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import TrustPilot from "../../public/assets/TrustPilot.svg";
import Cnn from "../../public/assets/Cnn.svg";
import Clutch from "../../public/assets/Clutch.svg";

export default function Hero() {
  return (
    <>
      <div className="pt-4 lg:pt-10">
        <div className="px-[20px] lg:px-[280px]">
          <h1 className=" text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
            Start monitoring your website like a pro
          </h1>
          <p className="text-center pt-[24px] text-[#36485C] lg:text-[18px] lg:leading-7">
            Get a bird's eye view with our customizable dashboard. Stay on top
            of things! Revamp your work process with our game-changing feature.
            Boost productivity and efficiency!
          </p>

          <div className="flex w-full pt-8 justify-center gap-x-6">
            <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
              Try for free
            </button>
            <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
              View Pricing
              <span>
                <Image src={blueArrowBtn} alt="Learn More" />
              </span>
            </button>
          </div>
        </div>

        <div className="relative flex h-full w-full justify-center">
          <Image
            src={Gradient}
            alt="Gradient"
            className="min-h-[500px] w-full object-cover lg:h-auto"
          />

          <div className=" absolute bottom-5 flex w-full flex-col items-center">
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]"
            ></Image>

            <div className="flex w-full flex-col items-center 2xl:container lg:flex-row lg:px-20 lg-text-[18px]">
              <p className="text-[#FFFFFF] text-center lg:text-nowrap lg:w-max">
                Trusted by these companies
              </p>

              <div className="grid grid-cols-3 items-center justify-center justify-items-center px-5 align-middle lg:grid-cols-5 lg:justify-between lg:w-full">
                <Image src={Google} alt="" />
                <Image src={Slack} alt="" />
                <Image src={TrustPilot} alt="" />
                <Image src={Cnn} alt="" />
                <Image src={Clutch} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
