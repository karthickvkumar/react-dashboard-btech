import React from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import ListItems from '../components/list-items';

const HomePage = () => {
    const message = {
        name: 'Jhon',
        age: 22
    }
    return (
        <div>
            <h3>This is a Header</h3>
            <HeaderComponent data={message}></HeaderComponent>
            <ListItems></ListItems>
            <FooterComponent></FooterComponent>
        </div>
    );
};


export default HomePage;