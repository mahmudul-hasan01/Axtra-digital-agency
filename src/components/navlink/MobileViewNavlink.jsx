/* eslint-disable react/prop-types */
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import logo from "../../assets/logo-black.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileViewNavlink = ({ showModal, setShowModal }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "HOME",
      links: [
        { name: "Facebook", path: "/facebook" },
        { name: "Instagram", path: "/instagram" },
        { name: "Twitter", path: "/twitter" },
      ],
    },
    {
      title: "ABOUT",
      links: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/career" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "SERVICE",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Help Center", path: "/help" },
      ],
    },
    {
      title: "PAGE",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Help Center", path: "/help" },
      ],
    },
    {
      title: "BLOG",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Help Center", path: "/help" },
      ],
    },
  ];

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 bg-[#171717] bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative text-white bg-[#171717] rounded-md w-full h-screen">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-7 right-5 lg:top-14 md:right-14 p-3 rounded-full border text-white text-2xl hover:text-red-500"
            >
              <AiOutlineClose />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-12 gap-4 h-full pb-4">
              {/* First Div - 2 Columns */}
              <div className="col-span-2 hidden md:flex flex-col justify-between gap-4">
                <img src={logo} alt="Logo" className="invert w-24 py-8 ml-14" />
                <hr />
                <div className="ml-6 lg:ml-14">
                  <h1 className="text-3xl">Follow Us</h1>
                  <div className="flex flex-col gap-4 mt-4">
                    <Link to="/dribbble">Dribbble</Link>
                    <Link to="/behance">Behance</Link>
                    <Link to="/instagram">Instagram</Link>
                    <Link to="/facebook">Facebook</Link>
                    <Link to="/twitter">Twitter</Link>
                    <Link to="/youtube">YouTube</Link>
                  </div>
                </div>
                <hr />
                <div className="ml-2 lg:ml-6">
                  <div className="flex flex-col items-start w-full gap-2">
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/blog">Blog</Link>
                  </div>
                </div>
              </div>

              {/* Second Div - 7 Columns */}
              <div className="col-span-12 md:col-span-7 flex bg-[#171717] rounded-lg">
                <div className="w-full px-6 pt-[120px]">
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className="border-b border-t border-gray-700"
                    >
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center py-4 text-left text-white font-semibold text-xl md:text-2xl"
                      >
                        <span>{item.title}</span>
                        <span className="flex items-center justify-center w-10 h-10 border border-white hover:bg-white hover:text-black transition duration-200">
                          {openIndex === index ? (
                            <AiOutlineMinus />
                          ) : (
                            <AiOutlinePlus />
                          )}
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="flex flex-col pl-4 pb-3 gap-2 text-white">
                          {item.links.map((link, i) => (
                            <Link
                              key={i}
                              to={link.path}
                              className="transition-colors"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Third Div - 3 Columns */}
              <div className="col-span-3  hidden md:flex flex-col justify-start items-center bg-[#171717] rounded-lg p-6 gap-6 pt-[150px] space-y-5 lg:space-y-10">
                {/* Search Input */}
                <div className="w-full flex justify-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-[100%] lg:w-[80%] p-3 rounded-full text-white bg-[#171717] border "
                  />
                </div>

                {/* Company Info */}
                <div className="text-white items-center text-sm w-full lg:pl-5 space-y-2 font-semibold">
                  <h2 className="text-xl font-semibold">Get in touch</h2>
                  <p>+(02) - 094 980 547</p>
                  <p>+1 (800) 123-4567</p>
                  <p>support@bikeshop.com</p>
                  <p>Mon - Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileViewNavlink;
