import { useIsAuthenticated } from "@azure/msal-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated && router.pathname !== "/login") {
            router.push("/login");
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute; 