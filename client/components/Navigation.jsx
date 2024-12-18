import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import useStyles from './styles';

function Navigation(props) {

  const nav_classes = useStyles();

  return (
    <AppBar position="static" >
      <Container maxWidth="100%" className={nav_classes.navBar}>
        <Toolbar sx={{justifyContent: "space-between"}}>
          <Container sx={{display: 'flex', flexDirection: 'row'}}>
            <img src='https://i.imgur.com/ZX5wc9L.png' style={{width: "20%", height: "20%"}}/>
            <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Dashboard" sx={{color: 'white'}}>Dashboard</Button>
            <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Workouts" sx={{color: 'white'}}>Workouts</Button>
            <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Workouts-Search" sx={{color: 'white', whiteSpace: 'nowrap'}}>Search Workouts</Button>
            <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Nutrition" sx={{color: 'white'}}>Nutrition</Button>	
            <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Routines" sx={{color: 'white'}}>Routines</Button>

          </Container>
          <Container>
            <MenuList className={nav_classes.navAccountOptions}>
              <MenuItem>
                <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navDeleteAccButton} name="Delete Account" sx={{color: 'white'}}>Delete Account</Button>
              </MenuItem>
              <MenuItem>
                <Button type="button" onClick={(e) => props.updateView(e)}  className={nav_classes.navButtons} name="Logout" sx={{color: 'white'}}>Logout</Button>
              </MenuItem>
            </MenuList>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;