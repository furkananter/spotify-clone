import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  controls: false,
  current: false,
  playing: false,
  sidebar: false,
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setControls: (state, action) => {
        state.controls = action.payload
    },
    setCurrent: (state, action) => {
        state.current = action.payload
    },
    setPlaying: (state, action) => {
        state.playing = action.payload
    },
    setSidebar: (state, action) => {
        state.sidebar = action.payload
    }
  },
})

export const {
    setControls,
    setCurrent,
    setPlaying,
    setSidebar
} = playerSlice.actions

export default playerSlice.reducer