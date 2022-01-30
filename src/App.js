import Semester from './components/Semester'
import { Button, Dialog, DialogActions, DialogContent, Grid } from '@mui/material';
import { useState } from 'react';
import SemesterForm from './components/SemesterForm';

const mockSemesters = [1, 2, 3, 4].map(i => `Semester ${i}`)

const App = () => {
  const [semesters, setSemesters] = useState([...mockSemesters])
  const [open, setOpen] = useState(false)
  console.log(semesters);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    setOpen(false);
  }


  return (
    <>
      <h1 style={{ textAlign: "center" }}>NUS CAPculator</h1>
      <Grid container spacing={2} padding={4}>
        {semesters.map(sem => (
          <Grid item xs={12} md={6}>
            <Semester name={sem} />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Button onClick={handleOpen} variant="contained">
            Add New Semester
          </Button>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <SemesterForm />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Add Semester</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
