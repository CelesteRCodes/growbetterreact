import React from 'react';
import './NewEntry.css';


function NewEntry(props){
    return(
        <div class="new-plant-form" align="center">
             <form action="/">
                 <div class="entry-form">
                     <br />
                     <p>Add New Entry Log</p>
                     <h3>Update Plant's Log Below</h3>
                     <label><strong>Watered?</strong></label><br />
                     <select name="water">
                        <option value="None"></option>
                        <option value="0.5-3mL">0.5-3 mL</option>
                        <option value="3-5mL">3-5 mL</option>
                        <option value="5-10mL">5-10 mL</option>
                        <option value="10-15mL">10- 15 mL</option>
                        <option value="15-20mL">15-20 mL</option>
                        <option value="20-30mL">20-30 mL</option>
                        <option value="30mL+">Greater than 30 mL</option>
                        </select>
                        <br /><br />
                        
                    <label><strong>Nutrient Type Given?</strong></label><br />
                    <input name="nute_type" type="text" placeholder="Name of Nutrient/Type" /> 
                    <br /><br />

                    <label><strong>Amount?</strong></label><br />
                    <select name="nutrients">
                        <option value="None"></option>
                        <option value="0.5-3mL">0.5-3 mL</option>
                        <option value="3-5mL">3-5 mL</option>
                        <option value="5-10mL">5-10 mL</option>
                        <option value="10-15mL">10- 15 mL</option>
                        <option value="15-20mL">15-20 mL</option>
                        <option value="20-30mL">20-30 mL</option>
                        <option value="30mL+">Greater than 30 mL</option>
                    </select> <br /><br />

                <strong> Organic Nutrients?</strong>
                    <br />
                <select name="organic">
                    <option value="IDK"></option>
                    <option value="Yes">Y</option>
                    <option value="No">N</option>
                </select><br /><br />
                
                <strong> Current Temp Range of Environment:</strong>
                    <br />(Fahrenheit)<br />
                    <select name="temp">
                    <option value="IDK"></option>
                    <option value="Less than 60>">Less Than 60</option>
                    <option value="60-65">60-65</option>
                    <option value="65-70">65-70</option>
                    <option value="70-75">70-75</option>
                    <option value="75-80">75-80</option>
                    <option value="80-85">80-85</option>
                    <option value="Greater than 85">Greater than 85</option>

            </select><br /><br />
                
            <strong> Current Humidity Level:</strong>
                <br />
            <select name="humidity">
                <option value="IDK"></option>
                <option value="Less than 30%">Less Than 30%</option>
                <option value="30-39%">30-39%</option>
                <option value="40-49%">40-49%</option>
                <option value="50-59%">50-59%</option>
                <option value="60-69%">60-69%</option>
                <option value="70-79%">70-79%</option>
                <option value="80-89%">80-89%</option>
                <option value="Greater than 89%">Greater than 89%</option>

            </select> <br /><br />
        
            <label><strong>Comments</strong></label><br />
            <center>(psst.. can add any additional nutrients here)</center>
            <input name="comment" type="text" placeholder="How are the leaves looking?"/>
            
            <br /><br />
        
          <label><strong>Upload Photo</strong></label><br />

          <input type="file" name="my-file" id="my-file" name="photo_url" />
          <br /><br />
          <button type="submit">Add New Entry</button> 
          <br /><br />

    </div></form></div>
    )}


export default NewEntry;