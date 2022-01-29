import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Module from './Module';

const Semester = (props) => {
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
          <Module name="CS2030" grade="A" credit="4" />
          <Module name="CS2040" grade="A" credit="4" />
          <Module name="CS2102" grade="A" credit="4" />
          <Module name="CS2103" grade="A" credit="4" />
          <Module name="CS3230" grade="A" credit="4" />
        </Table>
      </TableContainer>
    </>
  )
}

export default Semester;