import { MedicalHistoryInfo, PrimaryInfo, InsuranceInformationType } from './formTypes';

/* Type of the Survey slice data */
export interface SurveySliceType {
   memberInfo: PrimaryInfo;
   memberHistory: MedicalHistoryInfo;
   memberInsuranceInfo: InsuranceInformationType;
   isLoading: boolean;
}
