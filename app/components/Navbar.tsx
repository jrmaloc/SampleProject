import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const nav_links = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:mx-auto lg:container lg:px-[20px]">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex  pl-[74px] gap-x-[56px]">
          {nav_links.map((item, index) => (
            <p className="text-[#364B5C] font-medium" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-5">
        <p className="hidden lg:block text-[16px] font-medium text-[#364B5C] pr-[56px]">
          Open An Account
        </p>
        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span className="hidden font-medium text-[#364B5C] lg:block">
            Sign In
          </span>
        </div>
        <Image className="lg:hidden" src={Menu} alt="Menu Button" />
      </div>
    </nav>
  );
}
