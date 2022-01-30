import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import ModuleForm from './ModuleForm';

const Module = (props) => {
  const { name, grade, credits, onEdit: handleEdit, onDelete: handleDelete } = props

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <TableRow>
        <TableCell
          component="th"
          scope="row"
          onClick={handleOpen}
        >
          {name}
        </TableCell>
        <TableCell align="right">{grade}</TableCell>
        <TableCell align="right">{credits}</TableCell>
      </TableRow>
      <ModuleForm open={open} onSubmit={handleEdit} onClose={handleClose} module={{name, grade, credits}} edit={true} onDelete={handleDelete} />
    </>
  )
}

export default Module;
