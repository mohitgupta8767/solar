import { Configuration } from "@azure/msal-browser";

export const msalConfig: Configuration = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID || '',
        authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
        redirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false,
        postLogoutRedirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true,
    },
    system: {
        allowNativeBroker: false,
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case 0:
                        console.error(message);
                        return;
                    case 1:
                        console.warn(message);
                        return;
                    case 2:
                        console.info(message);
                        return;
                    case 3:
                        console.debug(message);
                        return;
                    default:
                        console.log(message);
                        return;
                }
            },
            logLevel: 3
        }
    }
};

export const loginRequest = {
    scopes: ["User.Read", "profile", "email", "openid"]
}; 