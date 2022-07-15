import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedComponent: null,
  drawerOpen: false,
};

export const componentSlice = createSlice({
  name: "component",
  initialState,
  reducers: {
    selectComponent: (state, action) => {
      state.selectedComponent = action.payload;
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { selectComponent } = componentSlice.actions;
export const selectSelectedComponent = (state) =>
  state.component.selectedComponent;
export default componentSlice.reducer;
