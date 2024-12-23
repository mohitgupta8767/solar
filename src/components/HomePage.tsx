import Image from "next/image";
import React from "react";
import wafer from "../Assets/pvindustry.png";
import chat1 from '../Assets/pvchatbot.png'
import ancillarybot from "../Assets/AI_PV1.jpg";
import predictiond from "../Assets/pred.png"
import analytical from "../Assets/analytical.png";
import { SidebarContext } from "./SidebarContext";
import { useContext } from 'react';
import { sidebarItems } from './Sidebar';
import Footer from "./Footer";


const HomePage = () => {
    const { setIframeSrc } = useContext(SidebarContext);

    const cards = [
        {
            id: 1,
            title: "Prediction Dashboard",
            description: "Interactive dashboard to analyze historical component data, identify trends, and market fluctuations to aid informed strategic procurement decisions.",
            image: predictiond,
            items: sidebarItems[1].href
        },
        {
            id: 2,
            title: "Analytical Dashboard",
            description: "This specialized chatbot provides comprehensive insights into the Chinese and global solar industry through a user-friendly Q&A interface. Leveraging forecasts, reports, and real-time data, it delivers well-grounded information for decision-making.",
            image: analytical,
            items: sidebarItems[4].href
        },
        {
            id: 3,
            title: "Ancillary Chat Bot",
            description: "This platform provides a price intelligence dashboard with 1-year price forecasting capabilities driven by multiple market, demand, and trend factors. It offers procurement recommendations by comparing the lowest predicted future price with the current spot price.",
            image: ancillarybot,
            items: sidebarItems[3].href
        },
        {
            id: 4,
            title: "PV Chat Bot",
            description: "This specialized chatbot provides comprehensive insights into the Chinese and global solar industry through a user-friendly Q&A interface. Leveraging forecasts, reports, and real-time data, it delivers well-grounded information for decision-making.",
            image: chat1,
            items: sidebarItems[2].href
        },
    ];

    const handleClick = (item: any) => {
        setIframeSrc(item);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow p-6 bg-gray-100">
                <section className="mb-6">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full h-auto flex flex-col md:flex-row items-center">
                        <Image
                            src={wafer}
                            alt="Single Card"
                            className="rounded-lg w-full md:w-1/3 h-auto object-cover mb-4 md:mb-0 md:mr-6"
                        />

                        <div className="flex flex-col justify-center">
                            <p className="text-gray-600 text-left">
                                This platform offers a comprehensive solution for managing and understanding the photovoltaic (PV) component market. It provides a 24-week rolling forecast for both core and ancillary PV components, going beyond simple predictions by offering procurement recommendations based on these forecasts. The application also prioritizes transparency by explaining the reasoning behind its predictions. Users can compare the application's forecasts with those from PV-Infolink and SMM, gaining a broader perspective on market trends. An analytical dashboard presents key indicators that delve into the technical and fundamental factors influencing prices. Furthermore, the application includes two specialized chatbots that can answer user questions about real-time market scenarios and potential future developments, drawing on published news, reports, generated forecasts, and historical data. This combination of forecasting, analysis, and interactive information makes it a powerful tool for anyone involved in the PV component market.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center cursor-pointer"
                            onClick={() => handleClick(card.items)}
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                className="rounded-t-lg w-full h-32 object-cover mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2 hover:text-[#0f7ba9]">{card.title}</h3>
                            <p className="text-gray-600 text-center">{card.description}</p>
                        </div>
                    ))}
                </section>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
