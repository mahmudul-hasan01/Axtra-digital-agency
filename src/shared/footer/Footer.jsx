import { Link } from "react-router-dom";
import logo from "../../../public/logo-black (1).webp";

const Footer = () => {
  return (
    <div className="bg-black w-full h-full md:min-h-screen text-white  py-14 md:py-0 space-y-7 md:space-y-0">
      {/* Side 1 */}
      <div className="flex flex-col h-full px-5 md:px-10  md:flex-row items-center space-y-8 md:space-y-0">
        <div className="max-w-md w-[100%] md:w-[40%] space-y-10">
          {/* Invert the logo to white */}
          <img src={logo} alt="Logo" className="invert w-32" />
          <p className="text-gray-300 w-[100%] md:w-[70%]">
            When do they work well, and when do they fail us? And finally, when
            do we actually need them — and how can we avoid them.
          </p>
        </div>
        <div className="w-[100%] md:w-[10%] h-full flex flex-col items-center  justify-start">
          <button className="w-full md:w-32 lg:w-48 h-28 border-t md:border-t-0 border-b border-l border-r hover:bg-white hover:text-black uppercase font-semibold">
            facebook
          </button>
          <button className="w-full md:w-32 lg:w-48 h-28 border-b border-l border-r hover:bg-white hover:text-black uppercase font-semibold">
            Twitter
          </button>
          <button className="w-full md:w-32 lg:w-48 h-28 border-b border-l border-r hover:bg-white hover:text-black uppercase font-semibold">
            Linkedin
          </button>
          <button className="w-full md:w-32 lg:w-48 h-28 border-b border-l border-r hover:bg-white hover:text-black uppercase font-semibold">
            Instagram
          </button>
        </div>
        <div className="w-[100%] md:w-[50%] text-5xl md:text-6xl lg:text-8xl flex justify-center items-center">
          <p>Let’s talk</p>
        </div>
      </div>
      <hr className="w-[100%]" />
      {/* Side 2 */}
      <div className="flex flex-col-reverse gap-4 px-10 py-0 md:py-5 lg:flex-row justify-between items-center lg:h-[150px]">
        <div className="text-center lg:text-start">
          © 2022 - 2025 | Alrights reserved <br /> by Wealcoder
        </div>

        <div className="flex gap-4 lg:gap-20 pl-4 pt-2 font-semibold">
          <Link to="/blog-v2">ABOUT</Link>
          <Link to="/blog-v2-dark">CONTACT</Link>
          <Link to="/category">CAREER</Link>
          <Link to="/category-dark">FAQS </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
