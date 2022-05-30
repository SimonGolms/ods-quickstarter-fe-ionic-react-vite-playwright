import { MessageAccessInformation } from '../../components/Message/MessageAccessInformation';
import { MessageAccessRestricted } from '../../components/Message/MessageAccessRestricted';
import { MessageAccessSuccess } from '../../components/Message/MessageAccessSuccess';
import { useAccountRole } from '../../utils/authentication/useAccountRole';
import { RootPageLayout } from '../Layout/RootPageLayout';
import styles from './AdminPage.module.css';

export const AdminPage: React.FC = () => {
  const { isAdmin } = useAccountRole();

  return (
    <RootPageLayout className="ion-padding" color="primary" title="Admin">
      <div className={styles.container}>
        {isAdmin ? (
          <MessageAccessSuccess>
            You have the role <i>admin</i> assigned
          </MessageAccessSuccess>
        ) : (
          <MessageAccessRestricted>
            Only user with role <i>admin</i> have access
          </MessageAccessRestricted>
        )}
        <div>
          <h3>Further Information</h3>
          <MessageAccessInformation />
        </div>
      </div>
    </RootPageLayout>
  );
};
