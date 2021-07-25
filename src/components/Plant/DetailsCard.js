import React from 'react';
import aloe from '../Assets/plant-images/aloe.jpg';


const DetailsCard = (props) => <div class="card" style={{ width: '18rem' }}>
    <div class="details">
        <p> Plant Details Card </p>  
        <img src={aloe} alt="" />
        
        <h6><strong>Name:</strong></h6>
            <p>Archie</p>
        <h6><strong>Type:</strong></h6>
            <p>Aloe</p>
        <h6><strong>Germ/Transplant Date:</strong></h6>
            <p>11/11/2020</p>
        <h6><strong>Growing Medium:</strong></h6>
            <p>Soil</p>
        <h6><strong>Indoor/Outdoor:</strong></h6>
            <p>Indoor</p>
        <h6><strong>Environment/Location:</strong></h6>
            <p>Windowsill</p>
        <h6><strong>Lighting:</strong></h6>
            <p>Mother Nature</p>
        <h6><strong>Lighting Schedule:</strong></h6>
            <p>Mother Nature's Time</p>


        <button type="submit">Edit Details</button>
        <button type="submit">Update Log</button>
        <button variant="primary">RIP Plant</button>
        <button variant="primary">Delete Plant</button>

        <br /><br />
    </div>
</div>

export default DetailsCard;