import { useRef } from "react";
import { gsap } from "gsap";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../assets/recentBlog/1.webp";
import img2 from "../../assets/recentBlog/2.webp";

const RecentBlog = () => {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);

  const handleMouseEnter = (imgRef) => {
    gsap.to(imgRef.current, {
      rotateY: 180,
      duration: 0.8,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (imgRef) => {
    gsap.to(imgRef.current, {
      rotateY: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <div>
      <div className="w-[90%] xl:w-[80%] mx-auto py-20 space-y-10 lg:space-y-28">
        {/* Heading */}
        <div className="w-[100%] md:w-[50%] mx-auto space-y-10 xl:space-y-28">
          <div className="uppercase font-semibold space-y-4">
            <h1>Recent Blog</h1>
            <p className="text-3xl lg:text-5xl">
              Read Updated
              <br />
              Journal.
            </p>
          </div>
          <div className="md:pl-16 lg:pl-24 xl:pl-40 font-semibold space-y-10 xl:space-y-20">
            <p>
              Read our blog and try to see everything from every perspective.
              Our passion lies in making everything accessible and aesthetic
              for everyone.
            </p>
          </div>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0">
          {/* Image Box 1 */}
          <div className="flex-1 relative overflow-hidden perspective-[1000px]">
            <img
              ref={imgRef1}
              src={img1}
              alt=""
              onMouseEnter={() => handleMouseEnter(imgRef1)}
              onMouseLeave={() => handleMouseLeave(imgRef1)}
              className="transition-transform duration-300"
              style={{ transformStyle: "preserve-3d" }}
            />
            <div className="absolute bottom-0 right-0 md:right-20 lg:right-0 w-[300px] h-[250px] md:w-[370px] lg:h-[280px] font-semibold bg-white p-4 md:p-10">
              <h1>UI Design . 02 May 2019</h1>
              <p className="font-semibold text-2xl mb-10 mt-2">
                How to bring fold to your startup company with Axtra
              </p>
              <hr />
              <button className="flex gap-2 items-center mt-3">
                Read More <MdArrowOutward />
              </button>
            </div>
          </div>

          {/* Image Box 2 */}
          <div className="flex-1 relative overflow-hidden perspective-[1000px]">
            <img
              ref={imgRef2}
              src={img2}
              alt=""
              onMouseEnter={() => handleMouseEnter(imgRef2)}
              onMouseLeave={() => handleMouseLeave(imgRef2)}
              className="transition-transform duration-300"
              style={{ transformStyle: "preserve-3d" }}
            />
            <div className="absolute bottom-0 right-0 md:right-20 lg:right-0 w-[300px] h-[250px] md:w-[370px] lg:h-[280px] font-semibold bg-white p-4 md:p-10">
              <h1>UI Design . 02 May 2019</h1>
              <p className="font-semibold text-2xl mb-10 mt-2">
                How to bring fold to your startup company with Axtra
              </p>
              <hr />
              <button className="flex gap-2 items-center mt-3">
                Read More <MdArrowOutward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
