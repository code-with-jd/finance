import { CollectionsOutlined, Margin } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); //

ChartJS.register(ArcElement, Tooltip, Legend);

export default function CustomChart(props) {
  let amountArray = [10, 20, 30, 40, 50, 60, 70];
  let income = 3000;

  //UseEffekt
  useEffect(() => {
    console.log("Neuer Eintrag");
    for (let i = 0; i < props.array.length; i++) {
      switch (props.array[i].category) {
        case "Food":
          // return (amountArray[0] += parseInt(props.array[i].amount));
          amountArray[0] = amountArray[0] + parseInt(props.array[i].amount);
          break;
        case "Clothes":
          amountArray[1] = amountArray[1] + parseInt(props.array[i].amount);
          break;
        case "Housing":
          amountArray[2] = amountArray[2] + parseInt(props.array[i].amount);
          break;
        case "Transportation":
          amountArray[3] = amountArray[3] + parseInt(props.array[i].amount);
          break;
        case "Health":
          amountArray[4] = amountArray[4] + parseInt(props.array[i].amount);
          break;
        case "Entertainment":
          amountArray[5] = amountArray[5] + parseInt(props.array[i].amount);
          break;
        case "Other":
          amountArray[6] = amountArray[6] + parseInt(props.array[i].amount);
          break;
      }
    }
  }, [props.array.length]);

  const data = {
    labels: [
      "Food " + amountArray[0] + "$",
      "Clothes " + amountArray[1] + "$",
      "Housing " + amountArray[2] + "$",
      "Transportation " + amountArray[3] + "$",
      "Health " + amountArray[4] + "$",
      "Entertainment " + amountArray[5] + "$",
      "Other " + amountArray[6] + "$",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: amountArray,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ height: "50vh" }}>
      {/* redraw durch useEffect austauschen*/}
      <Box sx={{ flexGrow: 1 }} padding="35px">
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <Grid item xs={4}>
              <Item>
                Income
                <br />
                {income}€
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item redraw>
                Expenses
                <br />
                {amountArray.reduce(
                  (accumulator, currentValue) => accumulator + currentValue
                )}
                €
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item redraw>
                Balance
                <br />
                {3000 -
                  amountArray.reduce(
                    (accumulator, currentValue) => accumulator + currentValue
                  )}
                €
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Doughnut data={data} redraw />
    </div>
  );
}
