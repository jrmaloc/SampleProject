import Image from "next/image";
import Gradient from "../../public/assets/Gradient.svg";
import Arrow from "../../public/assets/arrow.png";

export function CTA() {
  return (
    <>
      <div className="relative flex w-full justify-center bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-[16px]">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[418px] w-full object-cover rounded-[16px] lg:h-[572px]"
        />
        <div className="absolute top-[56px] px-8 lg:top-[88px]">
          <h1 className="text-[32px] text-center text-white font-medium lg:text-[56px] lg:w-[628px]">
            Monitor your website like a pro
          </h1>
          <h5 className="text-center mt-6 text-white lg:mt-12 lg:text-[18px]">
            Join over 800+ happy site owners boosting productivity and
            efficiency!
          </h5>

          <div className="flex gap-y-8 mt-[40px] w-[160px] mx-auto justify-center flex-col lg:mt-[56px] lg:w-[358px] lg:gap-x-[40px] lg:items-center lg:flex-row">
            <button className="rounded-[4px] bg-white text-[#EB2891] font-medium px-8 py-4 lg:w">
              Try for free
            </button>

            <div className="flex gap-x-3">
              <span className="font-medium text-[18px] text-white">
                Contact Sales
              </span>
              <span>
                <Image src={Arrow} alt="arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
