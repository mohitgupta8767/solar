import { sidebarItems } from "./Sidebar";
import Card from "./Card";
import BarGraph from "./BarGraph";
import HomeContent from "./HomeContent";
import { RiRobot3Line } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { VscGraphLeft } from "react-icons/vsc";

const HomePage = () => {
    return (
        <div >
            <div className="mt-1.5">
                <div className="grid grid-flow-row grid-cols-5 gap-2 mb-2">
                    <div className="col-span-3 bg-white shadow-lg rounded-lg p-4 cursor-pointer">
                        <HomeContent />
                    </div>
                    <div className="col-span-2 bg-white shadow-lg rounded-lg p-1 cursor-pointer">
                        <BarGraph />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <Card
                        title="Price Intelligence Dashboard"
                        description="The Price Intelligence Dashboard predicts PV component prices for 12 months using advanced algorithms, aiding in planning and procurement strategies."
                        items={sidebarItems[1].href}
                        icon={GoGraph}
                    />
                    <Card
                        title="SolAnc"
                        description="The Chat-Bot delivers real-time PV market updates, using AI to provide insights on prices, trends, disruptions, and news for informed decisions."
                        items={sidebarItems[2].href}
                        icon={RiRobot3Line}
                    />
                    <Card
                        title="Descriptive Dashboard"
                        description="The Analytical Dashboard offers deep insights into historical PV component trends, visualizing patterns, volatility, and market dynamics for informed procurement strategies."
                        items={sidebarItems[3].href}
                        icon={VscGraphLeft}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
