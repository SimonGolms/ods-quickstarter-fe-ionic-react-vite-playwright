import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { TABS } from "./TabsLayout.utils";

export const TabsLayout = ({ children }: TProps) => {
  return (
    <IonTabs>
      {children}
      <IonTabBar slot="bottom">
        {TABS.map(({ href, icon, label, tab }) => (
          <IonTabButton key={tab} href={href} tab={tab}>
            <IonIcon icon={icon} />
            {label && <IonLabel>{label}</IonLabel>}
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  );
};

type TProps = {
  children: React.ReactNode;
};
