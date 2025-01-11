import { Logo } from "@/exports/ui";

const Navbar = () => {
  return (
    <nav className="z-10 text-md fixed bg-primary h-[65px] top-0 w-full flex items-center justify-between p-4">
      {/* Logo */}
      <a href="#hero">
        <Logo />
      </a>
      {/* Nav Items */}
      <ul className="hidden lg:flex gap-8 uppercase">
        <a href="#about">
          <li className="nav-item">About Me</li>
        </a>

        <a href="#experience">
          <li className="nav-item">Career</li>
        </a>

        <a href="#projects">
          <li className="nav-item">Projects</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
