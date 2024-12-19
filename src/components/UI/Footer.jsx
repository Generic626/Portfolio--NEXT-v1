import { Logo } from "@/exports/ui";

const Footer = () => {
  return (
    <section className="bg-footer p-8 flex justify-center">
      <div className="w-[80%] h-[50px] flex flex-col justify-center items-center gap-6">
        {/* Footer Row */}
        <div className="flex justify-center items-center gap-4">
          {/* Logo */}
          <a href="#hero">
            <Logo />
          </a>
          {/* Divider */}
          <div className="h-full border-r border-white"></div>
          {/* Trademark */}
          <span className="text-zinc-400 text-sm">
            2024 Matthew Fung © All rights reserved
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
