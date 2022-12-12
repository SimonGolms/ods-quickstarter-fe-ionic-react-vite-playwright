import { IonIcon, IonItem, IonLabel, IonList, IonListHeader, isPlatform } from "@ionic/react";
import { settingsOutline } from "ionicons/icons";
import { ItemLogOut } from "../ButtonLogOut/ItemLogOut";
import styles from "./UserMenuList.module.css";

export const UserMenuList = ({ headerTitle, lines = "full", ...rest }: TProps) => {
  return (
    <IonList class="ion-padding-vertical" lines={lines} {...rest}>
      <IonListHeader className={isPlatform("ios") ? styles["header-ios"] : ""}>{headerTitle}</IonListHeader>
      <IonItem routerDirection="root" routerLink="/settings" type="button">
        <IonLabel>Settings</IonLabel>
        <IonIcon icon={settingsOutline} slot="start" />
      </IonItem>
      <ItemLogOut />
    </IonList>
  );
};

type TProps = React.ComponentProps<typeof IonList> & {
  headerTitle?: string | null;
};
