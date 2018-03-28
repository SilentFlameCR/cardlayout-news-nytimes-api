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
         <Card idd="0"/>
         <Card idd="1"/>
         </div>
         <div className="container">
         <Card idd="2"/>
         <Card idd="3"/>
         </div>
         <div className="container">
         <Card idd='4'/>
         <Card idd='5'/>
         </div>
         <div className="container">
         <Card idd='6'/>
         <Card idd='7'/>
         </div>
         <div className="container">
         <Card idd='8'/>
         <Card idd='9'/>
         </div>
      
     </div>
   </div>
    );
  }
}

export default App;
