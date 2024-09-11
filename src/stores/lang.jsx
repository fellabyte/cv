import { configureStore, createSlice } from "@reduxjs/toolkit";

let langSlice = createSlice({
  name: "lang",
  initialState: {value: true},
  reducers: {
    setLang: (state) => {
      state.value = !state.value
    }
  }
})

export let { setLang } = langSlice.actions
export default langSlice.reducer