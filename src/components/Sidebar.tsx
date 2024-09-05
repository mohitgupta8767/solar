import { useContext, useEffect } from "react";
import {  MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { SidebarContext } from "./SidebarContext";
import { FC } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import { VscGraphLeft } from "react-icons/vsc";
import { IoMdHome } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";

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
        href: "https://app.powerbi.com/view?r=eyJrIjoiZjQzYzBlMmUtNjM2NC00MTI3LTgxZWUtYTMzMDI2OTU1NDk5IiwidCI6IjA0YzcyZjU2LTE4NDgtNDZhMi04MTY3LThlNWQzNjUxMGNiYyJ9",
        icon: GoGraph
    },
    {
        name: "Corpus Knowledge Bot",
        href: "https://solarstreamlit.azurewebsites.net/",
        icon: RiRobot3Line,
    },
    {
        name: "Descriptive Dashboard",
        href: "https://app.powerbi.com/view?r=eyJrIjoiMGVlMzlhYjctMTQxZS00ZTUxLWEwNmYtZDhlZjE4ZDdjYWE3IiwidCI6IjA0YzcyZjU2LTE4NDgtNDZhMi04MTY3LThlNWQzNjUxMGNiYyJ9",
        icon: VscGraphLeft
    },
    {
        name: "About",
        href: <AboutPage />,
        icon: AiOutlineInfoCircle
    },
];

const Sidebar: FC<SidebarProps> = () => {
    const { sidebarOpen, toggleSidebar, setIframeSrc } = useContext(SidebarContext);

    useEffect(() => {
         setIframeSrc(sidebarItems[0].href)
    },[])

    const handleClick = (url: string) => {
        setIframeSrc(url);
    };

    return (
        <div className="h-[100%] relative">
            <button className="absolute right-0 top-16 border-none bg-white w-6 h-6 border border-gray-300 rounded-[10%] flex justify-center items-center cursor-pointer translate-x-1/2 text-[1.1rem]" onClick={toggleSidebar} aria-label="Toggle sidebar">
                {!sidebarOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="flex h-[100%] p-4 flex-col w-[17rem] bg-white transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]" data-collapse={!sidebarOpen}>
                <ul className="list-none">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li key={name} className="cursor-pointer"  onClick={() => handleClick(href)}>
                            <span className="sidebar_link inline-block text-base font-semibold no-underline text-black px-4 py-3 flex bg-gray-100 mb-4 rounded-lg transition-colors duration-300">
                                <span className="text-[1.3rem] inline-block text-[#0f7ba9]">
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
