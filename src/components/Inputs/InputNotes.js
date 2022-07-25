import * as React from 'react';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

export default function InputNotes() {
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 },}}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ width: '900px' }}>
        <InputLabel htmlFor="component-outlined" style={{ color: 'white'}}>Notes</InputLabel>
        <OutlinedInput
          style={{ color: 'white'}}
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
    </Box>
  );
}