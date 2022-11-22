import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateMenu from '../NavigateMenu/NavigateMenu'
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import {
    burgerMenuStyle,
    logoDailyBoxStyle,
    logoDailyBoxStyle__Text,
} from './styles'
import './styles.css'
import '@fontsource/roboto/400.css';

const ProfileMenu = () => {

    const [drawerMenu, setDrawerMenu] = React.useState({
        left: false,
    });
    
    const toggleDrawer =
        (open) =>
        (event) => {
        if (
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) {
            return;
        }
            setDrawerMenu({ ...drawerMenu, left: open });
        }; 

    return (
        <>
                    <Box>
                        <NavigateMenu 
                            toggleDrawer = {() => toggleDrawer(false)}
                            drawerMenu = {drawerMenu}
                        />
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 1 }}
                        >
                        <Button onClick={toggleDrawer(true)}>
                            <MenuIcon style = {burgerMenuStyle}/>
                        </Button>
                    </IconButton>
                    </Box>
                    <Box style = {logoDailyBoxStyle}>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            style = {logoDailyBoxStyle__Text}
                        >
                            ЭШЕЛОН
                        </Typography>
                    </Box>
        </>
    )
}

export default React.memo(ProfileMenu)