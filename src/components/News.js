import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  constructor(){
    super();
    // console.log("hello I'm here in constructor");
    this.state={
      articles:[],
      loading:false
    }
  }

 //lifecycle method
 async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=82375203c639443fb887e14666d06249";
     let data=await fetch(url);
     let parsedData=await data.json();
     this.setState({articles:parsedData.articles})
 }

  render() {
    return (
    <div className="container my-3">
        <h2>NewsNenja  -Top Headline</h2>
        
        <div className="row my-4">
        {this.state.articles.map(
          (element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title ? element.title.slice(0,45) : ""} 
            description={element.description ? element.description.slice(0,88) : ""} 
            imageURL={element.urlToImage}
            newsURL={element.url} />
            </div>
          }
        )}

        </div>
    </div>
    )
  }
}

export default News;
