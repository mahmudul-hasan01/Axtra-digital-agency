import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <>
      {/* HOME with hover modal */}
      <div className="relative group">
        <Link to="/" className="inline-block">
          HOME
        </Link>
        <div className="absolute top-full left-0 mt-1 w-[750px] h-[400px] p-10 bg-[#121212] text-white border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-700 z-10">
          <div className="flex gap-48">
            <div>
              <p>Agency</p>
              <div className="flex flex-col gap-4 pl-7 pt-5">
                <Link to="/Digital-Marketing">Digital Marketing</Link>
                <Link to="/Design-Studio">Design Studio</Link>
                <Link to="/Digital-Agency">Digital Agency</Link>
                <Link to="/Creative-Agency">Creative Agency</Link>
                <Link to="/Startup-Agency">Startup Agency</Link>
                <Link to="/Modern-Agency">Modern Agency</Link>
                <Link to="/Personal-Portfolio">Personal Portfolio</Link>
              </div>
            </div>
            <div>
              <p>Agency Dark</p>
              <div className="flex flex-col gap-4 pl-7 pt-5">
                <Link to="/Digital-Marketing">Digital Marketing</Link>
                <Link to="/Design-Studio">Design Studio</Link>
                <Link to="/Digital-Agency">Digital Agency</Link>
                <Link to="/Creative-Agency">Creative Agency</Link>
                <Link to="/Startup-Agency">Startup Agency</Link>
                <Link to="/Modern-Agency">Modern Agency</Link>
                <Link to="/Personal-Portfolio">Personal Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About */}
      <Link to={"/home"}>ABOUT</Link>
      {/* PAGES with hover modal */}
      <div className="relative group">
        <Link to="/pages" className="inline-block">
          PAGES
        </Link>

        {/* Full-width modal with centered content */}
        <div className="absolute top-full right-[-750px] h-[545px] mt-1 w-screen p-10 bg-[#121212] text-white border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-700 z-10">
          <div className="max-w-screen-xl mx-auto grid grid-cols-5 gap-20">
            {/* Your columns of content */}
            <div>
              <p className="font-semibold mb-2">Service</p>
              <div className="flex flex-col gap-3 pl-4 pt-2">
                <Link to="/Digital-Marketing">Service</Link>
                <Link to="/Digital-Marketing">Service Dark</Link>
                <Link to="/Digital-Marketing">Service V2</Link>
                <Link to="/Digital-Marketing">Service V2 Dark</Link>
                <Link to="/Digital-Marketing">Service V3</Link>
                <Link to="/Digital-Marketing">Service V3 Dark</Link>
                <Link to="/Digital-Marketing">Service V4</Link>
                <Link to="/Digital-Marketing">Service V4 Dark</Link>
                <Link to="/Digital-Marketing">Service V5</Link>
                <Link to="/Digital-Marketing">Service V5 Dark</Link>
                <Link to="/Digital-Marketing">Service V6</Link>
                <Link to="/Digital-Marketing">Service V6 Dark</Link>
              </div>
            </div>
            {/* More columns here... */}
            <div>
              <p className="font-semibold mb-2">Portfolio</p>
              <div className="flex flex-col gap-3 pl-4 pt-2">
                <Link to="/Personal-Portfolio">Portfolio</Link>
                <Link to="/Personal-Portfolio">Portfolio Dark</Link>
                <Link to="/Personal-Portfolio">Portfolio V2</Link>
                <Link to="/Personal-Portfolio">Portfolio V2 Dark</Link>
                <Link to="/Personal-Portfolio">Portfolio V3</Link>
                <Link to="/Personal-Portfolio">Portfolio V3 Dark</Link>
                <Link to="/Personal-Portfolio">Portfolio V4</Link>
                <Link to="/Personal-Portfolio">Portfolio V4 Dark</Link>
                <Link to="/Personal-Portfolio">Portfolio V5</Link>
                <Link to="/Personal-Portfolio">Portfolio V5 Dark</Link>
                <Link to="/Personal-Portfolio">Portfolio Details</Link>
                <Link to="/Personal-Portfolio">Portfolio Details Dark</Link>
              </div>
            </div>
            {/* 3 */}
            <div>
              <p className="font-semibold mb-2">Team & Careers</p>
              <div className="flex flex-col gap-3 pl-4 pt-2">
                <Link to="/Team">Team</Link>
                <Link to="/Team">Team Dark</Link>
                <Link to="/Team">Team Details</Link>
                <Link to="/Team">Team Details Dark</Link>
                <Link to="/Team">Career</Link>
                <Link to="/Team">Career Dark</Link>
                <Link to="/Team">Job Details</Link>
                <Link to="/Team">Job Details Dark</Link>
              </div>
            </div>
            {/* 4 */}
            <div>
              <p className="font-semibold mb-2">Blog</p>
              <div className="flex flex-col gap-3 pl-4 pt-2">
                <Link to="/blog">Blog</Link>
                <Link to="/blog">Blog Dark</Link>
                <Link to="/blog-v2">Blog V2</Link>
                <Link to="/blog-v2-dark">Blog V2 Dark</Link>
                <Link to="/category">Category</Link>
                <Link to="/category-dark">Category Dark</Link>
                <Link to="/blog-details">Blog Details</Link>
                <Link to="/blog-details-dark">Blog Details Dark</Link>
              </div>
            </div>
            {/* 5 */}
            <div>
              <p className="font-semibold mb-2">Others</p>
              <div className="flex flex-col gap-3 pl-4 pt-2">
                <Link to="/about">About</Link>
                <Link to="/about-dark">About Dark</Link>
                <Link to="/faqs">FAQs</Link>
                <Link to="/faqs-dark">FAQs Dark</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/contact-dark">Contact Dark</Link>
                <Link to="/404">404</Link>
                <Link to="/404-dark">404 Dark</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SERVICE with hover modal */}
      <div className="relative group">
        <Link to={"/service"} className="">
          SERVICE
        </Link>
        <div className="absolute top-full left-0 mt-1 w-[300px] h-[350px] p-10 bg-[#121212] text-white border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-700 z-10">
          <div>
            <p>Service</p>
            <div className="flex flex-col gap-4 justify-between pl-7 pt-5">
              <Link to={"/Digital-Marketing"}>Service V2</Link>
              <Link to={"/Design-Studio"}>Service V3</Link>
              <Link to={"/Digital-Agency"}>Service V4</Link>
              <Link to={"/Creative-Agency"}>Service V5</Link>
              <Link to={"/Startup-Agency"}>Service V6</Link>
              <Link to={"/Modern-Agency"}>Service Details</Link>
            </div>
          </div>
        </div>
      </div>
      {/* TEAM with hover modal */}
      <div className="relative group">
        <Link to={"/team"} className="inline-block">
          TEAM
        </Link>
        <div className="absolute top-full left-0 mt-1 w-[300px] h-[150px] p-5 bg-[#121212] text-white border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-700 z-10">
          <div>
            <div className="flex flex-col gap-4 justify-between pl-7 pt-5">
              <Link to={"/Team"}>Team</Link>
              <Link to={"/Team Details"}>Team Details</Link>
            </div>
          </div>
        </div>
      </div>
      {/* BLOG with hover modal */}
      <div className="relative group">
        <Link to={"/blog"} className="inline-block">
          BLOG
        </Link>
        <div className="absolute top-full left-0 mt-1 w-[320px] h-[250px] p-10 bg-[#121212] text-white border shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-700 z-10">
          <div>
            <div className="flex flex-col gap-4 justify-between pl-7 pt-5">
              <Link to={"/Team"}>Blog</Link>
              <Link to={"/Team"}>Blog V2</Link>
              <Link to={"/Team"}>Category</Link>
              <Link to={"/Team Details"}>Blog Details</Link>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT */}
      <Link to={"/home"}>CONTACT</Link>
    </>
  );
};

export default Navlink;
