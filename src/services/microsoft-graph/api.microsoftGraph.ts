import { createApi } from '@reduxjs/toolkit/query/react';
import { rtkFetchBaseQueryMicrosoftGraph } from './rtkFetchBaseQueryMicrosoftGraph';

// HINT: With the Graph Explorer you can conveniently make Microsoft Graph REST API requests
// and view corresponding responses easily: https://developer.microsoft.com/en-us/graph/graph-explorer

export const apiMicrosoftGraph = createApi({
  baseQuery: rtkFetchBaseQueryMicrosoftGraph,
  endpoints: () => ({}),
  keepUnusedDataFor: 3600, // 1 hour
  reducerPath: 'api-microsoft-graph',
});
