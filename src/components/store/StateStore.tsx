import { configureStore } from '@reduxjs/toolkit';
import surveySlice from './SurveySlice';

export const stateStore = configureStore({
   reducer: {
      surveySlice: surveySlice,
   },
});

export type RootState = ReturnType<typeof stateStore.getState>;
export type AppDispatch = typeof stateStore.dispatch;
