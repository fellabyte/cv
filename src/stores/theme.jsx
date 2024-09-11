import { createSlice } from "@reduxjs/toolkit";

export let themeSlice = createSlice({
  name: "theme",
  initialState: {value: window.localStorage.getItem('darkMode') === 'true'},
  reducers: {
    setTheme: (state) => {
      state.value = !state.value
      window.localStorage.setItem('theme', state.value);
    }
  }
})

export let { setTheme } = themeSlice.actions
export default themeSlice.reducer