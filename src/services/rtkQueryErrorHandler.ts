import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

// see: https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level
export const rtkQueryErrorHandler: Middleware = (_api: MiddlewareAPI) => (next) => (action) => {
  if (!isRejectedWithValue(action)) {
    return next(action);
  }

  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.error(action);
  }

  return next(action);
};
