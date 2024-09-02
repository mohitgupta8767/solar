import { createContext, ReactNode, useState } from "react";

const initialValue = {
    sidebarOpen: false,
    toggleSidebar: () => {},
    iframeSrc : "",
    setIframeSrc : (val :string) => {},
};

export const SidebarContext = createContext(initialValue);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [iframeSrc, setIframeSrc] = useState<string>("");


    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar, iframeSrc, setIframeSrc}}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;