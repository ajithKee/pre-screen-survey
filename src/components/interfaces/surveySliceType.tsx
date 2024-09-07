import { MedicalHistoryInfo } from './medicalHistoryType';
import { PrimaryInfo } from './primaryInfoType';
import { InsuranceInformationType } from './insuranceInformationType';

export interface SurveySliceType {
   memberInfo: PrimaryInfo;
   memberHistory: MedicalHistoryInfo;
   memberInsuranceInfo: InsuranceInformationType;
   isLoading: boolean;
}
