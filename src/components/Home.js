import React, { useState, useEffect, useRef } from 'react';

import '../styles/home_styles.css';

import Deck from './Deck.js';

function Point(props) {
    return (
        <div className="point">
            <div className="point_head">
                <img src={props.icon} alt="" />
            </div>
            <div className="point_body">
                <div className="point_name">{props.name}</div>
                <div className="point_description">{props.description}</div>
            </div>
        </div>
    )
}

function Package(props) {
    return (
        <div className="package" style={{ backgroundColor: props.color }}>
            <img src={props.image} alt="" className="package_image" />

            <div className="package_information">
                <div className="package_head">
                    <div className="package_name">{props.name}</div>
                    <div className="package_description">{props.description}</div>
                </div>
                <div className="package_body">
                    <div className="package_price">{`$${props.price}`}</div>
                    <div className="package_purchase">
                        <a href="https://localhost" target="_blank" rel="noreferrer">Purchase</a>
                    </div>
                </div>
                <div className="package_foot">
                    Includes all base features:
                    <ul>
                        <li>Feature 1</li>
                        <li>Feature 2</li>
                        <li>Feature 3</li>
                        <li>Feature 4</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Home() {
    const [loaded, setLoaded] = useState(false);
    const [gallery, setGallery] = useState(0);
    const galleryRef = useRef(null);

    useEffect(() => {
        setGallery(galleryRef);
        setLoaded(true);
    }, []);

    return (
        <div>
            <div className="section1">
                <div className="container">
                    <img src="./react-webpage-03/images/reyna.png" alt="" className="splash_image" />
                    <img src="./react-webpage-03/images/val-logo.png" alt="" className="splash_logo" />
                    <div className="sign_up">
                        <a href="https://localhost" target="_blank" rel="noreferrer">Sign Up</a>
                    </div>
                </div>
                <div ref={galleryRef} className="gallery">
                    {
                        loaded ?
                        <Deck gallery={gallery} /> : null
                    }
                </div>
            </div>

            <div className="section2">
                <div className="marketing_points_container">
                    <Point
                        icon="./react-webpage-03/images/icons/val-symbol.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                    <Point
                        icon="./react-webpage-03/images/icons/bladestorm.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                    <Point
                        icon="./react-webpage-03/images/icons/dimensional-drift.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                    <Point
                        icon="./react-webpage-03/images/icons/empress.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                    <Point
                        icon="./react-webpage-03/images/icons/shock-bolt.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                    <Point
                        icon="./react-webpage-03/images/icons/turret.png"
                        name="In the Crosses"
                        description="Rewards accuracy and skill"
                    />
                </div>
            </div>

            <div className="section3">
                <div className="accolades_container">
                    <div className="accolade">
                        <i className="fas fa-award"></i>
                    </div>
                    <div className="accolade">
                        <i className="fas fa-flag"></i>
                    </div>
                    <div className="accolade">
                        <i className="fas fa-award"></i>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div className="packages_container">
                    <Package
                        color="#2BAD31"
                        image="./react-webpage-03/images/viper.png"
                        name="Package 1"
                        description="Just get the job done."
                        price="29"
                    />
                    <Package
                        color="#F56340"
                        image="./react-webpage-03/images/phoenix.png"
                        name="Package 2"
                        description="Just get the job done."
                        price="29"
                    />
                    <Package
                        color="#3694F4"
                        image="./react-webpage-03/images/jett.png"
                        name="Package 3"
                        description="Just get the job done."
                        price="29"
                    />
                </div>
            </div>

            <div className="section5">
                <div className="contacts_container">
                    <div className="contact_section">
                        <ul>
                            <li>Affiliates</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                    <div className="contact_section">
                        <ul>
                            <li>Telephone <i className="fas fa-phone-square-alt"></i></li>
                            <li>Email <i className="fas fa-envelope-open"></i></li>
                        </ul>
                    </div>
                    <div className="contact_section">
                        <ul>
                            <li>Instagram <i className="fab fa-instagram-square"></i></li>
                            <li>Twitter <i className="fab fa-twitter-square"></i></li>
                            <li>Facebook <i className="fab fa-facebook-square"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
