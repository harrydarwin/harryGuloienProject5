import { Component } from 'react';

class ArgumentString extends Component {
   render() { 
       return (
           <div className='theArguments'>
           {
               this.props.currentArguments.map((argument) => {
                   return (
                       <div key={argument.id} className="arguments">
                           <p>{argument.argument}</p>
                       </div>
                   )
               })
           }
           </div>
       )
   }
}
export default ArgumentString