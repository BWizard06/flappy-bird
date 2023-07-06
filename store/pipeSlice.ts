import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PipeType {
  id: number;
  upper_height?: number;
  lower_height?: number;
}

export interface PipesState {
  pipes: PipeType[];
}

const initialState: PipesState = {
  pipes: [{ id: 0 }],
};

const pipesSlice = createSlice({
  name: 'pipes',
  initialState,
  reducers: {
    addPipe: (state, action: PayloadAction<PipeType>) => {
      state.pipes.push(action.payload);
    },
    removePipe: (state, action: PayloadAction<number>) => {
      state.pipes = state.pipes.filter(pipe => pipe.id !== action.payload);
    },
  },
});

export const { addPipe, removePipe } = pipesSlice.actions;
export default pipesSlice.reducer;
