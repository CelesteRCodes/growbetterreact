import React from 'react';
import './PlantLog.css'

function PlantLog(props) {
    return (
        <div class="card">
            <div id="plantlog-entry">
            <h4>Plant Log</h4>
                <img src="" alt="" />
                <table>
                    <tr>
                        <th>Photo</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                        <th>Temp</th>
                        <th>Humidity</th>
                        <th>Water Amount</th>
                        <th>Nutrient Used</th>
                        <th>Nutrient Amount </th>
                        <th>Organic?</th>
                    </tr>
                </table>
                <br />
                <button variant="primary">Edit Entry</button>
                <button variant="primary">Delete Entry</button>
                <br />
                <br />
    
            </div>
        </div>
    )
}


export default PlantLog;