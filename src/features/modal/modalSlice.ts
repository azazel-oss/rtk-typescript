import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  initialState: {
    isOpen: false,
  },
  name: "modal",
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;

export const { openModal, closeModal } = modalSlice.actions;
