import React from 'react';


const DetailsCard = (props) => <div class="card" style={{ width: '18rem' }}>
    <div class="container">
        <img src="aloe.jpg" alt="" />
        <h1> Plant Name </h1>
        <p> Plant Type </p>
        <p> Germination/Transplant Date </p>
        <p> Growing Medium </p>
        <p> Plant Environment </p>
        <p> Lighting Used </p>
        <p> Lighting Schedule </p>

        <button type="submit">Edit Details</button>
        <button type="submit">Update Log</button>
    </div>
</div>

export default DetailsCard;