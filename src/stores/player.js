import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  controls: false,
  current: false,
  playing: false,
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
    }
  },
})

export const {
    setControls,
    setCurrent,
    setPlaying
} = playerSlice.actions

export default playerSlice.reducer