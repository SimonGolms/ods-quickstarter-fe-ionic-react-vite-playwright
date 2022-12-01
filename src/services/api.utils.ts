import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError, skipToken } from '@reduxjs/toolkit/query';

export const blobToBase64 = async (blob: Blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result?.toString() ?? '');
    reader.readAsDataURL(blob);
  });
};

/**
 * Returns the status of a rtk-query error. The status can be a number
 * Why? Because the error can always be in several formats (like SerializedError).
 *
 * @param {(FetchBaseQueryError | SerializedError | undefined)} error
 * @return {number | 'FETCH_ERROR' | 'CUSTOM_ERROR' | undefined}
 */
export const getErrorStatus = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (!isFetchBaseQueryError(error)) {
    return undefined;
  }

  if ('originalStatus' in error) {
    return error.originalStatus;
  }
  return error.status;
};

/**
 * Helper function to get the rtk-query payload or skipToken
 *
 * @param id
 * @returns
 */
export const getIdPayloadOrSkipToken = (id?: string | null) => {
  return id ? { id } : skipToken;
};

/**
 * Type guard as rtk-query error can have the Serialized error type if the fetchBaseQuery function returns an error.
 *
 * @param {(FetchBaseQueryError | SerializedError | undefined)} error
 * @returns { boolean }
 * @see https://github.com/reduxjs/redux-toolkit/issues/1337#issuecomment-885954769
 */
const isFetchBaseQueryError = (error: FetchBaseQueryError | SerializedError | undefined): error is FetchBaseQueryError =>
  error !== undefined && 'status' in error;
