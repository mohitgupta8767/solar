import { ReactNode, useContext } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "./SidebarContext";
import AuthProvider from "./AuthProvider";

interface Props {
    children: ReactNode | ReactNode[]
}

export default function BaseLayout({ children }: Props) {
    const { iframeSrc } = useContext(SidebarContext);

    return (
        <AuthProvider>
            <Header />
            <div className="h-[calc(100vh-50px)] flex mr-2 relative">
                <Sidebar />
                <div className="grow overflow-auto h-full w-full relative">
                    <div className="absolute top-0 left-0 w-full h-full">
                        {children}
                        {typeof iframeSrc === "string" ?
                            <iframe
                                src={iframeSrc}
                                style={{
                                    width: "100%",
                                    height: ["https://solarpvchatbot-fneah8d7hddtdcfm.centralindia-01.azurewebsites.net/", "https://solarstreamlit.azurewebsites.net/"].includes(iframeSrc) ? "100%" : "175%",
                                    border: "none",
                                    position: "relative",
                                    zIndex: 1
                                }}
                                title="Content Display"
                                allowFullScreen
                            ></iframe>
                            :
                            iframeSrc
                        }
                    </div>
                </div>
            </div>
        </AuthProvider>
    );
} 