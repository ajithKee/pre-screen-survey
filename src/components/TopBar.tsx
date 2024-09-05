import React from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SurveyStepper from './SurveyStepper';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

/* CSS styles */
const styles = {
   topBar: {
      height: '75px',
   },
   topBarContainer: {
      paddingTop: '10px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
   },
   topBarIcon: {
      width: '50px',
      height: '50px',
   },
   surveyContainer: {
      marginTop: '50px',
      marginBottom: '50px',
   },
};

type topBarProps = {};

/**
 * Title bar component
 * @param props
 */
function TopBar(props: topBarProps): ReactJSXElement {
   return (
      <>
         <AppBar position="static" sx={styles.topBar}>
            <Container sx={styles.topBarContainer} disableGutters>
               <BloodtypeIcon sx={styles.topBarIcon}></BloodtypeIcon>
               <Typography variant="h5">PRE SCREENING SURVEY</Typography>
            </Container>
            <Container sx={styles.surveyContainer}>
               <SurveyStepper />
            </Container>
         </AppBar>
      </>
   );
}

export default TopBar;
