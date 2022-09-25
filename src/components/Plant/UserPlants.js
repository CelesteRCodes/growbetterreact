import React from "react";
import DetailsCard from "./DetailsCard";
import GrowLog from "../Log/GrowLog";
import NewPlant from "../Plant/NewPlant";
import PlantCard from "../Plant/PlantCard";
import PlantLog from "../Log/PlantLog";
import NewEntry from "../Log/NewEntry";
import WeeklySum from "../Summary/WeeklySum";

const ShowUserPlants = (props) => {
  return (
    <div id="user-plants">
      <NewPlant />
      <br />
      <PlantCard />
      <br />
      <DetailsCard />
      <br />
      <NewEntry />
      <br />
      <PlantLog />
      <br />
      <GrowLog />
      <br />
      <WeeklySum />
      <br />
    </div>
  );
};

export default ShowUserPlants;
