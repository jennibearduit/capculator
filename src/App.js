import Semester from './components/Semester'
import { Button, Grid } from '@mui/material';
import { useState } from 'react';

const mockSemesters = [1, 2, 3, 4].map(i => `Semester ${i}`)
const counter = 4

const App = () => {
  const [semesters, setSemesters] = useState([...mockSemesters])

  return (
    <>
      <h1 style={{ textAlign: "center" }}>NUS CAPculator</h1>
      <Grid container spacing={2} padding={4}>
        {semesters.map(sem => (
          <Grid item xs={12} md={6}>
            <Semester name={sem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default App;
