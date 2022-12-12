import { InteractionStatus } from "@azure/msal-browser";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { AdminPage } from "./Admin/AdminPage";
import { HomePage } from "./Home/Home";
import { TabsLayout } from "./Layout/TabsLayout";
import { LoaderPage } from "./Loading/LoaderPage";
import { LoginPage } from "./Login/LoginPage";
import { SettingsPage } from "./Settings/SettingsPage";
import { UserPage } from "./User/UserPage";

export const ProtectedPages = () => {
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  /**
   * Make sure MSAL has completed any response handling it needs to do before we continue with redirects,
   * that clears the hash and would otherwise create a race between MSAL and react-router.
   * See: https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/4628#issuecomment-1106649000
   */
  if (inProgress !== InteractionStatus.None) {
    return <LoaderPage />;
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <TabsLayout>
      <IonRouterOutlet>
        <Route component={AdminPage} exact path="/admin" />
        <Route component={HomePage} exact path="/home" />
        <Route component={SettingsPage} exact path="/settings" />
        <Route component={UserPage} exact path="/user" />
        <Route render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </TabsLayout>
  );
};
