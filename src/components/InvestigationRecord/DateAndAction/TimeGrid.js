import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Divider } from '@mui/material';


function TimeGrid({timeProps}) {
    useEffect(() => {
        if (timeProps) {
            setTimeData(timeProps)
        }
    }, [timeProps])

const [timeData, setTimeData] = useState([])

  return (
    <>
    <div style={{ display: 'flex', justifyContent: "center", padding: "35px" }}>
    <TableContainer style={{ width: 750 }} component={Paper} >
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell><b>Time</b></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow>
            <TableCell>{new Date(timeData).toString().slice(16,24)}</TableCell>
          </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
<Divider />

  </div>
  </>
  );
}

export default TimeGrid









// const TableGraph = () => {

//   const [timeArray, setTimes] = useState([])

// useEffect(() => {
//   const fetchData = ({value}) => {
//      //in here need to get the output from the todo list and assign it to the state
//     const TIMESARRAY = ['10:00pm', '11:00pm', '12:00am', '01:00am', '02:00am', '03:00am']

//     setTimes(TIMESARRAY) 
// }

// fetchData()
// }, [])

//   return (
//     <>
//     <div style={{ display: 'flex', justifyContent: "center", padding: "35px" }}>

//     <TableContainer style={{ width: 750 }} component={Paper} >
//     <Table aria-label="simple table">
//       <TableHead>
//         <TableRow>
//           <TableCell><b>Time</b></TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//             {timeArray.map((timedata, i) => (
//           <TableRow key={i} >
//             <TableCell>{timedata}</TableCell>
//           </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// <Divider />

//   </div>
//   </>
//   );
// }
