import React , { useState } from 'react';

function InputTable () {
    let tableRows = []
    //const eventList = ["shot","discus","hammer","weight","javelin"]
    const [name,changeName] = useState()
    const [event,changeEvent] = useState()
    const [finals, changeFinals] = useState(false)
    const [throws, changeThrows] = useState()
    const [flight,changeFlight] = useState()
    const [info, changeInfo] = useState(tableRows)
    const [distance, changeDistance] = useState()//for feet/meters
    const [distanceTwo, changeDistanceTwo] = useState()//for inches/centimeters
    const [englishMetric,changeEnglishMetric] = useState("metric")
    
    /*
    function eventScore(value,event){
        if(event === "shot")
        else if(event === "javelin")
            return (-36.14048+(value*37.268536)+(value*value*-0.128057))
        else if(event === "discus")
            return 
        else if(event === "hammer")
        else if(event === "weight")
        
         Math.round(-36.14048+(slj*37.268536)+(slj*slj*-0.128057));
  var bhp =  Math.round(-36.36996+(bh*12.478922)+(bh*bh*-0.007423));
  var sp = Math.round(209.70039+(s*-36.94427)+(s*s*0.165766));
  var osp = Math.round(-22.32216+(os*5.8318756)+(os*os*-0.000334));
    
    
    }    
    */
    function shiftEnglishMetric(event){
        const {value} = event.target
        changeEnglishMetric(prevState => !prevState)
    
    }
    function handleInput(event){
        const {type,id,value} = event.target
        if(type === "checkbox"){ changeFinals(prevState => !prevState )}
        else  if(id === "name") {changeName(() => value)}
        else  if(id === "event") {changeEvent(() => value)}
        else  if(id === "finals") {changeFinals(() => value)}
        else  if(id === "throws") {changeThrows(() => value)}
        else  if(id === "englishmetric") {changeEnglishMetric(() => value)}
        else  if(id === "flight") {changeFlight(() => value)}
        else  if(id === "distance") {changeDistance(() => value)}
        else  if(id === "distanceTwo") {changeDistanceTwo(() => value)}
    }
    function isNumber(num){ //checks if input is a number assuring all charectars within the string are integers
       return  0 < num.split('').map(int => parseInt(int)).filter((int) => isNaN(int)).length
    
    
    }
    
    function addData() {
       // let tableRows = [...tableRows]
       console.log(event)
       
       if(typeof name === 'undefined'){
        alert("Please enter athlete name")
       }
       else if(typeof event === 'undefined'){
        alert("Please choose an event")
       }
       else if(typeof throws === 'undefined'){
        alert("Please choose number of throws")
       }
       else if(typeof flight === 'undefined' || isNumber(flight)){
        alert("Please enter a valid flight number")
       }
       else if(typeof distance === 'undefined' ||( isNumber(distance)&&(distance!=='S'))){
        alert("Please enter a valid distance")
       }
       else{
        let newDistance = 0//eventScore(distance,event)
        changeInfo([...info,<tr><td>{name}</td><td>{event}</td><td>{(finals? "Yes": "No")}</td><td>{throws}</td><td>{flight}</td><td>{distance + "-" + distanceTwo + (englishMetric === "english" ? " Feet-Inches" : "m.cm")}</td></tr>])
       }
      // console.log(isNumber(flight))
        /*
        changeFinals(() => {} )
        changeName(() => {})
        changeEvent(() => {})
        changeFinals(() => false)
        changeThrows(() => {})
        changeFlight(() => {})
        */
      // changeInfo([...info,<tr><td>{name}</td><td>{event}</td><td>{(finals? "Yes": "No")}</td><td>{throws}</td><td>{flight}</td></tr>])
        console.log(parseInt(throws))
        console.log(tableRows)
    }
    return(
    <div>
        <form className="container">
            <div>
                Athlete: <input  value = {name} id = "name" onChange = {handleInput} placeholder = "Name"/>
                <br />
                <label>Choose Event Type:</label>
                <select id= "event" onChange = {handleInput}>
                        <option value="" disabled selected>Select Event Type</option>
                        <option value="shot">Shot</option>
                        <option value="discus">Discus</option>
                        <option value="hammer">Hammer</option>
                        <option value="weight">Weight</option>
                        <option value="javelin">Javelin</option>
                    </select>
                <br />
                <label>Number of Throws</label> <br/>
                <div>
                    3: <input type="radio" id="throws" name="throws" value="3" onChange={handleInput}/>
                    4: <input type="radio" id="throws" name="throws" value="4" onChange={handleInput}/>
                    {/*   Throws: <input   value = {throws} id = "throws" onChange = {handleInput} placeholder= "Number of Throws"/> */}
                </div>
                <br />
                Flight:<input  value = {flight} id = "flight" onChange = {handleInput} placeholder= "Flight Number" /> 
                <br />
                <div>
                    english: <input type="radio" id="englishmetric" name="englishmetric" value= "english" onChange={handleInput}/>
                    metric: <input type="radio" id="englishmetric" name="englishmetric" value="metric" onChange={handleInput}/>
                    {/*   Throws: <input   value = {throws} id = "throws" onChange = {handleInput} placeholder= "Number of Throws"/> */}
                </div>
                <br />
                {(englishMetric === "english" ? "Feet" : "Meters")}:<input   value = {distance} id = "distance" onChange = {handleInput} /> 
                <br />
                {(englishMetric === "english" ? "Inches" : "Centimeters")}:<input   value = {distanceTwo} id = "distanceTwo" onChange = {handleInput} /> 
                <br />
                Finals: <input type = "checkbox" value = {finals} id = "finals"  checked = {finals} onChange = {handleInput} /> 
                <br />
                <button type = "button" onClick={addData}>Submit</button>
            </div>
            {/*
            <div>
            The event entered must be shot , discus ,hammer, weight, or javelin
            Throws must be either 3 or 4
            Flight must be a number
            </div>
            */}
        </form>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Event</th>
                    <th>Finals</th>
                    <th>Throws</th>
                    <th>Flight</th>
                    <th>Distance</th>
                </tr>
            </thead>
            <tbody>
             {info}
             </tbody>
        </table>
    </div>
    )
}

export default InputTable