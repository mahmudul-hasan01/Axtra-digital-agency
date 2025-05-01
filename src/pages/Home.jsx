import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import FeaturedWork from "../components/home/FeaturedWork";
import Services from "../components/home/Services";
import WhoWeAre from "../components/home/WhoWeAre";

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <WhoWeAre />
            <Services />
            <FeaturedWork />
        </div>
    );
};

export default Home;