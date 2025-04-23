import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface СityState {
  name: string
}

const initialState: СityState = {
  name: ''
}

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    updateCity: (state, action: PayloadAction<string>) => {
      state.name = action.payload.trim()
    }
  }
})

export const { updateCity } = citySlice.actions
export const cityReducer = citySlice.reducer
