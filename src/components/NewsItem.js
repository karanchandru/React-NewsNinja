import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageURL,newsURL} =this.props;   //Destructuring
    return <div className="my-3">
        <div className="card" style={{width:"18rem"}}>
          <img src={!imageURL ? "https://www.kitco.com/news/2022-01-28/images/inflation-400.jpg":imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
    </div>;
  }
}

export default NewsItem;
