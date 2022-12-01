import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

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
    </div>
  );
}
