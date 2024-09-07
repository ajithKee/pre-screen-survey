import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useSelector } from 'react-redux';
import { RootState } from '../store/StateStore';

const Styles = {
   containerStyle: {
      marginTop: '15%',
      marginLeft: '20%',
   },
   iconStyle: {
      fontSize: '50px',
      color: 'primary',
      marginRight: '5px',
   },
   boxStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyItems: 'center',
   },
   typographyStyle: {
      marginTop: '5px',
   },
   thankYouBoxStyle: {
      paddingTop: '10px',
      paddingLeft: '50px',
   },
};

/**
 * Survey submission success component
 */
function SuccessSubmit() {
   let personInformation = useSelector(
      (state: RootState) => state?.surveySlice?.memberInfo
   );

   return (
      <>
         <Container sx={Styles.containerStyle}>
            <Box sx={Styles.boxStyle}>
               <CheckCircleIcon color={'success'} sx={Styles.iconStyle} />
               <Typography sx={Styles.typographyStyle} variant={'h4'}>
                  Survey Submitted Successfully
               </Typography>
            </Box>

            <Typography sx={Styles.thankYouBoxStyle} variant={'h5'}>
               Thank you for submitting!
            </Typography>
            <Typography sx={Styles.thankYouBoxStyle} variant={'h5'}>
               {personInformation?.firstName} {personInformation?.lastName}
            </Typography>
         </Container>
      </>
   );
}

export default SuccessSubmit;
