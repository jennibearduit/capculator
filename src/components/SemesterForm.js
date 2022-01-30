import { Grid, TextField } from "@mui/material";

const SemesterForm = (props) => {
  return (
    <TextField autoFocus 
      margin="dense" 
      id="name" 
      label="Semester Name" 
      fullWidth 
      variant="standard" />
  )
}

export default SemesterForm;
