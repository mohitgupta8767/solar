import React from 'react';

const list = [
    { id: 1, name: "Analyze and monitor market data for ancillary components." },
    { id: 2, name: "Make informed strategic decisions based on price forecasts to optimize overall procurement costs." },
    { id: 3, name: "Enhance the solar panel sales strategy in international markets." },
    { id: 4, name: "Build internal capabilities to strategically manage solar panel production." },
];

const platform = [
    { id: 1, name: "Predictive forecasting" },
    { id: 2, name: "Data-driven analysis" },
    { id: 3, name: "Chat-bot" },
];

const HomeContent = () => {
    return (
        <div className="rounded-md">
            <p>Ancillary components for photovoltaic (PV) systems account for approximately 47% of the total cost of a solar panel. Given the influence of the commodity market on these costs, a pricing intelligence platform becomes essential to:</p>
            <ul className="list-disc pl-5 mb-0">
                {list.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
            <p>Our platform enables you to make data-driven decisions and gain a competitive edge through:</p>
            <ul className="flex list-none p-0 my-5">
                {platform.map(item => (
                    <li key={item.id} className="mr-5">{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomeContent;
