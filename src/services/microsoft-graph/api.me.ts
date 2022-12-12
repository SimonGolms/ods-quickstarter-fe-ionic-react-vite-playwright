import type { User } from "@microsoft/microsoft-graph-types";
import { apiMicrosoftGraph } from "./api.microsoftGraph";

const extendedApi = apiMicrosoftGraph.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, never | void>({
      query: () => "/v1.0/me/",
    }),
  }),
});

export const { useGetMeQuery } = extendedApi;
