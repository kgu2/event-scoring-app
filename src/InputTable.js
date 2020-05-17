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
    
    function handleInput(event){
        const {type,id,value} = event.target
        if(type === "checkbox"){ changeFinals(prevState => !prevState )}
        else  if(id === "name") {changeName(() => value)}
        else  if(id === "event") {changeEvent(() => value)}
        else  if(id === "finals") {changeFinals(() => value)}
        else  if(id === "throws") {changeThrows(() => value)}
        else  if(id === "flight") {changeFlight(() => value)}    
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
       else if(typeof flight === 'undefined' || isNaN(parseInt(flight))){
        alert("Please enter a valid flight number")
       }
       else{
        changeInfo([...info,<tr><td>{name}</td><td>{event}</td><td>{(finals? "Yes": "No")}</td><td>{throws}</td><td>{flight}</td></tr>])
       }
       
        /*
        changeFinals(() => '' )
        changeName(() => '')
        changeEvent(() => '')
        changeFinals(() => '')
        changeThrows(() => '')
        changeFlight(() => '')
        */
      // changeInfo([...info,<tr><td>{name}</td><td>{event}</td><td>{(finals? "Yes": "No")}</td><td>{throws}</td><td>{flight}</td></tr>])
        console.log(parseInt(throws))
        console.log(tableRows)
    }
    return(
    <div>
        <form className="container">
            <div>
                <h4>Athlete:<h4 /> <input  value = {name} id = "name" onChange = {handleInput} placeholder = "Name"/>
                <br />
                <h4>Choose Event Type:<h4/>
                <select id= "event" onChange = {handleInput}>
                        <option value="" disabled selected>Select Event Type</option>
                        <option value="shot">Shot</option>
                        <option value="discus">Discus</option>
                        <option value="hammer">Hammer</option>
                        <option value="weight">Weight</option>
                        <option value="javelin">Javelin</option>
                    </select>
                <br />
                <h4>Number of Throws<h4/> <br/>
                <div>
                    <label>3: <input type="radio" id="throws" name="throws" value="3" onChange={handleInput}/></label>
                    <label>4: <input type="radio" id="throws" name="throws" value="4" onChange={handleInput}/></label>
                    {/*   Throws: <input   value = {throws} id = "throws" onChange = {handleInput} placeholder= "Number of Throws"/> */}
                </div>
                <br />
                <h4>Flight:<h4/><input  value = {flight} id = "flight" onChange = {handleInput} placeholder= "Flight Number" /> 
                <br />
                <label style="font-weight:bold"> Finals: <input type = "checkbox" value = {finals} id = "finals"  checked = {finals} onChange = {handleInput} /> <label/>
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
