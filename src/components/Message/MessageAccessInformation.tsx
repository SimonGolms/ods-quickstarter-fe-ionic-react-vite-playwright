import { Blockquote } from '../Base/Blockquote/Blockquote';

export const MessageAccessInformation = () => {
  return (
    <>
      <Blockquote
        caption="Microsoft Docs"
        cite="https://docs.microsoft.com/en-us/azure/active-directory/develop/custom-rbac-for-developers"
        quote="Role-based access control (RBAC) allows certain users or groups to have specific permissions regarding which resources they have
            access to, what they can do with those resources, and who manages which resources."
      />
      <br />
      Explore: {''}
      <a
        href="https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps"
        rel="noopener noreferrer"
        target="_blank"
      >
        How to add app roles in Azure AD apps
      </a>
    </>
  );
};
