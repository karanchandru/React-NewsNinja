import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

  constructor(){
    super();
    // console.log("hello I'm here in constructor");
    this.state={
      articles:[],
      loading:false,
      page:1
    }
  }

 //lifecycle method
 async componentDidMount(){
     let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=82375203c639443fb887e14666d06249&page=1&pageSize=20";
     let data=await fetch(url);
     let parsedData=await data.json();
     this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
 }
 
 handlePrevClick = async ()=>{
   
     let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=82375203c639443fb887e14666d06249&page=${this.state.page -1}&pageSize=20`;
     let data=await fetch(url);
     let parsedData=await data.json();     
     this.setState({
         page:this.state.page -1,
         articles:parsedData.articles
     })

 }
 handleNextClick= async ()=>{
    console.log("next");
     if(Math.ceil(this.state.page +1 > this.state.totalResults/20)){
        console.log(" No next");
     }
     else{
     let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=82375203c639443fb887e14666d06249&page=${this.state.page +1}&pageSize=20`;
     let data=await fetch(url);
     let parsedData=await data.json();     
     this.setState({
         page:this.state.page +1,
         articles:parsedData.articles
     })
    }

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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&laquo; Previous</button>
        <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
        </div>
    </div>
    )
  }
}

export default News;
