import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ModuleForm from './ModuleForm'
import { useState } from 'react';
import { Button } from '@mui/material';

import Module from './Module';


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
  const [ modules, setModules ] = useState([...mockModules])
  const [ open, setOpen ] = useState(false)
  const { name } = props

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = (mod) => {
    setModules(modules.concat(mod));
    setOpen(false);
  }

  return (
    <>
      <h3>{name}</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
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
        <Button onClick={handleOpen} padding={4}>
          Add New Module
        </Button>
      </TableContainer>
      <ModuleForm open={open} onSubmit={handleSave} onClose={handleClose} />
    </>
  )
}

export default Semester;
