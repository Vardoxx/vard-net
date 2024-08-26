import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewsSortState {
  sortBy: string;
}

const initialState: NewsSortState = {
  sortBy: "",
};

export const sortSlice = createSlice({
  name: "sortNews",
  initialState,
  reducers: {
    getSortValue: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { getSortValue } = sortSlice.actions;

export default sortSlice.reducer;
