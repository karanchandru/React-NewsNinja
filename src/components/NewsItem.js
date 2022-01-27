import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let {title,description} =this.props;
    return <div>
        <div className="card" style={{width:"18rem"}}>
          <img src="https://img.huffingtonpost.com/asset/61f1d9e0270000cc03456c47.jpeg?cache=0ruD88EOO3&ops=1778_1000" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
    </div>;
  }
}

export default NewsItem;
