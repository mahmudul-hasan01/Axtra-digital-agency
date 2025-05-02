import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import FeaturedWork from "../components/home/FeaturedWork";
import RecentBlog from "../components/home/RecentBlog";
import Services from "../components/home/Services";
import Subscription from "../components/home/Subscription";
import Testimonial from "../components/home/Testimonial";
import WhoWeAre from "../components/home/WhoWeAre";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <WhoWeAre />
            <Services />
            <FeaturedWork />
            <Testimonial />
            <WhyChooseUs />
            <Subscription />
            <RecentBlog />
        </div>
    );
};

export default Home;