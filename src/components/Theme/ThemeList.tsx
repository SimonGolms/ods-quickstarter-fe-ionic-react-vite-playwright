import { useCallback } from "react";
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  RadioGroupChangeEventDetail,
} from "@ionic/react";
import { ThemeId, THEMES } from "./theme.utils";
import { useTheme } from "./useTheme";

export const ThemeList = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = useCallback(
    (event: CustomEvent<RadioGroupChangeEventDetail<ThemeId>>) => {
      setTheme(event.detail.value);
    },
    [setTheme]
  );

  return (
    <IonList>
      <IonRadioGroup value={theme.id} onIonChange={handleChange}>
        <IonListHeader>
          <IonLabel>Theme</IonLabel>
        </IonListHeader>
        {THEMES.map(({ id, label }) => {
          return (
            <IonItem key={id}>
              <IonLabel>{label}</IonLabel>
              <IonRadio value={id} />
            </IonItem>
          );
        })}
      </IonRadioGroup>
    </IonList>
  );
};
