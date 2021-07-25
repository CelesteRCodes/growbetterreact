import React from 'react';
import '../Plant/PlantCard.css';


function WeeklySum(props) {
    return(
        <div class="card">
            <h4>Weekly Snapshot</h4>
            <table class="summary">
                <tr>
                    <th>Plant Image</th>
                    <th>AVG Water
                        <br />
                        <button type="submit"><a href="/">Reset AVG</a></button>
                    </th>
                    <th>AVG Nutes
                        <br />
                        <button type="submit"><a href="/">Reset AVG</a></button>
                    </th>
                    <th>Current Issues
                        <br />
                        <button type="submit"><a href="/">Resolve Issue</a></button>
                    </th>
                </tr>
            </table>
        </div>
    )
}


export default WeeklySum;

