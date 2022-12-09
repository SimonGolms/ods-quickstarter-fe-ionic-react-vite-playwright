import { BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { aquireTokenMsal } from "../../auth";

const BASE_URL = "https://graph.microsoft.com/";

export const rtkFetchBaseQueryMicrosoftGraph: BaseQueryFn<FetchArgs | string, unknown, FetchBaseQueryError> = async (
  args,
  api /* NOSONAR */,
  extraOptions
) => {
  const { accessToken } = await aquireTokenMsal();

  const prepareHeaders = (headers: Headers): Headers => {
    headers.set("Authorization", `Bearer ${accessToken}`);
    return headers;
  };

  return fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  })(args, api, extraOptions);
};
