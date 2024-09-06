export type PrimaryInfo = {
   firstName: string;
   lastName: string;
   dob: Date | null;
   streetAddress: string;
   state: string;
   zipCode: string;
};

export const defaultPrimaryInfo: PrimaryInfo = {
   firstName: '',
   lastName: '',
   dob: new Date(),
   streetAddress: '',
   state: 'Maryland',
   zipCode: '',
};
