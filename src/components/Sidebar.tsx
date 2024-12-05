import { useContext, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { SidebarContext } from "./SidebarContext";
import { FC } from "react";
import HomePage from "./HomePage";
import { VscGraphLeft } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { FaRobot } from "react-icons/fa";

interface SidebarItem {
    name: string;
    href: any;
    icon: React.ElementType;
}

interface SidebarProps {
    // setIframeSrc: (url: string) => void;
}

export const sidebarItems: SidebarItem[] = [
    {
        name: "Home",
        href: <HomePage />,
        icon: IoMdHome
    },
    {
        name: "Price Intelligence Dashboard",
        href: "https://app.powerbi.com/reportEmbed?reportId=91db9061-8288-4e44-9da4-78a8e67bfb8c&autoAuth=true&tid=04c72f56-1848-46a2-8167-8e5d36510cbc",
        icon: GoGraph
    },
    {
        name: "PV Chat Bot",
        href: "https://solarpvchatbot-fneah8d7hddtdcfm.centralindia-01.azurewebsites.net/",
        icon: FaRobot,
    },
    {
        name: "Ancillary Chat Bot",
        href: "https://solarstreamlit.azurewebsites.net/",
        icon: FaRobot,
    },
    {
        name: "Descriptive Dashboard",
        href: "https://app.powerbi.com/reportEmbed?reportId=d77333e4-32fc-494b-a0f7-f36e9bae89a4&autoAuth=true&ctid=04c72f56-1848-46a2-8167-8e5d36510cbc",
        icon: VscGraphLeft
    },
];

const Sidebar: FC<SidebarProps> = () => {
    const { sidebarOpen, toggleSidebar, setIframeSrc } = useContext(SidebarContext);
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    useEffect(() => {
        setIframeSrc(sidebarItems[0].href)
    }, [])

    const handleClick = (url: string, name: string) => {
        setIframeSrc(url);
        setSelectedItem(name);
    };

    return (
        <div className="h-[100%] relative">
            <button className="absolute right-0 top-16 border-none bg-white w-6 h-6 border border-gray-300 rounded-[10%] flex justify-center items-center cursor-pointer translate-x-1/2 text-[1.1rem]" onClick={toggleSidebar} aria-label="Toggle sidebar">
                {!sidebarOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="flex h-[100%] p-4 flex-col w-[17rem] bg-white transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" data-collapse={!sidebarOpen}>
                <ul className="list-none">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li key={name} className={`cursor-pointer ${selectedItem === name ? 'bg-gray-200 rounded-lg' : ''}`} onClick={() => handleClick(href, name)}>
                            <span className={`sidebar_link inline-block text-base font-semibold no-underline text-black px-4 py-3 flex bg-gray-100 mb-4 rounded-lg transition-colors duration-300 ${selectedItem === name ? 'bg-[#D3D3D3]' : ''}`}>
                                <span className={`text-[1.3rem] inline-block text-[#0f7ba9]`}>
                                    <Icon />
                                </span>
                                <span className="sidebar_name ml-2 bg-gradient-to-r from-[#0f7ba9] via-[#0f7ba9] to-[#ab3574] bg-clip-text text-transparent">
                                    {name}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
                <p className="sidebar_logo-name text-base font-semibold mt-auto">Powered by Adani AI Labs</p>
            </aside>
        </div>
    );
};

export default Sidebar;
