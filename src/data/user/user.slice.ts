import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { THEME_DEFAULT, ThemeId } from "../../components/Theme/theme.utils";

type UserState = {
  themeId: ThemeId;
};

const initialState: UserState = {
  themeId: THEME_DEFAULT.id,
};

const userSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(PURGE, (_state) => {
      return initialState;
    });
  },
  initialState,
  name: "user",
  reducers: {
    resetUserState() {
      return initialState;
    },
    setThemeId(state, action: PayloadAction<ThemeId>) {
      state.themeId = action.payload;
    },
  },
});

export const { setThemeId } = userSlice.actions;

export default userSlice.reducer;
