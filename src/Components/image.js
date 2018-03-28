import React from 'react';

class Image extends React.Component {
    render() {
        return(
            
            <div className="row">
                
                    <img src={this.props.image} alt={this.props.image} className="articleImage" />
                
            </div>
              
        );
    }
}

export default Image;