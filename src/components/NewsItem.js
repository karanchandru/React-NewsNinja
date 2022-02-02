import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description,imageURL,newsURL,author,date,source} =this.props;   //Destructuring
    return <div className="my-3">
        <div className="card" >
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%' ,zIndex:'1'}}>
            {source}
          </span>
          <img src={!imageURL ? "https://www.kitco.com/news/2022-01-28/images/inflation-400.jpg":imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}.....</h5>
            <p className="card-text">{description}.....</p>
            <p className="card-text"><small class="text-muted">By {!author ? "unknown": author} on {new Date(date).toGMTString}</small></p>
            <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
    </div>;
  }
}



export default NewsItem;
