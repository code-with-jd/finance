import CarIcon from "@mui/icons-material/DirectionsCarOutlined";
import FoodIcon from "@mui/icons-material/FastfoodOutlined";
import HealthIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import OtherIcon from "@mui/icons-material/MoreHoriz";
import EntertainmentIcon from "@mui/icons-material/NightlifeOutlined";
import ClothesIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Avatar } from "@mui/material";
import { borders } from "@mui/system";
import React from "react";

export default function DynamicTagAvatar({ tag }) {
  // render different icons for different tags
  const getIcon = (tag) => {
    switch (tag) {
      case "Food":
        return <FoodIcon color="secondary" />;
      case "Clothes":
        return <ClothesIcon color="primary" />;
      case "Housing":
        return <HomeIcon color="info" />;
      case "Transportation":
        return <CarIcon color="success" />;
      case "Health":
        return <HealthIcon color="warning" />;
      case "Entertainment":
        return <EntertainmentIcon color="error" />;
      case "Other":
        return <OtherIcon color="error" />;
    }
  };

  // render Avatar with icon based on tag using getIcon
  return (
    <Avatar sx={{ bgcolor: "white", border: 1, borderColor: "lightgrey" }}>
      {" "}
      {getIcon(tag)}{" "}
    </Avatar>
  );
}
