import React from "react";
import Greeting from "../../components/Greeting";
import Header from "../../components/Header";
import "./style.css";

const Home = () => {
    return (
        <>
            <Header />
            {/* <div className="home"> */}
                <div className="container">
                    <div className="allContent">
                        <Greeting />
                    </div>
                    <div className="sideBar">ddd</div>
                </div>
            {/* </div> */}
        </>
    );
};

export default Home;
