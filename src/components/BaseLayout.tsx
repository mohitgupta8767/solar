import { ReactNode, useContext } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "./SidebarContext";
import BGImage from "../Assets/bgImage.webp";

interface Props {
    children: ReactNode | ReactNode[]
}

export default function BaseLayout({ children }: Props) {
    const { iframeSrc } = useContext(SidebarContext);

    return (
        <>
            <Header />
            <div className="h-[calc(100vh-50px)] flex  mr-2 relative">
                <Sidebar />
                <div className="grow overflow-auto h-full w-full relative">
                    <img src={BGImage.src} alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
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
                            // <iframe title="Price Intelligence Solar" width="1187" height="560" src='https://app.powerbi.com/reportEmbed?reportId=91db9061-8288-4e44-9da4-78a8e67bfb8c&autoAuth=true&tid=04c72f56-1848-46a2-8167-8e5d36510cbc' allowFullScreen></iframe>


                            :
                            iframeSrc
                        }
                    </div>
                </div>
            </div>
        </>
    )
} 