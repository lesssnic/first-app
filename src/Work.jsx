


    import React from "react";
    import About from "./components/TestAbout/About";
    import Test from "./components/TestComp/Test";

    class Work extends React.Component{
        render() {
            const userMe = [{name: 'Anton', title: 'prog'}, {name: 'All', title: 'people'}];
            return (
                <>
                {userMe?.map((userMe) => <About userMe = {userMe}/>)}
                <div>
                    <Test title={'Vasya'} age={55}/>
                    
                </div>
                </>
            )
        }
    }

    export default Work;