import React, { useState , useEffect , useRef } from 'react';
import { Card } from 'react-bootstrap';

import { FaChevronUp , FaAngleDown , FaLocationDot } from "react-icons/fa6";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

import myAvatar from '../../assets/image/my-avatar.png';

import "../../assets/css/sidebar.css"
import "../../assets/css/main.css"

const Sidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const buttonRef = useRef(null);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        console.log(buttonRef);
    }, [buttonRef]);

    return (
        <Card className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar-info">
                <div className="avatar-box">
                    <img src={myAvatar} alt="Rajkumar" width={80} />
                </div>
                <div className="info-content">
                    <h1 className="name" title="Rajkumar">
                        Rajkumar S
                    </h1>
                    <p className="title1">
                        <img
                            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&duration=3000&pause=100&color=3391F7&center=true&vCenter=true&random=true&width=250&lines=Project+Engineer;CTF+Player;Open+Source;GreekNet+Odyssey;Cyber+Sentinel"
                            alt="Typing SVG"
                        />
                    </p>
                </div>
                <button className="info_more-btn" ref={buttonRef} onClick={toggleSidebar}>
                    <span>{isExpanded ? 'Hide Contacts' : 'Show Contacts'}</span>
                    {isExpanded ? <FaAngleDown/> : <FaChevronUp/>}
                </button>
            </div>
            { (isExpanded) && (
                <div className="sidebar-info_more">
                    <div className="separator" />
                    <ul className="contacts-list">
                        <li className="contact-item">
                            <div className="icon-box">
                                <CiMail/>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <abbr title="rajkumarshanmugam151@gmail.com" className="contact-link">
                                    rajkumarshanmugam151@gmail.com
                                </abbr>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <IoIosContact />
                            </div>
                            <div className="contact-info">
                            <p className="contact-title">Phone</p>
                            <p className="contact-link">+91 xxxxxx5811</p>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <SlCalender />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Birthday</p>
                                <time dateTime="2001-05-01">May 01, 2001</time>
                            </div>
                        </li>
                        <li className="contact-item">
                            <div className="icon-box">
                                <FaLocationDot  />
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Location</p>
                                <address>Chennai, Tamilnadu, India</address>
                            </div>
                        </li>
                    </ul>
                    <div className="separator" />
                    <ul className="social-list">
                        <li className="social-item">
                            <a
                            href="https://github.com/RajkumarShanmugam1"
                            target="_blank"
                            rel='noreferrer'
                            className="social-link"
                            >
                                <FaGithub/>
                            </a>
                        </li>
                        <li className="social-item">
                            <a
                            href="https://www.linkedin.com/in/rajkumarshanmugam1/"
                            target="_blank"
                            rel='noreferrer'
                            className="social-link"
                            >
                                <FaLinkedin/>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </Card>
    );
};

export default Sidebar;
