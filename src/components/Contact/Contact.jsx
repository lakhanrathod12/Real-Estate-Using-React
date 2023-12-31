import React from "react";
import './Contact.css'
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
const Contact =()=>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left Side */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact</span>
                    <span className="primaryText">Easy to Contact US</span>
                    <span className="secondaryText">We Always ready to help by
                        believe a good place to live can make your life better
                        <div className="flexColStart contactModes">
                            {/* first Row */}
                            <div className="flexStart row">
                                {/* first mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Call</span>
                                            <span>+919 237 239 290</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Call Now</div>
                                </div>
                                {/* second mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <BsFillChatDotsFill size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Chat</span>
                                            <span>+919 237 239 290</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">chat Now</div>
                                </div>



                            </div>

                            {/* second row */}
                            <div className="flexStart row">
                                {/* first mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Video Call</span>
                                            <span>+919 237 239 290</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Video Call Now</div>
                                </div>
                                {/* second mode */}
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={25}/>
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Message</span>
                                            <span>+919 237 239 290</span>
                                        </div>
                                    </div>
                                    <div className="flexCenter button">Message Now</div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                {/* Right Side */}
                <div className="c-right">
                   <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                   </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;