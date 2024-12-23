import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { sidebarItems } from "./Sidebar";
import adaniAILabsLogo from '../Assets/AILabsLogo.jpg';
import renewableLogo from '../Assets/renewable.png';
import Image from "next/image";
import { useMsal } from "@azure/msal-react";

const Header = () => {
    const { instance, accounts } = useMsal();
    const { setIframeSrc } = useContext(SidebarContext);

    const handleLogin = () => {
        instance.loginRedirect().catch(console.error);
    };

    const handleLogout = () => {
        instance.logoutRedirect().catch(console.error);
    };

    return (
        <header className="bg-white border-b border-gray-300 flex items-center justify-between p-4 h-[50px]">
            {/* Left Section */}
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

            <h1 className="header_title text-2xl font-semibold absolute left-1/2 transform -translate-x-1/2">
                Solar Price Intelligence AI Platform
            </h1>

            <div className="flex items-center gap-4">
                {accounts.length > 0 && (
                    <>
                        <span className="text-gray-600 text-sm">
                            {accounts[0].name || accounts[0].username}
                        </span>
                        {/* <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                        >
                            Sign Out
                        </button> */}
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
