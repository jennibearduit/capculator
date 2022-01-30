import { Button, Dialog, DialogActions, DialogContent, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { gradeOptions } from "../logic/logic";

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
    if (!window.confirm("Delete this module?")) {
      return;
    }
    onDelete();
    handleClose();
  }

  const handleSubmit = () => {
    if (!name) {
      window.alert("Please fill in a module name!");
      return;
    }
    if (!credits) {
      window.alert("Please fill in the module credits!");
      return;
    }
    if (!grade) {
      window.alert("Please fill in the module grade!");
      return;
    }
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
          type="number"
          value={credits}
          onChange={handleCreditsChange}
          label="No. of Credits"
          fullWidth
          variant="standard"
          inputProps={{ min: 0, max: 40 }}
        />
        <InputLabel id="demo-simple-select-standard-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={grade}
          onChange={handleGradeChange}
          label="Age"
        >
          {gradeOptions.map((g) => (
            <MenuItem value={g}>{g}</MenuItem>
          ))}
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
