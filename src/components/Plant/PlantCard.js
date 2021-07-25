import React from 'react';
import './PlantCard.css';

const PlantCard = (props) => <div class="card" style={{ width: '18rem' }}>
    <div class="plant-card">
        <img src="aloe.jpg" alt=""/>
        <p>Main Plant Card</p>
        <h1> Plant Name </h1>
            <p> Plant Type </p>
       
        <button variant="primary">Update Log</button>
        <button variant="primary">RIP Plant</button>
        <button variant="primary">Delete Plant</button>

        <br /><br />

    
    </div>
</div>



export default PlantCard;