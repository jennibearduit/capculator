import Semester from './components/Semester'
import { Grid } from '@mui/material';

const App = () => {
  return (
    // use MUI Grid
    <>
      <h1 style={{ textAlign: "center" }}>NUS CAPculator</h1>
      <Grid container spacing={2} padding={4}>
        <Grid item xs={12} md={6}>
          <Semester name="Semester 1" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Semester name="Semester 2" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Semester name="Special Term 1" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Semester name="Special Term 2" />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
