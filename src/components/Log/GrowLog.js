import React from 'react';
import './PlantLog.css'

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