import { MessagePermissionsInformation } from "../../components/Message/MessagePermissionsInformation";
import { UserProfile } from "../../components/UserProfile/UserProfile";
import { RootPageLayout } from "../Layout/RootPageLayout";

export const UserPage = () => {
  return (
    <RootPageLayout className="ion-padding-vertical" color="primary" title="User">
      <UserProfile />
      <div className="ion-padding-horizontal">
        <h3>Further Information</h3>
        <MessagePermissionsInformation />
      </div>
    </RootPageLayout>
  );
};
