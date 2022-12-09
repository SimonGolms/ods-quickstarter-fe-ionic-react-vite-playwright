import styles from "./TechnologyStack.module.css";
import { TechnologyStackItem, TechnologyStackItemProps } from "./TechnologyStackItem";

export const TechnologyStack = ({ items, title }: TProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div className={styles.container}>
        {items.map(({ alt, href, src }) => {
          return <TechnologyStackItem key={alt} alt={alt} href={href} src={src} />;
        })}
      </div>
    </div>
  );
};

type TProps = {
  items: TechnologyStackItemProps[];
  title: string;
};
