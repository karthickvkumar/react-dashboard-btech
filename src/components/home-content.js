import React, { Component } from 'react';

class HomeContent extends Component {

   validateEmail(){
        return true;
   }

    render() {
        return (
            <div>
                <h1>This is HOME CONTENT</h1>
                <table>
                    <thead>
                        <th>
                            <tr>Name</tr>
                            <tr>Age</tr>
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>MR.A</td>
                            <td>27</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HomeContent;