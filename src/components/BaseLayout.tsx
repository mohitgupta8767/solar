import { ReactNode } from "react"
import Sidebar from "./Sidebar"
import Header from "./Header"
import { useState } from "react";

interface Props {
    children: ReactNode | ReactNode[]
}

export default function BaseLayout({ children }: Props) {
    const [iframeSrc, setIframeSrc] = useState<string>("");
    return (
        <>
    <Header />
    <div className="layout">
        <Sidebar setIframeSrc={setIframeSrc} />

         <iframe
                src={iframeSrc}
                style={{ width: "100%", height: "100vh", border: "none" }}
                title="Content Display"
            ></iframe>
    </div>
    </>
    )
} 