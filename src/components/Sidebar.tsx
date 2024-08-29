import { useContext } from "react";
import { MdDashboard, MdKeyboardArrowLeft, MdDescription } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";
import { GiPriceTag } from "react-icons/gi";
import { SidebarContext } from "./SidebarContext";
import { FC } from "react";

interface SidebarItem {
    name: string;
    href: string;
    icon: React.ElementType;
}

interface SidebarProps {
    setIframeSrc: (url: string) => void;
}

const sidebarItems: SidebarItem[] = [
    {
        name: "Home",
        href: "https://example.com/home",
        icon: MdDashboard
    },
    {
        name: "Corpus Knowledge Bot",
        href: "https://example.com/about",
        icon: RiRobot3Line,
    },
    {
        name: "Descriptive Dashboard",
        href: "https://example.com/descriptive",
        icon: MdDescription
    },
    {
        name: "Price Intelligence Dashboard",
        href: "https://example.com/intelligence",
        icon: GiPriceTag
    },
    {
        name: "About",
        href: "https://example.com/about",
        icon: MdDashboard
    },
];

const Sidebar: FC<SidebarProps> = ({ setIframeSrc }) => {
    const { sidebarOpen, toggleSidebar } = useContext(SidebarContext);

    const handleClick = (url: string) => {
        setIframeSrc(url);
    };

    return (
        <div className="sidebar_wrapper">
            <button className="btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
                <MdKeyboardArrowLeft />
            </button>
            <aside className="sidebar" data-collapse={sidebarOpen}>
                <p className="sidebar_logo-name">Adani AI Labs</p>
                <ul className="sidebar_list">
                    {sidebarItems.map(({ name, href, icon: Icon }) => (
                        <li key={name} className="sidebar_item" onClick={() => handleClick(href)}>
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
            </aside>
        </div>
    );
};

export default Sidebar;
