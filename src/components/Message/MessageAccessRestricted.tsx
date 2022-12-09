import { IonIcon } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import styles from "./Message.module.css";

export const MessageAccessRestricted = ({ children }: TProps) => {
  return (
    <div className={[styles.container, styles.danger].join(" ")}>
      <IonIcon icon={alertCircleOutline} size="large" />
      <div>
        <strong>Access Restricted</strong>
        <br />
        {children}
      </div>
    </div>
  );
};

type TProps = {
  children?: React.ReactNode;
};
