import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { LoginPage } from './Login/LoginPage';
import { LogoutPage } from './Logout/LogoutPage';
import { ProtectedPages } from './ProtectedPages';

export const Pages = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route component={LogoutPage} exact path="/logout" />
        <Route component={LoginPage} exact path="/login" />
        <Route component={ProtectedPages} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};
