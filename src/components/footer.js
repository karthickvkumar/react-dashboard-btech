import React from 'react';

const FooterComponent = () => {
    const style = {
        footer: {
            color: "red",
            fontSize: "32px",
            marginLeft: "15px"
        }
    };

    return (
        <div>
            <h2 style={style.footer}>This is a Footer</h2>
        </div>
    );
};

export default FooterComponent;