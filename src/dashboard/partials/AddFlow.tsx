import React, { useState, useContext } from "react";
import { AppContext } from "../../state/StateProvider";
import { FlowType, ActionType } from "../../state/reducer";
import api from "../../api";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles((theme) => ({
  padded: {
    marginTop: "20px"
  },
  popover: {
    padding: theme.spacing(2),
  },
}));

interface Props {
  flowType: FlowType;
  buttonColor: "primary" | "secondary";
}

export default function AddFlow({ flowType, buttonColor }: Props) {
  const { state, dispatch } = useContext(AppContext);
  const { email, categories } = state;

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(new Date());
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [value, setValue] = useState("");

  // Open/Close dialog
  const handleDialogOpen = () => { setOpen(true); };
  const handleDialogClose = () => {
    setOpen(false);

    setDate(null);
    setCategory("");
    setInfo("");
    setValue("");
  };

  // Add new Flow (Income or Expense)
  const handleDialogAdd = () => {
    const flow = {
      category,
      date: date || new Date(),
      info,
      value: parseFloat(value),
    };

    if (Number.isNaN(flow.value) || !flow.date) {
      return;
    }

    // Set dates, minutes, seconds (for better sorting)
    const now = new Date();
    flow.date.setHours(now.getHours());
    flow.date.setMinutes(now.getMinutes());
    flow.date.setSeconds(now.getSeconds());

    const success = api.addFlow(email, flowType, flow);
    if (!success) {
      return;
    }

    let actionType;
    if (flowType === FlowType.Expense) actionType = ActionType.AddExpense;
    if (flowType === FlowType.Income) actionType = ActionType.AddIncome;

    if (actionType) {
      dispatch({
        type: actionType,
        payload: flow
      });
    }

    handleDialogClose();
  };

  // Change of Date
  const handleDateChange = (date: Date | null) => { setDate(date); };

  // Change of Category
  const handleCategoryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  // Change of Info
  const handleInfoChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInfo(event.target.value as string);
  };

  // Change of Value
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as string);
  };

  // Popover
  const [popoverEl, setPopoverEl] = React.useState<HTMLButtonElement | null>(null);
  const popoverOpen = Boolean(popoverEl);
  const id = popoverOpen ? "simple-popover" : undefined;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverEl(null);
  };

  // Button click handler
  const buttonClickHandler = categories.length > 0 ? handleDialogOpen : handlePopoverOpen;

  const classes = useStyles();

  return (
    <>
      <Button variant="outlined" color={buttonColor} className={classes.padded} onClick={buttonClickHandler}>
        Add {FlowType[flowType]}
      </Button>

      <Popover
        id={id}
        open={popoverOpen}
        anchorEl={popoverEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        elevation={2}
      >
        <Typography className={classes.popover}>Create <b>Categories</b> first.</Typography>
      </Popover>

      <Dialog open={open} onClose={handleDialogClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">New {FlowType[flowType]}</DialogTitle>
        <DialogContent>

          {/* "date" */}

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                autoOk={true}
                disableToolbar
                fullWidth
                required
                autoFocus
                variant="static"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <br />

          {/* "category" */}

          <FormControl variant="outlined" fullWidth required>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              id="category"
              variant="outlined"
              labelId="category-label"
              label="Category"
              value={category}
              onChange={handleCategoryChange}
              required
              autoWidth
            >
              {categories.sort((a, b) => a > b ? 1 : -1).map(item => (
                <MenuItem key={item} value={item}>{item}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* "info" */}

          <TextField
            variant="outlined"
            margin="normal"
            id="info"
            label="Info"
            value={info}
            onChange={handleInfoChange}
            fullWidth
          />

          {/* "value" (currency) */}

          <TextField
            variant="outlined"
            margin="normal"
            id="value"
            label="Value"
            value={value}
            onChange={handleValueChange}
            required
            fullWidth
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">Cancel</Button>
          <Button onClick={handleDialogAdd} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
