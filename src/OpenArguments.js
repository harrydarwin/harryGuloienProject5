import { Component } from 'react';
import firebase from "./firebase.js";
import './App.css';
import ArgumentString from './ArgumentString.js';

class OpenArgument extends Component {
    constructor() {
        super();
        this.state = {
            topic: '',
            currentArguments: [],
            newArgue: '',
            userName: ''
        }
    }

    
    componentDidMount() {

        const currentArgue = this.props.toArgue;
        const theList = this.props.fullList;
        const curArgumentArray = [];

        const dbRef = firebase.database().ref();

        dbRef.on('value', (data) => {
            const firebaseDataObj = data.val();
            const theseArguments = firebaseDataObj.Topics[currentArgue];
            // console.log(theseArguments);

            // for (let argument in theseArguments){
                
            //     const arguments = theseArguments[argument];
                
            // //    curArgumentArray.push(theseArguments[argument]);
            // }

            // console.log(curArgumentArray);
            
            // console.log(this.props.fullList);
            
            
        // for (let choices in theList) {
        //     if (theList[choices].topic === currentArgue) {
        //         theList[choices].arguments.map((each) => {
        //             const formatArgument = {
        //                 id: each.id,
        //                 argument: each.argument
        //             }
        //             curArgumentArray.push(formatArgument);
        //         })
        //     }
        // }
            
            
            

            this.setState({
                currentArguments: curArgumentArray,
                userArgument: '',
            })
            console.log(this.state.currentArguments)
        })
    }

    handleNewArgument = (e) => {
        e.preventDefault();
        const currentTopic = this.props.toArgue;
        
        const dbArgumentRef = firebase.database().ref('Topics/' + currentTopic);

       console.log(dbArgumentRef);
        const setName = this.state.userName;
        const setArgument = this.state.argument;
        console.log(setName + ': ' + setArgument)
        dbArgumentRef.push(setName + ': ' + setArgument);

        //clear input field
        document.querySelector('input').value = '';
        document.querySelector('textarea').value = '';
    }

    handleUserNameInput = (e) => {
        // console.log(e.target.value);
        this.setState({
            userName: e.target.value
        })
    }

    handleTextareaChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            argument: e.target.value
        })
    }

    


   render() { 
       return (
           <div>
                <h3>{this.props.toArgue}</h3>

                <ArgumentString
                currentArguments={this.state.currentArguments}
                />

                <h3>Ready to argue?</h3>
                <form>
                    <div className="flexColumn">
                        <label htmlFor="userName">Please enter your name</label>
                       <input onChange={this.handleUserNameInput} type="text" id="userName" name="userName" placeholder="Enter your name"/>

                        <label htmlFor="userArgument">Argue the topic but please refrain from personal attacks; racist, sexist, homophobic, transphobic, or any other offensive language will not be tolerated</label>
                       <textarea onChange={this.handleTextareaChange} name="userArgument" id="userArgument" placeholder="Your point of view"></textarea>
                       <button onClick={this.handleNewArgument} type='submit'>Submit Argument</button>
                   </div>
                </form>
                
           </div>
       )
   }
}
export default OpenArgument