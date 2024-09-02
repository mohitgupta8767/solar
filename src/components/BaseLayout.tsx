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
            <div className="layout">
                <Sidebar  />
                <div className="body_layout">
                    {children}
                    {typeof iframeSrc === "string" ?
                        <iframe
                            src={iframeSrc}
                            style={{ width: "100%", height: "100%", border: "none" }}
                            title="Content Display"
                        ></iframe>
                        :
                        iframeSrc
                    }
                </div>
            </div>
        </>
    )
} 