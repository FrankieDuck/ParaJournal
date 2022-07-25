import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search'



export default function InputWithIcon() {
  return (
      <Box className='search-bar'sx={{ display: 'flex', alignItems: 'flex-end',}}  >
        <TextField id="input-with-sx" label="Search" variant="outlined" sx={{ width: '1200px'}}/>
        <SearchIcon sx={{ color: 'white', mr: 1, my: 0.5, fontSize: "40px" }} />
      </Box> 
  );
}
