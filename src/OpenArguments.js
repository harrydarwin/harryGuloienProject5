import { Component } from 'react';
import firebase from "./firebase.js";
import './App.css';

class OpenArgument extends Component {
    constructor() {
        super();
        this.state = {
            topic: '',
            currentArguments: [],
            newArgue: ''
        }
    }

    
    componentDidMount() {
        const dbRef = firebase.database().ref();

        const curArgumentArray = [];

        // console.log(this.props.fullList);
        const currentArgue = this.props.toArgue;
        const theList = this.props.fullList;
        for (let choices in theList) {
            if (theList[choices].topic === currentArgue) {
                theList[choices].arguments.forEach( (argument) => {
                    curArgumentArray.push(argument);
                })
                
                console.log(curArgumentArray);
            }
        }
        this.setState({
            currentArguments: curArgumentArray
        })
        // console.log(this.state)
    }


   render() { 
       return (
           <div>
                <h3>{this.props.toArgue}</h3>
                {
                    this.state.currentArguments.map((argument) => {
                        console.log(argument);
                        return (
                            <div key={argument.id} className="arguments">
                                <p>{argument.argument}</p>
                            </div>
                        )
                    })
                }
                <h3>Ready to argue?</h3>
                <form>
                    <div className="flexColumn">
                        <label htmlFor="userName">Please enter your name</label>
                        <input type="text" id="userName" name="userName" placeholder="Enter your name"/>

                        <label htmlFor="userArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                        <textarea name="userArgument" id="userArgument" placeholder="Your point of view"></textarea>
                   </div>
                </form>
                
           </div>
       )
   }
}
export default OpenArgument