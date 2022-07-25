import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SearchBar from './SearchBar';
import CurrentInvestigationButton from './DrawerButtons/CurrentInvestigation';
import PreviousInvestigationButton from './DrawerButtons/PreviousInvestigations';
import UpcomingInvestigationButton from './DrawerButtons/UpcomingInvestigations';
import SocialMediaButton from './DrawerButtons/SocialMedia';
import TopGrid from './StatTracker/TopGrid';
import IntroCard from './IntroCard';
import TodoList from './InvestigationRecord/ToDoList';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import './InvestigationRecord/ToDo.css'
import UpComingCard from './UpcomingCard/UpComingCard';
import PreviousCard from './PreviousCard/PreviousCard';
import TableGraph from './LineChart/TableGraph';
import BookImage from './DrawerButtons/Icons/BookImage';

const drawerWidth = 150;

export default function PermDrawer() {
  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ParaJournal
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
        <BookImage />
        <Divider />
                    <CurrentInvestigationButton/>
                <Divider />
                    <PreviousInvestigationButton/>
                    <Divider />
                    <UpcomingInvestigationButton/>
                <Divider />
                    <SocialMediaButton/>
                  <Divider/>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
            <TopGrid />
            <IntroCard/>
            <br></br>

            <Card >
              <CardContent >
                <TodoList />
                <TableGraph />
              </CardContent>
            </Card >

            <UpComingCard />
            <PreviousCard />
            <Divider/>

      </Box>
    </Box>
  );
}
