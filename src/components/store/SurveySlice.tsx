import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SurveySliceType } from '../interfaces/surveySliceType';
import { PrimaryInfo, MedicalHistoryInfo, InsuranceInformationType} from '../interfaces/formTypes';

/* Initial state of the survey form */
const initialState: SurveySliceType = {
   memberInfo: {
      firstName: '',
      lastName: '',
      dob: new Date(),
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
      effectiveDate: new Date(),
   },
   isLoading: false,
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
         action: PayloadAction<PrimaryInfo>
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
         action: PayloadAction<InsuranceInformationType>
      ) => {
         state.memberInsuranceInfo = action.payload;
      },
      setLoading: (state: any, action: PayloadAction<boolean>) => {
         state.isLoading = action.payload;
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
} = surveySlice.actions;
