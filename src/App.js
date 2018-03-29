import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Components/card';

class App extends React.Component {
    
    tenCards = () => { 
        let block = [];
        
        /*JSX prop value have to be expression or text*/
        for(var i = 0; i <= 9; i+=2){
            block.push(
                <div className="container" key={`container${i}`} >
                    <Card id={`${i}`} />
                    <Card id={`${i+1}`} />
                </div>
            );
            
            
        }
        
        return block;
    }
    
  render() {
      
  return (
   <div className="container">
    <div className="row">
        <div className="container">
            <div className="col-xs-12">
                <button id="home-button" className="center-block"><a href="http://www.rahulrodrigues.ca">Home</a></button>
            </div>
            <div className="col-xs-12">
                 <h1 className="main-heading">Your top 10 news of the day</h1>
                 <h6 className="sub-heading">Powered by newsapi.org</h6>
             </div>
        </div>
        
        {this.tenCards()}
      
     </div>
   </div>
    );
  }
}

export default App;
