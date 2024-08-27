import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/Header";
import Logo from "@/assets/logo.webp";
import { ThemeProvider } from "./components/theme/theme-provider";
import Home from "./pages/Home";
import Faculty from "./pages/Faculty";
import About from "./pages/About";
import Developer from "./pages/Developer";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import {
  HomeIcon,
  Presentation,
  Info,
  CodeXml,
  CircleHelp,
  Contact as ContactIcon,
} from "lucide-react";
import Footer from "./components/navigation/Footer";
import { Toaster } from "./components/ui/sonner";
function App() {
  const navLinks = [
    { title: "Home", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
    {
      title: "Faculty",
      path: "/faculty",
      icon: <Presentation className="h-5 w-5" />,
    },
    { title: "About", path: "/about", icon: <Info className="h-5 w-5" /> },
    {
      title: "Developer",
      path: "/developer",
      icon: <CodeXml className="h-5 w-5" />,
    },
    { title: "FAQs", path: "/faq", icon: <CircleHelp className="h-5 w-5" /> },
    {
      title: "Contact",
      path: "/contact",
      icon: <ContactIcon className="h-5 w-5" />,
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex min-h-screen w-full flex-col">
          <Header
            logo={Logo}
            fullName="Sankat Mochan Group Of Institutions"
            shortName="SMGOI"
            navLinks={navLinks}
            slogan="Success will come to you if you come to us"
          />
          <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/about" element={<About />} />
              <Route path="/developer" element={<Developer />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            
          </main>

          <Footer />
        </div>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
