import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function StrengthSelect() {
  const [strength, setStrength] = React.useState('');

  const handleChange = (event) => {
    setStrength(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Strength</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={strength}
        label="Strength"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>One</MenuItem>
        <MenuItem value={2}>Two</MenuItem>
        <MenuItem value={3}>Three</MenuItem>
        <MenuItem value={4}>Four</MenuItem>
        <MenuItem value={5}>Five</MenuItem>
        <MenuItem value={6}>Six</MenuItem>
        <MenuItem value={7}>Seven</MenuItem>
        <MenuItem value={8}>Eight</MenuItem>
        <MenuItem value={9}>Nine</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
      </Select>
    </FormControl>
  );
}
