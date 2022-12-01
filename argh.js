const array = [];
const donut = [1, 1, 1];

array.push({
  id: 0,
  name: "Pizza",
  amount: 100,
  category: "Health",
});
array.unshift({
  id: 1,
  name: "Cola",
  amount: 3,
  category: "Car",
});
array.unshift({
  id: 2,
  name: "Cola",
  amount: 30,
  category: "Other",
});
console.log(donut);
array.map((blob) => {
  switch (blob.category) {
    case "Health":
      return (donut[0] += blob.amount);
    //     console.log("Health");
    case "Car":
      //     console.log("Car");
      console.log();
      return (donut[1] += blob.amount);
    case "Other":
      //     console.log("Other");
      return (donut[2] += blob.amount);
    // }
    // if (blob.category == "Health") {
    //   donut[0] += blob.amount;
    // } else if (blob.category == "Car") {
    //   donut[1] += blob.amount;
  }
});
console.log(array);
console.log(donut);
