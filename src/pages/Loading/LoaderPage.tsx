import { IonContent, IonPage, IonSpinner } from "@ionic/react";
import styles from "./LoaderPage.module.css";

export const LoaderPage = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.container}>
          <IonSpinner color="primary" />
        </div>
      </IonContent>
    </IonPage>
  );
};
