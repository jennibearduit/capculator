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
import { loadModules, saveModules } from '../storage/storage';

const Semester = (props) => {
  const { name } = props
  const [ modules, setModules ] = useState(loadModules(name) ?? [])
  const [ open, setOpen ] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = (mod) => {
    const updatedModules = modules.concat(mod);
    setModules(updatedModules);
    saveModules(name, updatedModules);
  }

  const handleEdit = (idx) => (mod) => {
    const updatedModules = [...modules];
    updatedModules[idx] = mod;
    setModules(updatedModules);
    saveModules(name, updatedModules);
  }

  const handleDelete = (idx) => () => {
    const updatedModules = [...modules];
    updatedModules.splice(idx, 1);
    setModules(updatedModules);
    saveModules(name, updatedModules);
  }

  return (
    <>
      <h3 onClick={handleOpen}>{name}</h3>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Module Name</TableCell>
              <TableCell align="right">Grade</TableCell>
              <TableCell align="right">Credits</TableCell>
            </TableRow>
          </TableHead>
          {modules.map((m, i) => (
            <Module onEdit={handleEdit(i)} onDelete={handleDelete(i)} name={m.name} grade={m.grade} credits={m.credits} />
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
