import React from 'react';

class User extends React.Component {
    state = {
        read: Math.floor(Math.random() * 20)
    }
    
    render() {
        return(
            <div className="user-div col-xs-7">
                <div className="user-img col-xs-2">
                  <img src={this.props.image} alt={this.props.first} className="userImage" />  
                </div>
                
                <div className="user-name col-xs-8">{this.props.first + " " + this.props.last}<br></br> {this.state.read} mins ago </div>
            </div>
        );
    }
}

export default User;