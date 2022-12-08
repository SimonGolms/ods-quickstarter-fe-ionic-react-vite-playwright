import { IonItem, IonLabel } from "@ionic/react";
import { env } from "../../../config";

export const ItemAppVersion = (props: TProps) => {
  return (
    <IonItem {...props}>
      <IonLabel>Version: {env.VITE_VERSION}</IonLabel>
    </IonItem>
  );
};

type TProps = Omit<React.ComponentProps<typeof IonItem>, "children">;
