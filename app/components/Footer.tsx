import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import X from "../../public/assets/X.svg";
import Facebook from "../../public/assets/Facebook.svg";
import Feed from "../../public/assets/Feed.svg";
import FooterItems  from "./FooterItems";

export function Footer() {
  const accordionItems = [
    {
      name: "Features",
      content: [
        {
          name: "Growth",
        },
        {
          name: "Sales",
        },
        {
          name: "Chat",
        },
      ],
    },
    {
      name: "Pricing",
      content: [
        {
          name: "Free Trial",
        },
        {
          name: "Standard",
        },
        {
          name: "Business",
        },
      ],
    },
    {
      name: "Enterprise",
      content: [
        {
          name: "Personalize",
        },
        {
          name: "Automation",
        },
        {
          name: "Invoicing",
        },
        {
          name: "24/7 Support",
        },
      ],
    },
    {
      name: "Careers",
      content: [
        {
          name: "Open Positions",
        },
        {
          name: "Part-time",
        },
        {
          name: "Contractual",
        },
        {
          name: "Contact Us",
        },
      ],
    },
  ];

  const accordionContent = accordionItems.map((item, index) => (
    <AccordionItem key={index} value={`${index}`} className="border-0">
      <AccordionTrigger className="hover:no-underline text-[16px] text-[#36485C]">
        {item.name}
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex flex-col gap-y-4 pl-4">
          {item.content.map((item, index) => (
            <p key={index} className="text-[14px] text-[#36485C]">
              {item.name}
            </p>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  ));

  // const listItems = accordionItems.map((item, index) => (
  //   <li key={index} className="text-[14px] text-[#36485C]">
  //     {item.name}
  //   </li>
  // ))}

  return (
    <>
      <div className="pt-[80px] w-full flex flex-col gap-y-[56px] pb-10">
        <div className="flex w-full gap-[297px]">
          <div className="flex items-center gap-3 w-max lg:h-max lg:min-w-[138px]">
            <Image src={Logo} alt="logo" />
            <span className="text-[#36485C] text-[17px] font-[700]">
              YOUR SITE
            </span>
          </div>

          <div className="w-full hidden gap-6 lg:flex justify-between">
            <FooterItems>
              <span>Features</span>
              <span>Growth</span>
              <span>Sales</span>
              <span>Chat</span>
            </FooterItems>

            <FooterItems>
              <span>Pricing</span>
              <span>Free Trial</span>
              <span>Standard</span>
              <span>Business</span>
            </FooterItems>

            <FooterItems>
              <span>Enterprise</span>
              <span>Personalize</span>
              <span>Automation</span>
              <span>Invoicing</span>
              <span>24/7 Support</span>
            </FooterItems>

            <FooterItems>
              <span>Careers</span>
              <span>Open Positions</span>
              <span>Part-Time</span>
              <span>Contractual</span>
              <span>Contact Us</span>
            </FooterItems>
          </div>
        </div>

        <div className="w-full lg:hidden">
          <Accordion type="single" collapsible className="w-full">
            {accordionContent}
          </Accordion>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-[40px] w-full lg:flex-row lg:justify-between">
          <span className="text-[14px] font-medium text-[#5F7896] lg:text-[16px]">
            © Copyright 2024. Your Site. All rights reserved.
          </span>
          <div className="gap-x-[56px] flex justify-between items-center">
            <Image src={X} alt="X-image"></Image>
            <Image src={Facebook} alt="Facebook-image"></Image>
            <Image src={Feed} alt="Feed-image"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
