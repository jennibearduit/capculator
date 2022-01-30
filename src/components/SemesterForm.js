import { Button, Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { useState } from "react";

const SemesterForm = (props) => {
  const { open, onSubmit, onClose: handleClose, edit = false, name: semesterName = "", onDelete: handleDelete } = props;

  const [name, setName] = useState(semesterName ?? "");

  const handleSubmit = () => {
    if (!name) {
      window.alert("Please fill in the semester name!");
      return;
    }
    onSubmit(name);
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          margin="normal"
          id="name"
          onChange={handleNameChange}
          label="Semester Name"
          fullWidth
          value={name}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          Save
        </Button>
        {edit &&
          <Button color="error" onClick={handleDelete}>
            Delete
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}

export default SemesterForm;
