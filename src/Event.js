import React from 'react';
import Profile from './Profile/profile';

export default class Event extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          meet: null, 
          practice: null,

        };

        let banner = this.props.eventType;
        let events = ["shot", "discus", "hammer", "javelin", "weight"];
    }

    
    render() {
      return (
        <div>
            <h1>Hello CS 321</h1>
            <p>Welcome to our Team, we will be having a  + {this.banner}</p>
            {/*<Profile />*/} 
        </div>
      );
    }

  }


  