import { createContext, ReactNode, useState } from "react";

const initialValue = {
    sidebarOpen: false,
    toggleSidebar: () => {}
};

export const SidebarContext = createContext(initialValue);

const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    };

    return (
        <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;