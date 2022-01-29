import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const Module = (props) => {
  const { name, grade, credit } = props

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{grade}</TableCell>
      <TableCell align="right">{credit}</TableCell>
    </TableRow>
  )
}

export default Module;