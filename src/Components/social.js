import React from 'react';
import heart from '../imgs/heart.png'
import comment from '../imgs/comment.png'
import heart2 from '../imgs/heart2.png'

class Social extends React.Component {
    state = {
        like: false,
        likeCounter: Math.floor(Math.random() * 1000 + 1),
        commentCounter: Math.floor(Math.random() * 100 + 1)
    }

    handleLikeClick = (e) => {
        this.setState({
            like: !this.state.like,
            
        });

        
        if(this.state.like === true){
           this.setState({
             likeCounter: this.state.likeCounter-1  
           }); 
        } else {
           this.setState({
             likeCounter: this.state.likeCounter+1  
           }); 
        }
        
    }
    
    render() {
        
        return(
            <div className="social col-xs-5">
               <div className="row">
                    <div className="likes col-xs-5">
                        <img src={(this.state.like) ? heart2 : heart} alt="heart" className="heart" onClick={this.handleLikeClick}></img>
                        <span>{" " + this.state.likeCounter}</span>

                    </div>

                    <p className="col-xs-1"> | </p>

                    <div className="comments col-xs-5">
                        <img src={comment} alt="comment" className="comment"></img>
                        <span>{" " + this.state.commentCounter}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;