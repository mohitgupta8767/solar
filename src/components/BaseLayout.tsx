import { ReactNode, useContext } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { SidebarContext } from "./SidebarContext";

interface Props {
    children: ReactNode | ReactNode[]
}

export default function BaseLayout({ children }: Props) {
    const {iframeSrc } = useContext(SidebarContext);
    return (
        <>
            <Header />
            <div className="layout flex gap-2">
                <Sidebar  />
                <div className="grow overflow-auto h-full w-full">
                    {children}
                    {typeof iframeSrc === "string" ?
                        <iframe
                            src={iframeSrc}
                            style={{ width: "100%", height: "200%", border: "none" }}
                            title="Content Display"
                            allowFullScreen
                        ></iframe>
                        :
                        iframeSrc
                    }
                </div>
            </div>
        </>
    )
} 