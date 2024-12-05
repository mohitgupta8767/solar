import { sidebarItems } from "./Sidebar";
import Card from "./Card";
import BarGraph from "./BarGraph";
import HomeContent from "./HomeContent";
import { RiRobot3Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { VscGraphLeft } from "react-icons/vsc";
import Footer from "./Footer";
import CardTwo from "./CardTwo";
import CardMui from "./Card";



const HomePage = () => {
    return (
        <div className="app-layout">
            <div className="carousel-section">
                <CardTwo />
            </div>
            <div className="card-section">
                <CardMui />
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    );
};

export default HomePage;
