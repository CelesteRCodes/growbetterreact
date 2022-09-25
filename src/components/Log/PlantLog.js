import React from "react";
import "./PlantLog.css";
import aloe from "../Assets/plant-images/aloe.jpg";

const PlantLog = (props) => {
  return (
    <div className="plantlog-card">
      <div id="plantlog-entry">
        <h4>Plant Log</h4>
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
          <tr>
            <td>
              <img className="plantlog-img" src={aloe} alt="" />
            </td>
            <td>"Green Leaves"</td>
            <td>"2:22 on 2/22/21"</td>
            <td>70-75</td>
            <td>"70-75%"</td>
            <td>"1-3mL"</td>
            <td>"Eggshells"</td>
            <td>"1-3mL"</td>
            <td>Yes</td>
          </tr>
        </table>
        <br />
        <button variant="primary">Edit Entry</button>
        <button variant="primary">Delete Entry</button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PlantLog;
