import Image from "next/image";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import blueArrowBtn from "../../public/assets/blue-button.svg";
import greenArrowBtn from "../../public/assets/green-button.svg";
import pinkArrowBtn from "../../public/assets/pink-button.svg";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      {/* Feature 1 */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-6">
            Sales Monitoring
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-[10px] pt-6 text-[#0085FF] font-medium py-2 lg:mt-8 lg:text-[18px]">
            Learn More
            <span>
              <Image src={blueArrowBtn} alt="Learn More."></Image>
            </span>
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="feature 2 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px]">
            Customer Support
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Get in touch with your customers
          </h1>
          <Image
            src={Feature2}
            alt="feature 2 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>

          <ul className="flex flex-col gap-y-3">
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Consectetur adipiscing elit
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C] lg:text-[18px]">
              <span>
                <Image src={Check} alt="check mark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore
            </li>
          </ul>

          <p className="flex items-center gap-x-[10px] pt-6 text-[#00A424] font-medium py-2 lg:mt-8 lg:text-[18px]">
            Learn More
            <span>
              <Image src={greenArrowBtn} alt="Learn More."></Image>
            </span>
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="feature 3 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px]">
            Growth Monitoring
          </h3>
          <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Monitor your site’s new subscribers
          </h1>
          <Image
            src={Feature3}
            alt="feature 3 image"
            className="pt-6 sm:hidden"
          />
          <p className="py-6 text-[#36485C] lg:text-[18px] lg:leading-[28px]">
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a bird's eye view with our customizable
            dashboard.
          </p>

          <div className="flex gap-x-6">
            <div className="flex flex-col gap-y-3 w-1/2">
              <span className="font-medium text-[#172026] text-[20px] lg:text-[32px]">
                100+
              </span>
              <span className="text-[##36485C]">
                Lorem ipsum dolor sit
              </span>
            </div>

            <div className="flex flex-col gap-y-3 w-1/2">
              <span className="font-medium text-[#172026] text-[20px] lg:text-[32px]">
                800+
              </span>
              <span className="text-[##36485C]">
                Conse adipiscing elit
              </span>
            </div>
          </div>

          <p className="flex items-center gap-x-[10px] pt-6 text-[#EB2891] font-medium py-2 lg:mt-8 lg:text-[18px]">
            Learn More
            <span>
              <Image src={pinkArrowBtn} alt="Learn More."></Image>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
