import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type OverlayProps = {
   open: boolean;
};

function Overlay({ open }: OverlayProps) {
   return (
      <div>
         <Backdrop open={open}>
            <CircularProgress color="primary" size={'75px'} />
         </Backdrop>
      </div>
   );
}

export default Overlay;
