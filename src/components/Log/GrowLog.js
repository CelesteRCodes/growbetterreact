import React from 'react';
import './PlantLog.css';
import aloe from '../Assets/plant-images/aloe.jpg';

function GrowLog(props) {
    return (
        <div class="card">
            <div id="plantlog-entry" justify-content="center">
                <h4>GrowLog (Admin)</h4>
                <img src="" alt="" />
                <table>
                    <tr>
                        <th>User Name/ID</th>
                        <th>Photo</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                    </tr>

                    <tr>
                        <td>Celestial/1</td>
                        <td><img class="img" src={aloe} alt="" /></td>
                        <td>Soil seems dry</td>
                        <td>2:22 on 2/22/21</td>
                    </tr>
                </table>
                <br />
                <button variant="primary">Edit Entry</button>
                <button variant="primary">Delete Entry</button>
                <br /><br />
            </div>
        </div>
    )
}


export default GrowLog;