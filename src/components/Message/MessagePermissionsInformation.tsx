import { Blockquote } from "../Base/Blockquote/Blockquote";

export const MessagePermissionsInformation = () => {
  return (
    <>
      <Blockquote
        caption="Microsoft Docs"
        cite="https://docs.microsoft.com/en-us/graph/azuread-users-concept-overview"
        quote="Develop user-centric applications. You can use Microsoft Graph to access the relationships, documents, contacts, and preferences that are contextually relevant to the signed-in user. The user resource provides straightforward way for you to access and manipulate user resources without having to perform additional calls, look up specific authentication information, and directly issue queries against other Microsoft Graph resources.

        To access a user's information and data, you'll need to get access on their behalf. Authenticating your application with admin consent enables you to work with and update a wider range of entities associated with a user."
      />
      <br />
      Explore:{" "}
      <a href="https://docs.microsoft.com/en-us/graph/" rel="noopener noreferrer" target="_blank">
        Microsoft Graph
      </a>
      ,{" "}
      <a
        href="https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent"
        rel="noopener noreferrer"
        target="_blank"
      >
        Permissions and consent in the Microsoft identity platform
      </a>
    </>
  );
};
