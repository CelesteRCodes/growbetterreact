import React from 'react';
import './PlantCard.css';
import aloe from '../Assets/plant-images/aloe.jpg';

const PlantCard = (props) => <div class="card" style={{ width: '18rem' }}>
    <div class="plant-card">
        <p>Main Plant Card</p>
        <img src={aloe} alt=""/>
        
        <h1> Archie </h1>
            <p> Aloe </p>
       
        <button variant="primary">Update Log</button>
        <button variant="primary">RIP Plant</button>
        <button variant="primary">Delete Plant</button>

        <br /><br />

    
    </div>
</div>



export default PlantCard;