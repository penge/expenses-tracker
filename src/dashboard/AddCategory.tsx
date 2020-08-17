import React, { useContext, useState } from "react";
import { AppContext } from "../state/StateProvider";
import { ActionType } from "../state/reducer";
import api from "../api";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  padded: {
    marginTop: "20px"
  },
}));

export default function AddCategory() {
  const { state, dispatch } = useContext(AppContext);
  const { email, categories } = state;

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  // Open/Close modal
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setName(""); setOpen(false); };

  // Add new Category
  const handleAdd = () => {
    if (categories.includes(name)) {
      return;
    }

    const success = api.addCategory(email, name);
    if (!success) {
      return;
    }

    dispatch({
      type: ActionType.AddCategory,
      payload: name
    });

    handleClose();
  };

  // Change of Value
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value as string);
  };

  const classes = useStyles();

  return (
    <>
      <Button variant="outlined" color="primary" className={classes.padded} onClick={handleClickOpen}>
        Add Category
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">New Category</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            variant="outlined"
            margin="normal"
            id="value"
            label="Name"
            value={name}
            onChange={handleNameChange}
            required
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={handleAdd} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
