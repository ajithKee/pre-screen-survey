import { MedicalHistoryInfo } from './medicalHistoryType';
import { PrimaryInfo } from './primaryInfoType';

export interface SurveySliceType {
   memberInfo: PrimaryInfo;
   memberHistory: MedicalHistoryInfo;
}
