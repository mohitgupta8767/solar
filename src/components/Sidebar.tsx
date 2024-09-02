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
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
                {!sidebarOpen ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
            </button>
            <aside className="sidebar" data-collapse={!sidebarOpen}>
                <ul className="sidebar_list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li key={name} className="sidebar_item cursor-pointer"  onClick={() => handleClick(href)}>
                            <span className="sidebar_link">
                                <span className="sidebar_icon">
                                    <Icon />
                                </span>
                                <span className="sidebar_name">
                                    {name}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
                <p className="sidebar_logo-name">Powered by Adani AI Labs</p>
            </aside>
        </div>
    );
};

export default Sidebar;
