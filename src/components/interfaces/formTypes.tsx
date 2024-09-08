/* Type of the Primary Information form */
export type PrimaryInfo = {
   firstName: string;
   lastName: string;
   dob: Date;
   streetAddress: string;
   state: string;
   zipCode: string;
};

/* Type of the Insurance Information form */
export interface InsuranceInformationType {
   providerName: string;
   memberName: string;
   memberId: string;
   groupNumber: string;
   effectiveDate: Date;
}

/* Type of the Medical History form */
export type MedicalHistoryInfo = {
   BUN: string;
   'Blood Pressure': string;
   'Blood Sugar': string;
   Colestrol: string;
   'Currently on Medication': string;
};
