import SmgoiLogo from "@/assets/logo.webp";

import { FaSquareThreads } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 border-t bg-background px-4 md:px-6 py-4 sm:py-0">
      <div className="flex items-center">
        <img src={SmgoiLogo} alt="SMGOI Logo" className="h-8 w-8" />
        <p className="text-sm ml-2">
          &copy; {new Date().getFullYear()} Sankat Mochan Group Of Institutions
          - @smgoi
        </p>
      </div>
      <span className="flex gap-3 mt-4 sm:mt-0">
        <a
          href="https://instagram.com/studyatsmgoi"
          target="_blank"
          rel="noreferrer noopener"
          title="Instagram"
          aria-label="Instagram"
        >
          <FaInstagramSquare className="h-6 w-6" />
        </a>
        <a
          href="https://facebook.com/studyatsmgoi"
          target="_blank"
          rel="noreferrer noopener"
          title="Facebook"
          aria-label="Facebook"
        >
          <FaFacebookSquare className="h-6 w-6" />
        </a>
        <a
          href="https://youtube.com/@studyatsmgoi"
          target="_blank"
          rel="noreferrer noopener"
          title="Youtube"
          aria-label="Youtube"
        >
          <IoLogoYoutube className="h-6 w-6" />
        </a>
        <a
          href="https://twitter.com/studyatsmgoi"
          target="_blank"
          rel="noreferrer noopener"
          title="Twitter"
          aria-label="Twitter"
        >
          <FaSquareThreads className="h-6 w-6" />
        </a>
        <a
          href="https://threads.net/@studyatsmgoi"
          target="_blank"
          rel="noreferrer noopener"
          title="Threads"
          aria-label="Threads"
        >
          <FaSquareXTwitter className="h-6 w-6" />
        </a>
      </span>
    </footer>
  );
}

export default Footer;
