import React from 'react';
import Image from './image';
import Content from './content';
import User from './user';
import Social from './social';

const API_KEY = "a1eb73d0e0c54854a4fe81029f583e81";

class Card extends React.Component {
  state = {
      userDataFirst: [],
      userDataLast: [],
      userDataImage: [],
      articleTitle: [],
      articleContent: [],
      articleImage: [],
      articleUrl: []
  }
    
  handleClick = (e) => {
    this.setState({
        like: true,

    });


  }
  
  componentDidMount() {
      fetch('https://randomuser.me/api/?results=100&nat=US')
      .then(response => response.json())
      .then(data => {
          /*console.log(data);
          const randomHundred = Math.floor(Math.random() * 100);*/
          this.setState({
              userDataFirst: data.results[this.props.id].name.first,
              userDataLast: data.results[this.props.id].name.last,
              userDataImage: data.results[this.props.id].picture.thumbnail
          })
      })
      
      fetch(`https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
          /*console.log(data);
          const randomTen = Math.floor(Math.random() * 10);*/
          this.setState({
              articleTitle: data.articles[this.props.id].title,
              articleContent: data.articles[this.props.id].description,
              articleImage: data.articles[this.props.id].urlToImage,
              articleUrl: data.articles[this.props.id].url
          })
      })
  }
    
  render() {
    return (
        
      
         <div className="card col-xs-offset-1 col-xs-10 col-md-offset-1 col-md-5">

            <div className="container-fluid">
                <Image 
                    image={this.state.articleImage}
                />
            </div>

            <Content 
                title={this.state.articleTitle}
                content={this.state.articleContent}
                url={this.state.articleUrl}
            />


            <div className="interactive-section col-xs-12">
               
                <User 
                    first={this.state.userDataFirst}
                    last={this.state.userDataLast}
                    image={this.state.userDataImage}
                />

                <Social click={this.handleClick}/>
            </div>

         </div>
         
    );
  }
}

export default Card;