import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Module from './Module';
import { useState } from 'react';

const mockModules = [
  {
    name: "CS1010",
    grade: "A",
    credits: 4,
  },
  {
    name: "CS1101",
    grade: "A",
    credits: 4,
  },
  {
    name: "CS1231",
    grade: "A",
    credits: 4,
  }
]

const Semester = (props) => {
  const [modules, setModules] = useState([...mockModules])
  const { name } = props

  return (
    <>
      <h3>{name}</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Module Name</TableCell>
              <TableCell align="right">Grade</TableCell>
              <TableCell align="right">Credits</TableCell>
            </TableRow>
          </TableHead>
          {modules.map(m => (
            <Module name={m.name} grade={m.grade} credits={m.credits} />
          ))}
        </Table>
      </TableContainer>
    </>
  )
}

export default Semester;
