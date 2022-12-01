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
import React from "react";
import { Doughnut } from "react-chartjs-2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
})); //

ChartJS.register(ArcElement, Tooltip, Legend);

let categoryArray = [0];
let amountArray = [0];

export const data = {
  labels: categoryArray,
  datasets: [
    {
      label: "# of Votes",
      data: amountArray,
      backgroundColor: [
        "rgba(255, 0, 0, 0.5)",
        "rgba(54, 162, 235, 0.48)",
        "rgba(255, 206, 86, 0.48)",
        "rgba(75, 192, 192, 0.48)",
        "rgba(153, 102, 255, 0.48)",
        "rgba(255, 159, 64, 0.48)",
        "rgba(255, 105, 180, 0.48)",
      ],
      borderColor: [
        "rgba(255, 0, 0, 0.96)",
        "rgba(54, 162, 235, 0.96)",
        "rgba(255, 206, 86, 0.96)",
        "rgba(75, 192, 192, 0.96)",
        "rgba(153, 102, 255, 0.96)",
        "rgba(255, 159, 64, 0.96)",
        "rgba(255, 105, 180, 0.96)",
      ],
      borderWidth: 1,
    },
  ],
};

export function CustomChart(props) {
  props.array.forEach((item) => {
    console.log(item.category);
    console.log(amountArray);
  });

  categoryArray = props.array.map((item) => {
    data.labels = categoryArray;
    return item.category;
  });
  amountArray = props.array.map((item) => {
    return +item.amount;
  });
  /* console.log(amountArray); */

  data.datasets[0].data = amountArray;

  /* useEffect(() => {
  }, []); */
  /* console.log(typeof props);
  console.log(props);
  console.log(props.array.length); */

  return (
    <div style={{ height: "50vh" }}>
      {console.log(data)}
      <Doughnut data={data} redraw />

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
      </Box>
    </div>
  );
}
