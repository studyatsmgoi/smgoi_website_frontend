import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "../theme/ModeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  logo: string;
  fullName: string;
  shortName: string;
  slogan: string;
  navLinks: { title: string; path: string; icon?: React.ReactNode }[];
}

function Header({ logo, fullName, shortName, navLinks, slogan }: HeaderProps) {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-1 flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
          title="logo"
        >
          <img src={logo} alt="logo" className="h-8 w-8" />
          <p className="hidden sm:block font-bold">{fullName}</p>
          <p className="block lg:hidden font-bold">{shortName}</p>
        </Link>
        {navLinks.map((link) => (
          <Link
            to={link.path}
            key={link.title}
            className={`text-lg font-medium text-gray-700 hover:text-primary ${
              location.pathname === link.path ? "text-primary" : undefined
            } `}
          >
            {link.title}
          </Link>
        ))}
        {/* ModeToggle added for large devices */}
        <div className="ml-auto hidden md:block">
          <ModeToggle />
        </div>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Menu with navigation links
          </SheetDescription>

          <nav className="grid gap-6 text-lg font-medium">
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="logo" className="h-10 w-10 mb-2" />
              <p className="font-bold">{shortName}</p>
              <p className="text-gray-400 font-thin text-xs">{slogan}</p>
            </div>
            <Separator />
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <SheetClose asChild>
                    <Link to={link.path}>
                      <Button
                        variant="outline"
                        className={`w-full gap-4 text-left text-lg text-gray-700 font-medium hover:text-primary ${
                          location.pathname === link.path
                            ? "text-primary"
                            : undefined
                        }`}
                      >
                        {link.icon} {link.title}
                      </Button>
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <Separator />
            <footer className="flex flex-col items-center gap-2">
              <p className="text-gray-400 font-thin text-xs">{slogan}</p>
              <p>
                &copy; {new Date().getFullYear()} {shortName}
              </p>
            </footer>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-between md:ml-auto md:hidden ml-4">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold"
          title="logo"
        >
          <img src={logo} alt="logo" className="h-8 w-8" />
          <p className="block lg:hidden font-bold">{shortName}</p>
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
