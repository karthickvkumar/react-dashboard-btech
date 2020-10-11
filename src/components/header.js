import React from 'react';

const HeaderComponent = (props) => {
    const TriggerClick = (message) => {
        alert(message)
    };

    const focus = () => {
        const name = "On Focus";
        return true
    }

    const blur = () => {
        const name = "On Blure";
        console.log(name)
    }

    const mouseEnter = () => {
        const name = "On Mouse Enter";
        console.log(name)
    }

    const mouseleave = () => {
        const name = "On Mouse Leave";
        console.log(name)
    }

    return (
        <div>
            <h2 className="header">{props.data.name + ' ' + props.data.age} </h2>
            <input type="text" placeholder="User name.." onFocus={() => focus()}
                onBlur={() => blur()} />
            <button onClick={() => TriggerClick('This button is clicked')}>Click</button>
        </div>
    );
};

export default HeaderComponent;


