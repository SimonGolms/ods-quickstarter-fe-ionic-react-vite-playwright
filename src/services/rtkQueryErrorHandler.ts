import { type Action, isRejectedWithValue, type Middleware, type MiddlewareAPI } from "@reduxjs/toolkit";

/**
 * Log an error during development
 *
 * @see https://redux-toolkit.js.org/rtk-query/usage/error-handling#handling-errors-at-a-macro-level
 */
export const rtkQueryErrorHandler: Middleware = (_api: MiddlewareAPI) => (next) => (action: Action) => {
  if (import.meta.env.DEV && isRejectedWithValue(action)) {
    // eslint-disable-next-line no-console
    console.error(action);
  }

  return next(action);
};
