import { Grid, TextField } from "@mui/material";

const SemesterForm = (props) => {
  return (
    <Grid container alignItems="center" direction="row" justifyContent="center">
      <TextField id="outlined-basic" label="Semester Name" variant="outlined" />
    </Grid>
  )
}

export default SemesterForm;
