/* Type of the Survey slice data */
export interface SurveySliceType {
   memberInfo: PrimarySlice;
   memberHistory: MedicalHistoryInfoSlice;
   memberInsuranceInfo: InsuranceInformationSlice;
   isLoading: boolean;
   isSubmitted: boolean;
}

/* Type of the Primary Information form */
export type PrimarySlice = {
   firstName: string;
   lastName: string;
   dob: string;
   streetAddress: string;
   state: string;
   zipCode: string;
};

/* Type of the Insurance Information form */
export interface InsuranceInformationSlice {
   providerName: string;
   memberName: string;
   memberId: string;
   groupNumber: string;
   effectiveDate: string;
}

/* Type of the Medical History form */
export type MedicalHistoryInfoSlice = {
   BUN: string;
   'Blood Pressure': string;
   'Blood Sugar': string;
   Colestrol: string;
   'Currently on Medication': string;
};
