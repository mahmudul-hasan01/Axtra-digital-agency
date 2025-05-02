import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import Navlink from "../../components/navlink/navlink";
import MobileViewNavlink from "../../components/navlink/MobileViewNavlink";


const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="w-[90%] h-[90px] mx-auto flex justify-between items-center py-6 font-semibold">
        {/* Logo */}
        <img src="/public/logo-black.webp" alt="Logo" className="h-12" />

        {/* Nav Links (visible on xl+) */}
        <div className="xl:flex justify-between items-center w-[70%] hidden">
          <Navlink />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-xl relative">
          {/* Search Toggle */}
          <button onClick={() => setShowSearch((prev) => !prev)}>
            {showSearch ? <AiOutlineClose /> : <FaSearch />}
          </button>

          {/* Burger Icon (toggle modal) */}
          <button onClick={() => setShowModal((prev) => !prev)}>
            <AiOutlineAlignRight />
          </button>

          {/* Search Input */}
          {showSearch && (
            <div className="absolute top-full right-0 mt-2 w-[300px] bg-white shadow-lg rounded-md p-3 z-50">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
      </div>
      {/* Full Page Modal */}
      <MobileViewNavlink setShowModal={setShowModal} showModal={showModal} />
    </div>
  );
};

export default Navbar;
