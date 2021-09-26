


    import React from "react";

    class Test extends React.Component{
        render() {
            const {title, age} = this.props;
            return (
                <div>
                    <h1> 
                        Test 55545
                    </h1>
                    <h2>{title}</h2>
                    <h3>{age}</h3>
                </div>
            )
        }
    }

    export default Test;