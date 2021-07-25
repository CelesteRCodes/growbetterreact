import React from 'react';
import DetailsCard from './DetailsCard';
import GrowLog from './GrowLog';
import NewPlant from './NewPlant';
import PlantCard from './PlantCard';
import PlantLog from './PlantLog';
import NewEntry from './NewEntry';

function ShowUserPlants(props) {
    return (
        <div id="user-plants">
            <NewPlant />
            <PlantCard />
            <DetailsCard />
            <NewEntry />
            <PlantLog />
            <GrowLog />


            
        </div>

    )
}


export default ShowUserPlants;