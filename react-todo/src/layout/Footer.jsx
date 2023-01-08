import React from 'react';

/* Material Imports */
import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <Typography 
            variant="caption"
            component="div"
            sx={{
                position: 'absolute',
                bottom: 0,
                margin: 1

            }}>
                Frontend Application Design 2023
        </Typography>
    )
}

export default Footer;