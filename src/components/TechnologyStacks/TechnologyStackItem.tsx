import { IonImg } from '@ionic/react';

export const TechnologyStackItem = ({ alt, href, src }: TechnologyStackItemProps) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <IonImg alt={alt} src={src} />
    </a>
  );
};

export type TechnologyStackItemProps = {
  alt: string;
  href: string;
  src: string;
};
