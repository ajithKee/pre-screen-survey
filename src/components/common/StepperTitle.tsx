import React from 'react';
import { Box, Typography } from '@mui/material';

const styles = {
   titleBox: {
      textAlign: 'center',
   },
};

type StepperTitle = {
   title: string;
};

function StepperTitle({ title }: StepperTitle) {
   return (
      <Box sx={styles.titleBox}>
         <Typography variant={'h5'}>{title}</Typography>
      </Box>
   );
}

export default StepperTitle;
