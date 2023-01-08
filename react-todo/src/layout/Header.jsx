import React from 'react';

/* Material UI Imports */
import {AppBar} from '@mui/material';
import {Toolbar} from '@mui/material';
import { Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                    My Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;