import { IonAvatar, IonSkeletonText, isPlatform } from '@ionic/react';
import styles from './AvatarSkeleton.module.css';

export const AvatarSkeleton: React.FC<TProps> = ({ expand, ...rest }) => {
  return (
    <IonAvatar className={expand ? styles.expand : ''} {...rest}>
      <IonSkeletonText animated className={isPlatform('ios') ? styles['skeleton-ios'] : ''} />
    </IonAvatar>
  );
};

type TProps = React.ComponentProps<typeof IonAvatar> & {
  expand?: 'full';
};
