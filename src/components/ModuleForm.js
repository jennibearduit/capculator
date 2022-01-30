import { Button, Dialog, DialogActions, DialogContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

const ModuleForm = (props) => {
  const { open, onSubmit, onClose: handleClose, module = null, edit = false, onDelete} = props;

  const [name, setName] = useState(module?.name ?? "");
  const [credits, setCredits] = useState(module?.credits ?? null)
  const [grade, setGrade] = useState(module?.grade ?? null)

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleCreditsChange = (event) => {
    setCredits(event.target.value);
  }

  const handleDelete = () => {
    onDelete();
    handleClose();
  }

  const handleSubmit = () => {
    const moduleData = {
      name,
      credits,
      grade
    };
    onSubmit(moduleData);
    handleClose();
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          margin="normal"
          id="name"
          value={name}
          onChange={handleNameChange}
          label="Module Name"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="normal"
          id="credits"
          value={credits}
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
        <Button onClick={handleSubmit}>
          Save
        </Button>
        {edit &&
          <Button color="error" onClick={handleDelete}>
            Remove
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}

export default ModuleForm;
