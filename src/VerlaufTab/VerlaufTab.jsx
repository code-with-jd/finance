import BluetoothIcon from "@mui/icons-material/Bluetooth";
import WifiIcon from "@mui/icons-material/Wifi";
// Grid
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
//Select
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
//fancy css <3
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
//Avatar
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import { CustomChart } from "../Doughnut/Doughnut";
import DynamicTagAvatar from "../DynamicTagAvatar/DynamicTagAvatar";
import SimpleDialog from "./SimpleDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); //

export default function VerlaufTab() {
  //const
  const [isEditMode, setisEditMode] = useState(true); //wichtig
  const [name, setName] = useState("Shopping");
  const [amount, setAmount] = useState(0);
  const [array, setArray] = useState([]);

  let nextId = 0;

  //Select
  const [category, setCategory] = React.useState("Other");

  function handleEditModeClick() {
    //WICHTIG: Button für Page Switcher
    if (name != "") {
      setName("");
      setAmount("");
      setCategory("");
      array.unshift({
        id: nextId++,
        name: name,
        amount: amount,
        category: category,
      });
    }
  }

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Typography variant="h4" gutterBottom padding="30px">
        Money Tracker
      </Typography>

      <CustomChart array={array}></CustomChart>

      <div>
        <SimpleDialog
          amount={amount}
          setAmount={setAmount}
          name={name}
          setName={setName}
          category={category}
          setCategory={setCategory}
          onSendClick={handleEditModeClick}
        />
      </div>
      <div>
        <Item
          key={array.id}
          elevation={1}
          sx={{
            bgcolor: "background.paper",
            orientation: "vertical",
          }}
        >
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            subheader={<ListSubheader>Transactions</ListSubheader>}
          >
            <Box>
              {array.map((neuesFeld) => (
                <>
                  <Divider light />
                  <ListItem>
                    <ListItemIcon>
                      <DynamicTagAvatar
                        tag={neuesFeld.category}
                        sx={{ display: "inline" }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={neuesFeld.name} />
                    <IconButton edge="end" aria-label="delete">
                      <ListItemText
                        edge="end"
                        secondary={neuesFeld.amount + "€"}
                      />
                    </IconButton>
                  </ListItem>
                </>
              ))}
            </Box>
          </List>
        </Item>
        {/* <Box>
          <Grid container spacing={3}>
            {array.map((neuesFeld) => (
              <Grid item xs={12} zeroMinWidth>
                <Item
                  key={array.id}
                  elevation={2}
                  sx={{
                    bgcolor: "background.paper",
                    orientation: "vertical",
                  }}
                >
                  <DynamicTagAvatar
                    tag={neuesFeld.category}
                    sx={{ display: "inline" }}
                  />
                  <ListItemText
                    primary={neuesFeld.name}
                    sx={{ display: "inline" }}
                  />
                  <ListItemText
                    secondary={neuesFeld.amount + "€"}
                    aria-label={neuesFeld.amount + "€"}
                    sx={{ display: "inline" }}
                  />
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box> */}
        {/* <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert> how to time this*/}
      </div>
    </div>
  );
}
