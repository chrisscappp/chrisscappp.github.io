import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { menuIcons } from './MenuIcons/menuIcons'
import { NavLink } from 'react-router-dom'
import './styles.css'

const NavigateMenu = ({toggleDrawer, drawerMenu}) => {

      const list = () => (
        <Box
          sx={{ width: "250px", }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuIcons.map((item, index) => (
              <ListItem key={index + 1221} disablePadding>
                <NavLink to = {item.path} style = {{color:'black', width: '250px'}} className = "huigovno">
                  <ListItemButton>
                    <ListItemIcon>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      );

    return (
        <>
            <Drawer
                open={drawerMenu['left']}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </>
    )
}

export default React.memo(NavigateMenu)