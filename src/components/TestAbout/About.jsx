

import React from "react";

class About extends React.Component {
    render() {
        const {userMe} = this.props;
        const {name, title} = userMe;
        return (
            <div>
            <h1>{name}</h1>
            <p>{title}</p>
            </div>     
        )
    }
};

export default About;