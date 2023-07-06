import pipesReducer, { PipesState } from './pipeSlice';

import { configureStore } from '@reduxjs/toolkit';

export interface RootState {
  pipes: PipesState;
}

const store = configureStore({
  reducer: {
    pipes: pipesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
