import { useEffect, useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { useHistory } from "react-router-dom";
import { CustomNavigationClient } from "./NavigationClient";

/**
 * This component is optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
 * @see: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/09f65ee73fa849e71e3a73b857f562fab9d47263/samples/msal-react-samples/react-18-sample/src/App.js#L38-L54
 */
export const ClientSideNavigation = ({ children, instance }: TProps) => {
  const navigate = useHistory();
  const navigationClient = new CustomNavigationClient(navigate);
  instance.setNavigationClient(navigationClient);

  // react-router-dom v6 doesn't allow navigation on the first render - delay rendering of MsalProvider to get around this limitation
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    setFirstRender(false);
  }, []);

  if (firstRender) {
    return null;
  }

  return <>{children}</>;
};

type TProps = {
  children: React.ReactNode;
  instance: PublicClientApplication;
};
