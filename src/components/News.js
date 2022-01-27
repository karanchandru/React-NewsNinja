import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
    <div className="container my-3">
        <h2>NewsNenja  -Top Headline</h2>
        <div className="row my-4">
          <div className="col-md-4">
          <NewsItem title="myTitle" description="my description" />
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="my description" />
          </div>
          <div className="col-md-4">
          <NewsItem title="myTitle" description="my description" />
          </div>
        </div>
    </div>
    )
  }
}

export default News;
