
import { sidebarItems } from "./Sidebar";
import Card from "./Card";
import BarGraph from "./BarGraph";
import HomeContent from "./HomeContent";
import { MdDescription } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";

const HomePage = () => {
    return (
        <>
            <div className="mt-1.5">
                <div >
                    <div className="grid grid-flow-row grid-cols-5  gap-2 mb-2">
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
                            description="The Price Intelligence Dashboard provides users with predictive analytics on the pricing of PV ancillary components over the next 12 months. Utilizing advanced algorithms, machine learning, and historical data, the intellugence model generates reliable price forecasts and recommendations, helping businesses anticipate market changes. This forward-looking tool aids in planning, budgeting, and optimizing procurement strategies by offering a clear picture of expected price trends."
                            items={sidebarItems[1].href}
                            icon={GiPriceTag}
                        />
                        <Card
                            title="Corpus Knowledge Bot"
                            description="The Chat-Bot is an interactive tool that provides real-time updates and insights on the latest market activities and speculations in the PV industry. It leverages artificial intelligence and natural language processing to offer users quick access to relevant market information, such as historical price movements, predicted price trends, supply chain disruptions, policy changes, and industry news. Users can query the Chat-Bot for specific information, such as current and forecasted prices, recent market trends, or expert opinions on future market directions. This feature is particularly useful for staying informed about rapid market changes and making agile, data-driven decisions."
                            items={sidebarItems[2].href}
                            icon={RiRobot3Line}
                        />
                        <Card
                            title="Descriptive Dashboard"
                            description="The Analytical Dashboard is designed to provide deep insights into historical market trends and behaviors for PV ancillary components. It allows users to analyze vast amounts of historical data to identify patterns, price volatility, seasonality, fundamental factors and other market dynamics that have influenced prices over time. The dashboard provides visualizations such as trend lines, and comparative graphs to facilitate a comprehensive understanding of the market's past performance. By analyzing these trends, businesses can better understand the factors that drive price changes, assess the risk, and develop more informed long-term procurement and pricing strategies."
                            items={sidebarItems[3].href}
                            icon={MdDescription}
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
