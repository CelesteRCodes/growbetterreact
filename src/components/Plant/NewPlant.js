import React from 'react';
import './NewPlant.css'

function NewPlant(props){
    return(
        <div class="new-plant-form" align="center">
            <br />
            <p>New Plant Entry Form</p>
            <h3>New Plant Baby?!</h3>
            <p>Tell Us More About Them Below</p>
            <form action="/">
            <div class="form-group">
                <label><strong>Plant Name</strong></label><input class="form-control" type="text" 
                name="username" id="entry-field" placeholder="Plant Name" /><br />
        
                <label><strong>Plant Type</strong></label><input class="form-control" type="text" 
                name="email" id="entry-field" placeholder="Plant Type" /><br />
        
                <label><strong>Germination Date</strong></label><input class="form-control" type="text" 
                name="germinate_date" id="entry-field" placeholder="00/00/0000" /><br />

                <label><strong>Direct/Transplant</strong></label><br></br>
                <input type="radio" id="direct" name="directsow" value="direct sow" />
                <label for="direct sow">Direct Sow</label><br />
                <input type="radio" id="transplant" name="directsow" value="transplant" />
                <label for="transplant">Transplant</label><br /><br />
        
                <label><strong>Transplant/Direct Sow Date</strong></label><br />
                (Direct Sow Date = Germination Date)
                <input class="form-control" type="text" name="transplant_date" id="entry-field" 
                placeholder="00/00/0000" /><br />
                
                <label><strong>Indoor/Outdoor?</strong></label><br />
                <input type="radio" id="indoor" name="location" value="indoor" />
                <label for="indoor">Indoor</label><br />
                <input type="radio" id="outdoor" name="location" value="outdoor" />
                <label for="outdoor">  Outdoor</label><br /><br />

                <label><strong>Plant's Environment</strong></label><br />
                <select name="environment">
                    <option value="None"></option>
                    <option value="Grow Tent/Room">Grow Tent/Room</option>
                    <option value="Cabinet Greenhouse">Cabinet Greenhouse</option>
                    <option value="Windowsill">Windowsill</option>
                    <option value="Direct Sow">Direct Sow</option>
                    <option value="Raised Bed">Raised Bed</option>
                    <option value="Container">Container</option>
                    <option value="Greenhouse">Greenhouse</option>
                </select><br /><br />

                <label><strong>Growing Medium</strong></label><br />
                <select name="growing_medium">
                    <option value="None"></option>
                    <option value="Soil">Soil</option>
                    <option value="Water Only (Herbs)">Water Only (Herbs)</option>
                    <option value="Perlite/Vermiculite">Perlite/Vermiculite</option> 
                    <option value="Rockwool">Rockwool</option>
                    <option value="Clay Pebbles/Hydroton">Clay Pebbles</option>
                    <option value="Coco Coir/Peat">Coco Coir/Peat</option>
                </select><br /><br />

                <label><strong>Type Of Lighting</strong></label><br />
                <select name="lighting">
                    <option value="None"></option>
                    <option value="Sunlight">Sunlight</option>
                    <option value="Fluorescent">Fluorescent</option>
                    <option value="LED">LED</option>
                    <option value="HPS">HPS</option>
                    <option value="CFL">CFL</option>
                </select><br /><br />

            <label><strong>Lighting Schedule</strong></label><br />
            <input type="radio" id="mothernature" name="schedule" value="on mother nature's time" />
            <label for="mothernature">On Mother Nature's Time</label><br />

            <input type="radio" id="twelve" name="schedule" value="12 hrs ON, 12 hrs OFF" />
            <label for="twelve">12 hrs ON, 12 hrs OFF</label><br />

            <input type="radio" id="sixteen" name="location" value="16 hrs ON, 8 hrs OFF" />
            <label for="sixteen">16 hrs ON, 8 hrs OFF</label><br />

            <input type="radio" id="six" name="schedule" value="6-10 hrs ON" />
            <label for="six">6-10 hrs ON</label><br />

            <input type="radio" id="allday" name="schedule" value="24 hrs ON" />
            <label for="allday">24 hrs ON</label><br /><br />

            <label><strong>Upload Photo</strong></label><br />

            <input type="file" name="my-photo-file" id="my-file" name="photo_url" />
            <br /><br />
            
            <button type="submit"><a href='/'>Submit</a></button>
            
            <button type="cancel"><a href="/login">Cancel</a></button>
            <br /> <br />
    </div>
    </form>
    </div>
    )}


export default NewPlant;