import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "../auth/config";
import SidebarProvider from "@/components/SidebarContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

// Initialize MSAL outside of the component
let msalInstance: PublicClientApplication | null = null;

export default function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   if (!msalInstance) {
  //     msalInstance = new PublicClientApplication(msalConfig);
  //   }
  //   setIsClient(true);
  // }, []);

  // if (!isClient) {
  //   return null;
  // }

  return (
    // <MsalProvider instance={msalInstance!}>
    <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
    // </MsalProvider>
  );
}
