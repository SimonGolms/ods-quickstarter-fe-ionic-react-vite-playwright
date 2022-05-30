import { IonImg, IonPage } from '@ionic/react';
import { ButtonLogIn } from '../../components/ButtonLogIn/ButtonLogIn';
import styles from './LoginPage.module.css';

export function LoginPage() {
  return (
    <IonPage>
      <div className="ion-padding ion-text-center">
        <IonImg alt="app-icon" className={styles.icon} src="/assets/icons/icon.svg" />
        <div>
          <h1>Welcome</h1>
          <p>Enjoy the App</p>
          <br />
          <ButtonLogIn />
        </div>
      </div>
    </IonPage>
  );
}
