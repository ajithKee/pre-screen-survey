import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {InsuranceInformationSlice, PrimarySlice, SurveySliceType} from '../interfaces/surveySliceType';
import {
   PrimaryInfo,
   MedicalHistoryInfo,
   InsuranceInformationType,
} from '../interfaces/formTypes';

/* Initial state of the survey form */
const initialState: SurveySliceType = {
   memberInfo: {
      firstName: '',
      lastName: '',
      dob: '',
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
      effectiveDate: '',
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
         state.memberInsuranceInfo =  action.payload;

      },
      setLoading: (state: any, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload;
      },
      setSubmitted: (state: any, action: PayloadAction<boolean>) => {
         state.isSubmitted = action.payload;
      },
   },
};

/* Create the slice */
let surveySlice = createSlice(sliceConfig);

/* Export the reducer and actions */
export default surveySlice.reducer;

export const {
   addPersonalInformation,
   addMedicalHistoryInformation,
   addInsuranceInformation,
   setLoading,
   setSubmitted,
} = surveySlice.actions;
