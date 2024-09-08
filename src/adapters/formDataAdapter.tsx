import {
   InsuranceInformationType,
   PrimaryInfo,
} from '../components/interfaces/formTypes';
import {
   InsuranceInformationSlice,
   PrimarySlice,
} from '../components/interfaces/surveySliceType';

export const convertInsuranceInfoFormDataToSlice = (
   formValue: InsuranceInformationType
): InsuranceInformationSlice => {
   return {
      providerName: formValue.providerName,
      memberName: formValue.memberName,
      memberId: formValue.memberId,
      groupNumber: formValue.groupNumber,
      effectiveDate: formValue.effectiveDate.toISOString(),
   } as InsuranceInformationSlice;
};

export const convertInsuranceInfoSliceToFormData = (
   slice: InsuranceInformationSlice
): InsuranceInformationType => {
   return {
      providerName: slice.providerName,
      memberName: slice.memberName,
      memberId: slice.memberId,
      groupNumber: slice.groupNumber,
      effectiveDate: new Date(slice.effectiveDate),
   } as InsuranceInformationType;
};

export const convertPersonInfoFormDataToSlice = (
   formValues: PrimaryInfo
): PrimarySlice => {
   return {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      dob: formValues.dob.toISOString(),
      streetAddress: formValues.streetAddress,
      state: formValues.state,
      zipCode: formValues.zipCode,
   } as PrimarySlice;
};

export const convertPersonInfoSliceToFormData = (
   primarySlice: PrimarySlice
): PrimaryInfo => {
   return {
      firstName: primarySlice.firstName,
      lastName: primarySlice.lastName,
      dob: new Date(primarySlice.dob),
      streetAddress: primarySlice.streetAddress,
      state: primarySlice.state,
      zipCode: primarySlice.zipCode,
   } as PrimaryInfo;
};
