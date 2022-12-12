import { MsalProvider } from "@azure/msal-react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { msalInstance } from "./auth";
import { persistor, store } from "./store";
import { ClientSideNavigation } from "./utils/authentication/ClientSideNavigation";

export const AppProviders = ({ children }: TProps) => {
  return (
    <ClientSideNavigation instance={msalInstance}>
      <MsalProvider instance={msalInstance}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </MsalProvider>
    </ClientSideNavigation>
  );
};

type TProps = {
  children: React.ReactNode;
};
