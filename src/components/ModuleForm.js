import { Button, Dialog, DialogActions, DialogContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const ModuleForm = (props) => {
  const { open, onSubmit, onClose: handleClose } = props;

  const [name, setName] = useState("");
  const [credits, setCredits] = useState(null)
  const [grade, setGrade] = useState(null)

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCreditsChange = (event) => {
    setCredits(event.target.value);
  }

  const handleSubmit = () => {
    const moduleData = {
      name,
      credits,
      grade
    };
    onSubmit(moduleData);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField autoFocus
          margin="normal"
          id="name"
          onChange={handleNameChange}
          label="Module Name"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="normal"
          id="credits"
          onChange={handleCreditsChange}
          label="No. of Credits"
          fullWidth
          variant="standard"
        />
        <InputLabel id="demo-simple-select-standard-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={grade}
          onChange={handleGradeChange}
          label="Age"
        >
          <MenuItem value="A">A</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B">B</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
        </Select>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Module</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModuleForm;
