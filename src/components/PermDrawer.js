import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchBar from './SearchBar';
import CurrentInvestigationButton from './DrawerButtons/CurrentInvestigation';
import PreviousInvestigationButton from './DrawerButtons/PreviousInvestigations';
import UpcomingInvestigationButton from './DrawerButtons/UpcomingInvestigations';
import SocialMediaButton from './DrawerButtons/SocialMedia';
import TopGrid from './StatTracker/TopGrid';
import IntroCard from './IntroCard';
import CastleIcon from '@mui/icons-material/Castle';

const drawerWidth = 240;

export default function PermDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <CastleIcon style={{ marginRight: 70, fontSize: 100, paddingTop: 15  }}/>
        <Divider />
                    <CurrentInvestigationButton/>
                <Divider />
                    <PreviousInvestigationButton/>
                    <Divider />
                    <UpcomingInvestigationButton/>
                <Divider />
                    <SocialMediaButton/>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
            <TopGrid />
            <IntroCard/>
      </Box>
    </Box>
  );
}
