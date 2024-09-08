import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
   InsuranceInformationSlice,
   PrimarySlice,
   SurveySliceType,
} from '../interfaces/surveySliceType';
import { MedicalHistoryInfo } from '../interfaces/formTypes';

/* Initial state of the survey form */
const initialState: SurveySliceType = {
   memberInfo: {
      firstName: '',
      lastName: '',
      dob: new Date().toISOString(),
      streetAddress: '',
      state: 'Maryland',
      zipCode: '',
   },
   memberHistory: {
      BUN: '',
      'Blood Pressure': '',
      'Blood Sugar': '',
      Colestrol: '',
      'Currently on Medication': '',
   },
   memberInsuranceInfo: {
      providerName: '',
      memberName: '',
      memberId: '',
      groupNumber: '',
      effectiveDate: new Date().toISOString(),
   },
   isLoading: false,
   isSubmitted: false,
};

/**
 * Configuration for the survey slice of the state store.
 */
const sliceConfig = {
   name: 'surveySlice',
   initialState,
   reducers: {
      addPersonalInformation: (
         state: SurveySliceType,
         action: PayloadAction<PrimarySlice>
      ) => {
         state.memberInfo = action.payload;
      },
      addMedicalHistoryInformation: (
         state: SurveySliceType,
         action: PayloadAction<MedicalHistoryInfo>
      ) => {
         state.memberHistory = action.payload;
      },
      addInsuranceInformation: (
         state: SurveySliceType,
         action: PayloadAction<InsuranceInformationSlice>
      ) => {
         state.memberInsuranceInfo = action.payload;
      },
      setLoading: (state: any, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload;
      },
      setSubmitted: (state: any, action: PayloadAction<boolean>) => {
         state.isSubmitted = action.payload;
      },
   },
   extraReducers: (builder: any) => {
      builder.addCase(submitFormToBackEnd.pending, (state: SurveySliceType) => {
         state.isLoading = true;
      });
      builder.addCase(
         submitFormToBackEnd.fulfilled,
         (state: SurveySliceType, action: PayloadAction<SurveySliceType>) => {
            state.isLoading = false;
            console.log(action.payload);
            state.isSubmitted = true;
         }
      );
      builder.addCase(
         submitFormToBackEnd.rejected,
         (state: SurveySliceType, action: any) => {
            state.isLoading = false;
         }
      );
   },
};

/* Create the slice */
let surveySlice = createSlice(sliceConfig);

/**
 * Function to simulate submitting the form to backend. Fake 5 second wait time to simulate async submissions
 */
export const submitFormToBackEnd = createAsyncThunk(
   'surveySlice/submitFormToBackEnd',
   async (payload: SurveySliceType) => {
      let promise = new Promise((resolve, reject) => {
         setTimeout(() => {
            return resolve(payload);
         }, 5000);
      });

      return promise;
   }
);

/* Export the reducer and actions */
export default surveySlice.reducer;

export const {
   addPersonalInformation,
   addMedicalHistoryInformation,
   addInsuranceInformation,
   setLoading,
   setSubmitted,
} = surveySlice.actions;
