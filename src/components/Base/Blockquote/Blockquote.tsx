import { ReactNode } from 'react';
import styles from './Blockquote.module.css';

export const Blockquote = ({ quote, cite, caption = 'Link' }: TProps) => {
  return (
    <figure className={styles.figure}>
      <blockquote cite={cite} className={styles.blockquote}>
        <p>{quote}</p>
      </blockquote>
      <figcaption>
        <a href={cite} rel="noopener noreferrer" target="_blank">
          {caption}
        </a>
      </figcaption>
    </figure>
  );
};

type TProps = {
  caption?: string;
  cite: string;
  quote: ReactNode;
};
