import { Component } from 'react';
import AddTopic from './AddTopic.js';

class Main extends Component {
  

    

   render() { 
       return (
           <main>
               <div className="wrapper">
                    {
                        this.props.formShowing ?
                        <AddTopic />
                        :
                        <div></div>
                    }
               </div>
           </main>
       )
   }
}

export default Main