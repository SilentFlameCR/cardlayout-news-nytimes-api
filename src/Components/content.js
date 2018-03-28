import React from 'react';

class Content extends React.Component {
    render() {
        return(
            <div className="content col-xs-12"> 
               
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
                <a href={this.props.url}>Click here to learn more</a>
            </div>
        );
    }
}

export default Content;