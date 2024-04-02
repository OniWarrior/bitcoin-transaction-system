import React from "react";
import "../Styles/Home.css";
import UnsignedNavigation from '../Components/UnsignedNavigation';

const Home = () => {
    return (
        <div>
            <UnsignedNavigation />
            <div className="home-box">
                <div className="home-container">


                    <main className="main-doc">
                        <div className="main-text">
                            <h1>Welcome to Bitcoin Transaction System</h1>

                            <p>Here at Bitcoin Transaction System, we provide an online platform to buy and sell bitcoin.</p>
                            <p>Whether you're a sophisticated and savvy investor looking to directly purchase and sell</p>
                            <p>or you're a trader that has to take care of clients bitcoin investment needs,</p>
                            <p>this application will provide an easy-to-use user interface and other</p>
                            <p>utilities to make investment choices in bitcoin easy and seamless.</p>
                        </div>
                    </main>





                </div>
            </div>
        </div>
    )

}

export default Home