import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";
import { sidebarItems } from "./Sidebar";

const Header = () => {
    const { setIframeSrc } = useContext(SidebarContext);
    return (
        <header className="header">
            <div className="flex cursor-pointer" onClick={() => setIframeSrc(sidebarItems[0].href)}>
                <img 
                src="https://media.licdn.com/dms/image/v2/C4E0BAQEwnsIG51s6mg/company-logo_200_200/company-logo_200_200/0/1630405333526?e=1732752000&v=beta&t=QF5iDucqPBkOn602FUgrKwHjCgaDP0-PrTFiHdwP518"
                alt="adani renewable"
                className="header_logo"
                />
                 <img
                    src="https://media.licdn.com/dms/image/v2/D560BAQHXaxftySwb3Q/company-logo_200_200/company-logo_200_200/0/1711703564987/adani_ai_labs_logo?e=1732752000&v=beta&t=x2Td0l4lccvZXQZjMjtgrvEPkjwQwElhACQVWIyjV08" 
                    alt="Header Logo"
                    className="header_logo"
                />
                </div>
                <h1 className="header_title">Solar Ancillary Price Intelligence</h1>
                {/* <div className="avatar">A</div> */}
            </header>
    )
}

export default Header;