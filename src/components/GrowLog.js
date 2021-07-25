import React from 'react';
import './PlantLog.css'

function GrowLog(props) {
    return (
        <div class="card">
            <div id="plantlog-entry" justify-content="center">
                <img src="" alt="" />
                <table>
                    <tr>
                        <th>User Name/ID</th>
                        <th>Photo</th>
                        <th>Comment</th>
                        <th>Timestamp</th>
                    </tr>
                </table>
                <button variant="primary">Edit Entry</button>
                <button variant="primary">Delete Entry</button>
            </div>
        </div>
    )
}


export default GrowLog;