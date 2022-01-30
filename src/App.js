import Semester from './components/Semester'
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import SemesterForm from './components/SemesterForm';
import { deleteSemester, loadSemesters, renameSemester, saveSemesters } from './storage/storage';
import { getCumulativeReport } from './logic/logic';

const App = () => {
  const [semesters, setSemesters] = useState(loadSemesters() ?? []);
  const [cumulativeReport, setCumulativeReport] = useState(getCumulativeReport() ?? null);
  const [open, setOpen] = useState(false);
  console.log(semesters);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = (sem) => {
    if (semesters.includes(sem)) {
      window.alert("Name already taken!");
      return;
    }
    const updatedSemesters = semesters.concat(sem);
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters)
    setOpen(false);
  }

  const handleEdit = (idx) => (sem) => {
    const oldName = semesters[idx];
    if (sem === oldName) {
      window.alert("Please provide a new name!");
      return;
    }
    if (semesters.includes(sem)) {
      window.alert("Name already taken!");
      return;
    }
    const updatedSemesters = [...semesters];
    updatedSemesters[idx] = sem;
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters);
    renameSemester(oldName, sem);
  }

  const handleDelete = (idx) => () => {
    const updatedSemesters = [...semesters];
    const deletedSemester = semesters[idx];
    updatedSemesters.splice(idx, 1);
    setSemesters(updatedSemesters);
    saveSemesters(updatedSemesters);
    deleteSemester(deletedSemester);
  }

  const refreshCap = () => {
    setCumulativeReport(getCumulativeReport());
  }

  const cap = cumulativeReport.cap.toFixed(2);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>NUS CAPculator</h1>
      <Grid container alignItems="center">
        <Grid item xs={12} md={6} paddingRight={2}>
          <h2 style={{ textAlign: "right" }}>CAP: {cap}</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button onClick={refreshCap} paddingLeft={2}>
            Refresh CAP
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={4}>
        {semesters.map((sem, i) => (
          <Grid item xs={12} md={6}>
            <Semester name={sem} onRename={handleEdit(i)} onDelete={handleDelete(i)} />
          </Grid>
        ))}
        <Grid item xs={12} md={12}>
          <Button onClick={handleOpen} variant="contained">
            Add Semester
          </Button>
        </Grid>
      </Grid>
      <SemesterForm open={open} onSubmit={handleSave} onClose={handleClose} />
    </>
  );
}

export default App;
