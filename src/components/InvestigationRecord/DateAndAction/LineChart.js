import { useEffect, useState } from "react";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { Divider } from "@mui/material";


function CurrentInvestigationLineGraph({ TIMESARRAY, VALUESARRAY }) {

useEffect(() => {
    if (TIMESARRAY, VALUESARRAY) {
    setUserData({
    labels: TIMESARRAY,
    datasets: [
      {
        label: "Activity Spikes",
        data: VALUESARRAY,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  }); 
}
}, [TIMESARRAY, VALUESARRAY])

const [userData, setUserData] = useState({
    label: [],
    datasets: []
})
  

  return (
    <>
    <TableContainer style={{ width: 775, display: 'flex', padding: "35px", marginLeft: "40px" }} component={Paper} >
      <div style={{ width: 700 }}>
        <Line data={userData} />
      </div>
      </TableContainer>
  </>
  );
}

export default CurrentInvestigationLineGraph;