import Semester from './components/Semester'
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import SemesterForm from './components/SemesterForm';
import { loadSemesters, saveSemesters } from './storage/storage';

const App = () => {
  const [semesters, setSemesters] = useState(loadSemesters() ?? [])
  const [open, setOpen] = useState(false)
  console.log(semesters);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = (sem) => {
    const updatedSemesters = semesters.concat(sem);
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters)
    setOpen(false);
  }

  const handleEdit = (idx) => (sem) => {
    const updatedSemesters = [...semesters];
    updatedSemesters[idx] = sem;
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters)
  }

  const handleDelete = (idx) => () => {
    const updatedSemesters = [...semesters];
    updatedSemesters.splice(idx, 1);
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters)
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>NUS CAPculator</h1>
      <Grid container spacing={2} padding={4}>
        {semesters.map(sem => (
          <Grid item xs={12} md={6}>
            <Semester name={sem}/>
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Button onClick={handleOpen} variant="contained">
            Add New Semester
          </Button>
        </Grid>
      </Grid>
      <SemesterForm open={open} onSubmit={handleSave} onClose={handleClose} onEdit={handleEdit} onDelete={handleDelete}/>    
    </>
  );
}

export default App;
