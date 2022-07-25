import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TotalEvidence from './TotalEvidence';
import StorageRemaining from './StorageRemaining';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Container style={{ display: 'flex', minWidth: 1745, justifyContent: 'space-evenly', marginTop: '56px',  }}>
            <Box sx={{ bgcolor: '#cfe8fc', height: '10vh',}} />
                <TotalEvidence/>
                <StorageRemaining/>
                <StorageRemaining/>
        </Container>
    </React.Fragment>
  );
}
