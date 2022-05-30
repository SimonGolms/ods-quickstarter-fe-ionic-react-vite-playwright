import { Greeter } from '../../components/Greeter/Greeter';
import { TechnologyStacks } from '../../components/TechnologyStacks/TechnologyStacks';
import { RootPageLayout } from '../Layout/RootPageLayout';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <RootPageLayout className="ion-padding" color="primary" title="Home">
      <div className={styles.container}>
        <h2>
          <Greeter />
        </h2>
        <div>
          <strong>Ready to create an app?</strong>
          <p>This is an advanced OpenDevStack Frontend Quickstarter to build mobile and desktop apps with the ionic framework and react.</p>
        </div>
        <TechnologyStacks />
      </div>
    </RootPageLayout>
  );
};
