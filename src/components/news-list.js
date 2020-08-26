import React, { Component } from 'react';

class NewsList extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div>
                        <img src={require("../images/logo.png")} style={{ "height": "75px" }} />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Enter a news title.." />
                    </div>
                </div>
                <div className="content"></div>
            </div>
        );
    }
}

export default NewsList;