import { useMemo } from 'react';
import { IonAvatar, IonItem, IonLabel, IonSkeletonText } from '@ionic/react';

export const ItemAvatarSkeleton: React.FC<TProps> = ({ numberOfLines = 1, ...rest }) => {
  const renderLines = useMemo(() => {
    return new Array(numberOfLines)
      .fill(null)
      .map((_, numberOfLinesIndex) => <IonSkeletonText key={`text-line-${numberOfLinesIndex}`} animated />);
  }, [numberOfLines]);

  return (
    <IonItem {...rest}>
      <IonAvatar slot="start">
        <IonSkeletonText animated />
      </IonAvatar>
      <IonLabel>{renderLines}</IonLabel>
    </IonItem>
  );
};

type TProps = Omit<React.ComponentProps<typeof IonItem>, 'children'> & {
  numberOfLines?: number;
};
