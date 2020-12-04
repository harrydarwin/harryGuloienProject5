import { Component } from 'react';
import TopicList from './TopicList.js';
import ScrollButton from './ScrollButton.js';

class Header extends Component {
   render() { 
       return (
           <header>
               <section id="home" className="home">
                        <div className="flexColumn">
                            <h2>An open forum debating app you can use to argue other peoples opinions or share & defend one of your own</h2>
                            <div className="headBox">
                                <ScrollButton
                                showForm={this.props.showForm}
                                />
                           </div>
                        </div>
               </section>
           </header>
       )
   }
}
export default Header