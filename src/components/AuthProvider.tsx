import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [authAttempted, setAuthAttempted] = useState(false);

    useEffect(() => {
        const handleAuth = async () => {
            try {
                if (!isAuthenticated && !authAttempted) {
                    const accounts = instance.getAllAccounts();
                    if (accounts.length > 0) {
                        await instance.setActiveAccount(accounts[0]);
                    } else {
                        const response = await instance.handleRedirectPromise();
                        if (!response) {
                            setAuthAttempted(true);
                            await instance.loginRedirect();
                        }
                    }
                }
            } catch (error) {
                console.error("Auth error:", error);
            } finally {
                setIsLoading(false);
            }
        };

        handleAuth();
    }, [isAuthenticated, instance, authAttempted]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!isAuthenticated && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl mb-4">Please sign in to continue</h1>
                <button
                    onClick={() => instance.loginRedirect()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Sign In
                </button>
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthProvider; 