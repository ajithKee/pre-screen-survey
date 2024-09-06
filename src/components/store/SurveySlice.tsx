import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SurveySliceType} from "../interfaces/surveySliceType";
import {PrimaryInfo} from "../interfaces/primaryInfoType";
import {MedicalHistoryInfo} from "../interfaces/medicalHistoryType";


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
};

const sliceConfig = {
    name: 'surveySlice',
    initialState,
    reducers: {
        addPersonalInformation: (state: any, action: PayloadAction<PrimaryInfo>) => {
            state.memberInfo = action.payload;
        },
        addMedicalHistoryInformation: (state: any, action: PayloadAction<MedicalHistoryInfo>) => {
            state.memberHistory = action.payload;
        }

    }
}

let surveySlice = createSlice(sliceConfig);

export default surveySlice.reducer;
export const {addPersonalInformation, addMedicalHistoryInformation } = surveySlice.actions;