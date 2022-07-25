import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TimeGrid from './TimeGrid';


export default function CurrentInvestigationTimePicker() {
  const [value, setValue] = React.useState(new Date('2014-08-18T00:00:00'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          label="Time"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />

    </LocalizationProvider>
    
    <TimeGrid timeProps={value} />
    {/* <CurrentInvestigationLineGraph timeProps={value} /> */}
    </div>
  );
}

// https://codesandbox.io/s/zealous-gates-w55ye?file=/src/App.js:0-2161