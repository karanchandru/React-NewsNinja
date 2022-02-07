import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageURL,newsURL,author,date,source} =this.props;   //Destructuring
    return <div className="my-3">
        <div className="card" >
          <div style={{
            display:'flex',
            justifyContent:"flex-end",
            position:"absolute",
            right:'0'
          }}>
            <span className="badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <img src={!imageURL ? "https://www.kitco.com/news/2022-01-28/images/inflation-400.jpg":imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text"><small className="text-muted">By {!author ? "unknown": author} on {new Date(date).toGMTString}</small></p>
            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
    </div>;
  }
}



export default NewsItem;
