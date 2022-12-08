import { useEffect, useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { useHistory } from "react-router-dom";
import { CustomNavigationClient } from "./NavigationClient";

// This component is needed to take advantage of the router's navigate functions when MSAL redirects between pages in your app
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
