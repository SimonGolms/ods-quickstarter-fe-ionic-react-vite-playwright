import { useCallback, useMemo } from "react";
import { InteractionStatus } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { IonButton, IonSpinner } from "@ionic/react";
import { REDIRECT_REQUEST } from "../../auth";
import { useSearchParams } from "../../utils/useSearchParams";
import styles from "./ButtonLogIn.module.css";

export const ButtonLogIn = ({ prompt }: TProps) => {
  const { instance, accounts, inProgress } = useMsal();

  /**
   * Prompt behavior:
   * The MSAL library does not send a prompt parameter during the interactive requests
   * and therefore does not enforce any prompt behavior.
   * If the website is open with '?prompt=login', the interactive sso login process is interrupted
   * and the user is forced to login with credentials.
   * However, this can also be overridden with the props parameter 'prompt'.
   * see: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-prompt-behavior
   */
  const { searchParams } = useSearchParams();
  const promptBehavior = useMemo(() => (searchParams.prompt || prompt) ?? undefined, [prompt, searchParams]);

  const handleClickLoginRedirect = useCallback(async () => {
    await instance.loginRedirect({
      ...REDIRECT_REQUEST,
      prompt: promptBehavior,
    });
  }, [instance, promptBehavior]);

  if (inProgress === InteractionStatus.Login) {
    return (
      <IonButton className={styles.button} disabled>
        <IonSpinner />
      </IonButton>
    );
  }

  if (accounts.length > 0) {
    return (
      <IonButton className={styles.button} href="/">
        Start
      </IonButton>
    );
  }

  return (
    <IonButton className={styles.button} onClick={handleClickLoginRedirect}>
      Log In with SSO
    </IonButton>
  );
};

type TProps = {
  prompt?: "consent" | "login" | "none" | "select_account";
};
