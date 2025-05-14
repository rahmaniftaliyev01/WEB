// src/features/contact/contactSlice.js
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
const contactAdapter = createEntityAdapter({
  selectId: (contact) => contact.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

const initialState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  contacts: contactAdapter.getInitialState(),
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = { name: "", email: "", message: "" };
      state.status = "idle";
      state.error = null;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { updateField, resetForm, setStatus, setError } =
  contactSlice.actions;
export default contactSlice.reducer;
