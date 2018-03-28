import React from 'react';

class Content extends React.Component {
    render() {
        return(
            <div className="content col-xs-12"> 
               
                <h2 className="title">{this.props.title}</h2>
                <p className="content">{this.props.content}</p>
                <a className="link" href={this.props.url}>Click here to learn more</a>
            </div>
        );
    }
}

export default Content;