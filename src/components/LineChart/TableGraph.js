import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import LineGraph from './LineChart'
import { Divider } from '@mui/material';


const TableGraph = () => {

  const [timeArray, setTimes] = useState([])
  const [valuesArray, setValues] = useState([])
  const [eventsArray, setEvents] = useState([])


useEffect(() => {
  const fetchData = () => {
     //in here need to get the output from the todo list and assign it to the state
    const TIMESARRAY = ['10:00pm', '11:00pm', '12:00am', '01:00am', '02:00am', '03:00am']
    const EVENTSARRAY = ['ball of light', 'no action', 'no action', 'ghostbox - male voice', 'no action', 'scrying']
    const VALUESARRAY = [0.2, 0, 0, 0.4, 0, 1]

    // const timeAndEventData = {
    //     time: [': 10:00pm ', ': 11:00pm ', ': 12:00am ', ': 01:00am ', ': 02:00am ', ': 03:00am '],
    //     event: [': ball of light', ': no action', ': no action', ': ghostbox - male voice', ': no action', ': scrying']
    // }

    // const eventArray = Object.entries(timeAndEventData.event)
    // const timeArray = Object.entries(timeAndEventData.time)

    setTimes(TIMESARRAY) 
    setValues(VALUESARRAY) 
    setEvents(EVENTSARRAY)
}

fetchData()
}, [])

  return (
    <>
    <div style={{ display: 'flex', justifyContent: "center", padding: "35px" }}>

    <TableContainer style={{ width: 750 }} component={Paper} >
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><b>Time</b></TableCell>
          <TableCell><b>Action</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
            {timeArray.map((timedata, i) => (
          <TableRow key={i} >
            <TableCell>{timedata}</TableCell>
          </TableRow>
          ))}
            {eventsArray.map((eventdata, i) => (
            <TableRow key={i} >
            <TableCell>{eventdata}</TableCell> 
            </TableRow>
            ))}
      </TableBody>
    </Table>
  </TableContainer>
                    <Divider />
  <LineGraph TIMESARRAY={timeArray} VALUESARRAY={valuesArray}/>

  </div>
  </>
  );
}

export default TableGraph;