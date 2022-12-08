import { RootState } from "./../../store";

export const selectUserThemeId = (state: RootState) => {
  return state.user.themeId;
};
