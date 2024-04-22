"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusIcon } from "@radix-ui/react-icons";
import { MinusIcon } from "@radix-ui/react-icons";
import "./style.css";
import { useEffect } from "react";

export function FAQ() {
  const accordionItemsContent = [
    {
      title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
  ];

  useEffect(() => {
    function setupAccordionObserver(
      accordionTriggerClass: string,
      minusIconClass: string,
      plusIconClass: string
    ) {
      const accordionTrigger = document.querySelector(accordionTriggerClass);
      const minusIcon = document.querySelector(minusIconClass);
      const plusIcon = document.querySelector(plusIconClass);

      if (accordionTrigger && minusIcon && plusIcon) {
        const observer = new MutationObserver((mutationsList, observer) => {
          const newState = accordionTrigger.getAttribute("data-state");
          if (newState === "closed") {
            setTimeout(() => {
              plusIcon.classList.remove("hidden");
              minusIcon.classList.add("hidden");
            }, 200);
          } else if (newState === "open") {
            setTimeout(() => {
              minusIcon.classList.remove("hidden");
              plusIcon.classList.add("hidden");
            }, 200);
          }
        });

        observer.observe(accordionTrigger, { attributes: true });
      }
    }

    accordionItemsContent.forEach((item, index) => {
      setupAccordionObserver(
        `.accordionTrigger${index + 1}`,
        `.minusIcon${index + 1}`,
        `.plusIcon${index + 1}`
      );
    });
  }, []);

  const accordionItems = accordionItemsContent.map((item, index) => (
    <AccordionItem
      key={`item-${index + 1}`}
      value={`item-${index + 1}`}
      className="bg-[#E3F1FF] px-4 rounded-[8px] lg:px-6"
    >
      <AccordionTrigger
        className={`hover:no-underline accordionTrigger${index + 1}`}
      >
        <p className="text-[#172026] text-left w-10/12 lg:text-[18px]">
          {item.title}
        </p>
        <PlusIcon
          className={`plusIcon${
            index + 1
          } h-[24px] w-[24px] ease-in-out duration-300`}
        />
        <MinusIcon
          className={`minusIcon${
            index + 1
          } h-[24px] w-[24px] ease-in-out duration-300 hidden`}
        />
      </AccordionTrigger>
      <AccordionContent className="text-[#36485C] text-[16px] lg:w-[650px] lg:text-[18px] leading-[28px]">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  ));

  return (
    <div className="py-12 flex flex-col gap-y-6 lg:flex-row lg:gap-x-6">
      <div className="flex flex-col gap-y-4 w-full justify-start lg:basis-2/5 lg:py-8 lg:pr-[56px]">
        <h3 className="text-[14px] font-medium text-[#EB2891] lg:text-[16px]">
          Frequently Asked Questions
        </h3>
        <h1 className="text-[24px] leading-9 font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
          Let’s clarify some of your questions
        </h1>
        <p className="text-[16px] text-[#36485C] lg:text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full faqAccordion flex flex-col gap-y-4 lg:basis-3/5"
      >
        {accordionItems}
      </Accordion>
    </div>
  );
}
