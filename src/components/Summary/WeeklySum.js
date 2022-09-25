import React from "react";
import "../Plant/PlantCard.css";
import aloe from "../Assets/plant-images/aloe.jpg";

const WeeklySum = (props) => {
  return (
    <div className="card">
      <div>
        <h4>Weekly Snapshot</h4>
        <table className="weekly-summary-table">
          <tr>
            <th>Plant Image</th>
            <br />

            <th>
              AVG Water
              <br />
              <button type="submit">
                <a href="/">Reset AVG</a>
              </button>
            </th>

            <th>
              AVG Nutes
              <br />
              <button type="submit">
                <a href="/">Reset AVG</a>
              </button>
            </th>

            <th>
              Current Issues
              <br />
              <button type="submit">
                <a href="/">Resolve Issue</a>
              </button>
            </th>
          </tr>

          <tr>
            <th>
              <td>
                <img className="img-current-issues" src={aloe} alt="" />
              </td>
            </th>
            <th></th>
            <th>1-3mL</th>
            <th>1-3mL</th>
            <th>Soil seems dry</th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default WeeklySum;

// there's another column between plant img and AVG water that's empty,
// can't find where the extra column is in the code current (7/25)
