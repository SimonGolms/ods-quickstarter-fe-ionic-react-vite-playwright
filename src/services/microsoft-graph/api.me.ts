import type { User } from '@microsoft/microsoft-graph-types';
import { blobToBase64 } from '../api.utils';
import { apiMicrosoftGraph } from './api.microsoftGraph';

const extendedApi = apiMicrosoftGraph.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query<User, void>({
      query: () => '/v1.0/me/',
    }),

    getMePeople: builder.query<User['people'], void>({
      query: () => {
        const responseHandler = async (response: Response) => {
          const { value } = await response.json();
          // eslint-disable-next-line no-type-assertion/no-type-assertion
          return value as User['people'];
        };
        return {
          method: 'GET',
          responseHandler,
          url: '/v1.0/users/6ed4c28f-9cc3-4869-987e-070491f49ca3/people',
        };
      },
    }),

    getMePhoto: builder.query<string, void>({
      query: () => {
        // WORKAROUND: If the user does not have a photo, in this case the response will still be cached to avoid constantly sending new requests.
        const responseHandler = (response: Response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.blob().then((blob) => blobToBase64(blob));
          }
          if (response.status >= 400 && response.status <= 499) {
            return Promise.resolve('');
          }
          return response.json();
        };

        const validateStatus = (response: Response) =>
          (response.status >= 200 && response.status <= 299) || (response.status >= 400 && response.status <= 499);

        return {
          method: 'GET',
          responseHandler,
          url: '/v1.0/users/d5f377b5-fc9d-45f6-b6f9-eb6c2f0efe28/photo/$value',
          validateStatus,
        };
      },
    }),
  }),
});

export const { useGetMeQuery } = extendedApi;
