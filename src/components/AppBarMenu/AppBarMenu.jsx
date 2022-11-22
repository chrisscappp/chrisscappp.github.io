import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { 
    appBarStyle,
} from './styles'

const AppBarMenu = ({children}) => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style = {appBarStyle}>
                <Toolbar>
                    {children}
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default React.memo(AppBarMenu)