import { Component } from 'react';
import ScrollButton from './ScrollButton.js'

class Main extends Component {
    // constructor() {
    //     super();

    //     this.state = {
    //         topicSelect: ''
    //     }
    // }

    

   render() { 
       return (
           <main>
               <div className="wrapper">
                    <ScrollButton />
               </div>
           </main>
       )
   }
}

export default Main