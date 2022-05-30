import type { User } from '@microsoft/microsoft-graph-types';
import { apiMicrosoftGraph } from './api.microsoftGraph';
import { getAppropriateAvailablePhotoSize, responseHandlerPhoto, responseHandlerValue, validateStatus } from './api.users.utils';

const extendedApi = apiMicrosoftGraph.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * One of the following permissions is required to run the query:
     * User.Read
     */
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `/v1.0/users/${id}`,
        };
      },
    }),

    /**
     * One of the following permissions is required to run the query:
     * Directory.Read.All, Directory.ReadWrite.All, User.Read.All, User.ReadWrite.All
     */
    getUserManagerById: builder.query<User, { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          url: `/v1.0/users/${id}/manager`,
        };
      },
    }),

    /**
     * One of the following permissions is required to run the query:
     * People.Read, People.Read.All
     */
    getUserPeopleById: builder.query<User[], { id: string }>({
      query: ({ id }) => {
        return {
          method: 'GET',
          responseHandler: responseHandlerValue,
          url: `/v1.0/users/${id}/people`,
        };
      },
    }),

    /**
     * One of the following permissions is required to run the query:
     * User.Read
     */
    getUserPhotoById: builder.query<string, { id: string; size?: number }>({
      query: ({ id, size = 64 }) => {
        const photoSize = getAppropriateAvailablePhotoSize(size);
        return {
          method: 'GET',
          responseHandler: responseHandlerPhoto,
          url: `/v1.0/users/${id}/photos/${photoSize}/$value`,
          validateStatus,
        };
      },
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUserPhotoByIdQuery, useGetUserManagerByIdQuery, useGetUserPeopleByIdQuery } = extendedApi;
