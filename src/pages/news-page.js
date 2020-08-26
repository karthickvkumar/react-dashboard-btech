import React, { Component } from 'react';

import NEWS from '../json/news.json';

class NewsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: NEWS,
            filterNews: []
        }
    }

    handleSearch = (event) => {
        let keyword = event.target.value;
        let filterContent = this.state.news.articles.filter((news) => {
            return news.title.indexOf(keyword) > -1
        })
        this.setState({
            filterNews: filterContent
        })
    }

    render() {
        let newData = this.state.filterNews.length == 0 ? this.state.news.articles : this.state.filterNews;
        let newsList = newData.map((news, index) => {
            return (
                <div key={index} className="news-list">
                    <img src={news.urlToImage} className="news-image" />
                    <div className="news-content">
                        <span className="news-title">{news.title}</span>
                        <span className="news-desc">{news.description}</span>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="header">
                    <div className="logo-holder">
                        <img src={require("../images/logo.png")} className="logo" />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search by News title.." className="search-box" onChange={this.handleSearch} />
                    </div>
                </div>
                <div className="content">
                    {newsList}
                </div>
            </div>
        );
    }
}

export default NewsPage;