import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Components/card';

class App extends React.Component {
    
  render() {
  return (
   <div className="container">
    <div className="row">
        <div className="container">
            <div class="col-xs-12">
                <button id="home-button" className="center-block"><a href="http://www.rahulrodrigues.ca">Home</a></button>
            </div>
            <div className="col-xs-12">
                 <h1 className="main-heading">Your top 10 news of the day</h1>
                 <h6 className="sub-heading">Powered by newsapi.org</h6>
             </div>
        </div>
        <div className="container">
         <Card id="0"/>
         <Card id="1"/>
         </div>
         <div className="container">
         <Card id="2"/>
         <Card id="3"/>
         </div>
         <div className="container">
         <Card id='4'/>
         <Card id='5'/>
         </div>
         <div className="container">
         <Card id='6'/>
         <Card id='7'/>
         </div>
         <div className="container">
         <Card id='8'/>
         <Card id='9'/>
         </div>
      
     </div>
   </div>
    );
  }
}

export default App;
