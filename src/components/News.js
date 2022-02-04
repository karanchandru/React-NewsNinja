import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize:6,
    category:'general',
  }
  
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

  } 

  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsNinja`;
  }

  async updateNews(pageNo){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=82375203c639443fb887e14666d06249&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     this.setState({loading:true});
     let data=await fetch(url);
     let parsedData=await data.json();
     this.setState({
       articles:parsedData.articles,
       totalResults:parsedData.totalResults,
       loading: false
      })
  }

 //lifecycle method
 async componentDidMount(){
     this.updateNews();
 }
 
 handlePrevClick = async ()=>{
    this.setState({
      page:this.state.page -1
    })
    this.updateNews();

 }
 handleNextClick= async ()=>{
    this.setState({
      page:this.state.page +1
    })
    this.updateNews();

 }

  render() {
    return (
    <div className="container my-3">
        <h1 className="text-center" style={{margin:'40px 0px'}}>NewsNenja  -Top {this.capitalizeFirstLetter(this.props.category)} Headline  </h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-4">
        {!this.state.loading && this.state.articles.map(
          (element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title ? element.title.slice(0,45) : ""} 
            description={element.description ? element.description.slice(0,88) : ""} 
            imageURL={element.urlToImage}
          newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          }
        )}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&laquo; Previous</button>
        <button disabled={this.state.page +1 > this.state.totalResults/this.props.pageSize} 
        type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &raquo;</button>
        </div>
    </div>
    )
  }
}

export default News;
