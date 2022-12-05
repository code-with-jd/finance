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
import React, { useEffect, useState } from "react";
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
  let categoryArray = [0];
  // let amountArray = [];
  let amountArray = [10, 20, 30, 40, 50, 60, 70];

  //UseState
  const [amountArrayState, setAmountArrayState] = useState([
    10, 20, 30, 40, 50, 60, 70,
  ]);

  //UseEffekt
  useEffect(() => {
    console.log("Neuer Eintrag");

    return () => {
      // console.log("add value now");
      console.log(props.array);

      for (let i = 0; i < props.array.length; i++) {
        switch (props.array[i].category) {
          case "Food":
            // return (amountArray[0] += parseInt(props.array[i].amount));
            return setAmountArrayState[0](
              amountArrayState + parseInt(props.array[i].amount)
            );

          // Normale Array
          // console.log("hi uwu" + amountArray[0]);
          // amountArray[0] += parseInt(props.array[i].amount);
          // console.log("hi uwu" + amountArray[0]);

          //useState
          // console.log("NEW" + amountArrayState[0]);
          // {
          //   setAmountArrayState[0] += parseInt(props.array[i].amount);
          // }
          // console.log("NEWer" + amountArrayState[0]);

          // (amountArray[0] += props.array[i].amount)
          case "Clothes":
            return console.log("ClothesSs");
          case "Housing":
            return;
          case "Transportation":
            return;
          case "Health":
            return;
          case "Entertainment":
            return;
          case "Other":
            return;
        }
      }

      // data.datasets[0].data[0] = amountArray[0];
    };
  }, [props.array.length]);

  const data = {
    labels: [
      "Food",
      "Clothes",
      "Housing",
      "Transportation",
      "Health",
      "Entertainment",
      "Other",
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
      {/* {console.log(data)} */}
      {/* redraw durch useEffect austauschen*/}
      <Doughnut data={data} redraw />

      {/* <Box sx={{ flexGrow: 1 }} padding="35px">
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
              <Item>
                Expenses
                <br />€
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                Balance
                <br />
                {expenses}€
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
}
