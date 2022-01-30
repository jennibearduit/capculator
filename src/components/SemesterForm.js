import { Button, Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import { useState } from "react";

const SemesterForm = (props) => {
  const { open, onSubmit, onClose: handleClose } = props;

  const [name, setName] = useState("");

  const handleSubmit = () => {
    onSubmit(name);
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField autoFocus
          margin="normal"
          id="name"
          onChange={handleNameChange}
          label="Semester Name"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>
          Add Semester
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default SemesterForm;
