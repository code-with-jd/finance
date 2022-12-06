import AddIcon from "@mui/icons-material/Add";
// Grid
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
//fancy button
import Fab from "@mui/material/Fab";
//Select
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React from "react";

export default function SimpleDialog(props) {
  //Select

  const {
    amount,
    setAmount,
    category,
    setCategory,
    name,
    setName,
    onSendClick,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onSendClick();
  };
  const handleChange = (event) => {
    setCategory(event.target.value);
  }; //Select

  return (
    <div style={{ marginTop: 8 + "em" }}>
      {/* <Button onClick={handleClickOpen}> Add Spending</Button> */}
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog onClose={handleClickOpen} open={open}>
        <DialogTitle>Add New Spending</DialogTitle>
        <Box>
          <Grid container spacing={3} padding="20px">
            <Grid item xs={12} zeroMinWidth>
              <TextField
                id="outlined-number-required"
                label="Enter the Amount"
                // size="small"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} zeroMinWidth>
              <TextField
                required
                id="outlined-required"
                label="Notes"
                defaultValue="Miete"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            {/* Kategorie */}
            <Grid item xs={12} zeroMinWidth>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem
                    value={"Food"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Food
                  </MenuItem>
                  <MenuItem
                    value={"Clothes"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Clothes
                  </MenuItem>
                  <MenuItem
                    value={"Housing"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Housing
                  </MenuItem>
                  <MenuItem
                    value={"Transportation"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Transportation
                  </MenuItem>
                  <MenuItem
                    value={"Health"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Health
                  </MenuItem>
                  <MenuItem
                    value={"Entertainment"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Entertainment
                  </MenuItem>
                  <MenuItem
                    value={"Other"}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    Other
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button onClick={handleClose}>Send</Button>
        </Box>
      </Dialog>
    </div>
  );
}
