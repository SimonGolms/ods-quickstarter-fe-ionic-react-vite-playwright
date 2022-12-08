import { useMemo } from "react";
import { useAccount } from "@azure/msal-react";

const ROLE_ADMIN = "admin";

export const useAccountRole = () => {
  const account = useAccount();
  const roles = useMemo(() => account?.idTokenClaims?.roles ?? [], [account]);

  const isAdmin = useMemo(() => roles.includes(ROLE_ADMIN), [roles]);
  return { isAdmin, ROLE_ADMIN };
};
