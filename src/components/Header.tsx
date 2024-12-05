import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { sidebarItems } from "./Sidebar";
import adaniAILabsLogo from '../Assets/AILabsLogo.jpg';
import renewableLogo from '../Assets/renewable.png';
import Image from "next/image";

const Header = () => {
    const { setIframeSrc } = useContext(SidebarContext);
    return (
        <header className="bg-white border-b border-gray-300 flex items-center p-4 h-[50px] static insert-y-0">
            <div className="flex cursor-pointer" onClick={() => setIframeSrc(sidebarItems[0].href)}>
                <Image
                    src={renewableLogo}
                    alt="adani renewable"
                    className="w-12 h-8 m-2"
                />
                <Image
                    src={adaniAILabsLogo}
                    alt="Header Logo"
                    className="w-12 h-auto"
                />
            </div>
            <h1 className="header_title text-2xl font-semibold ml-[25%]">Solar Price Intelligence AI Platform</h1>
            {/* <div className="avatar">A</div> */}
        </header>
    )
}

export default Header;