export type PrimaryInfo = {
   firstName: string;
   lastName: string;
   dob: Date;
   streetAddress: string;
   state: string;
   zipCode: string;
};

export const defaultPrimaryInfo: PrimaryInfo = {
   firstName: '',
   lastName: '',
   dob: new Date(),
   streetAddress: '',
   state: '',
   zipCode: '',
};
