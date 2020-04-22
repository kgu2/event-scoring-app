import React from 'react';

export default class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sex: null,
            firstName: "", 
            lastName: "", 
            ranking : 0,
            furthestThrow: 0,
        };

    }

    fullName() {
        this.getName();
        return this.state.firstName + " " + this.state.lastName;
    };    

    getName(){
        this.setState({
            firstName: "John", 
            lastName: "Downey"
        });
    };

    getRanking(){
        return `Ranking: ${this.state.ranking}`;
    }

    getFurthestThrow(){
        return `Furthest Throw: ${this.state.furthestThrow}`;
    }


    render() {
     let profile_pic = (this.state.sex === 'F')? './profile_female.png' : './profile_man.png';

      return (
        <div class="card" src={profile_pic} style={{width:400 + 'px'}}>
            <img class="card-img-top" src={profile_pic} alt="Card image" />
            <div class="card-body">
                <h4 class="card-title">{this.fullName()}</h4>
                <p class="card-text">{this.getRanking()}</p>
                <p class="card-text">{this.getFurthestThrow()}</p>
                <a href="#" class="btn btn-primary">See Athlete Profile</a>
            </div>
        </div>
      );
    }
  }