import { configureStore } from '@reduxjs/toolkit';
import surveySlice from './SurveySlice';

/**
 * The state store
 */
export const stateStore = configureStore({
   reducer: {
      surveySlice: surveySlice,
   },
});

export type RootState = ReturnType<typeof stateStore.getState>;
export type AppDispatch = typeof stateStore.dispatch;
