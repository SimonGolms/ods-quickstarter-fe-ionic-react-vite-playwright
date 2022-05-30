import {
  AuthenticationResult,
  BrowserAuthError,
  type Configuration,
  EventMessage,
  EventType,
  InteractionRequiredAuthError,
  PublicClientApplication,
  type RedirectRequest,
} from '@azure/msal-browser';
import { env } from './config';

export const REDIRECT_REQUEST: RedirectRequest = {
  scopes: ['User.Read'],
};

// Configuration Option for MSAL
// see: https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/master/lib/msal-browser/docs/configuration.md
const MSAL_CONFIG: Configuration = {
  auth: {
    authority: `https://login.microsoftonline.com/${env.REACT_APP_AZURE_ACTIVE_DIRECTORY_TENANT_ID}`,
    clientId: env.REACT_APP_AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
    navigateToLoginRequestUrl: false,
    postLogoutRedirectUri: '/logout',
    redirectUri: '/',
  },
  cache: {
    // Enables sso between browser tabs, see: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-sso
    cacheLocation: 'localStorage',
  },
};

export const msalInstance = new PublicClientApplication(MSAL_CONFIG);

// Default to using the first account if no account is active on page load
const accounts = msalInstance.getAllAccounts();
if (accounts.length > 0) {
  // Account selection logic is app dependent. Adjust as needed for different use cases.
  msalInstance.setActiveAccount(accounts[0]);
}

// Optional - This will update account state if a user signs in from another tab or window
msalInstance.enableAccountStorageEvents();

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    // eslint-disable-next-line no-type-assertion/no-type-assertion
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    msalInstance.setActiveAccount(account);
  }
});

export const aquireTokenMsal = async () => {
  const account = msalInstance.getActiveAccount() || undefined;

  return msalInstance
    .acquireTokenSilent({
      account,
      scopes: ['User.Read'],
    })
    .catch((errorAcquireTokenSilent: Error) => {
      if (!(errorAcquireTokenSilent instanceof BrowserAuthError) && !(errorAcquireTokenSilent instanceof InteractionRequiredAuthError)) {
        throw errorAcquireTokenSilent;
      }

      // fallback to interaction when silent call fails
      return msalInstance
        .ssoSilent({
          account,
          scopes: ['User.Read'],
        })
        .catch((errorSsoSilent: Error) => {
          msalInstance.acquireTokenRedirect({
            account,
            prompt: 'select_account',
            scopes: ['User.Read'],
          });
          throw errorSsoSilent;
        });
    });
};
