import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Lasania Chicken Fri",189839535, "2 March 2022", "Approved"),
    createData("Big Baza Bang",34534546, "2 March 2022", "pending"),
    createData("Mouth Freshner ",47473463, "2 March 2022", "Approved"),
    createData("CupCake ",2526326, "2 March 2022", "Delivered"),
  
];

// cusotom makestyles
const makeStyles=(status)=>{
  if(status==="Approved"){
    return {
      backgroundColor:"#00C853",
      color:"green"
    }
  }
  else if(status==="pending"){
    return {
      backgroundColor:"#FF9800",
      color:"red"
    }
  }
  else if(status==="Delivered"){
    return {
      backgroundColor:"#4CAF50",
      color:"white"
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
          <h3>Recent Orders</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product (100g serving)</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyles(row.status)}>{row.status}</span>
              </TableCell>
              <TableCell align="left" className="Details">Detail</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
  );
}
