import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import FeaturedWork from "../components/home/FeaturedWork";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import WhoWeAre from "../components/home/WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <WhoWeAre />
            <Services />
            <FeaturedWork />
            <Testimonial />
        </div>
    );
};

export default Home;