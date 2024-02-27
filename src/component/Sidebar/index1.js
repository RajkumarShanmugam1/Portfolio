import React from 'react'
import "../../assets/css/sidebar.css"
import myAvatar from '../../assets/image/my-avatar.png'

function SideBar(){
    return (
        <aside className="sidebar" data-sidebar="">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={myAvatar} alt="Rajkumar" width={80} />
                </figure>
                <div className="info-content">
                <h1 className="name" title="Rajkumar">
                    Rajkumar S
                </h1>
                <p className="title1">
                    <img
                    src="https://readme-typing-svg.demolab.com?font=Ubuntu&color=CA09F7FF&duration=7500&vCenter=true&height=25&lines=$+Project+Engineer;$+CTF+Player+;$+Open+Source+;$+GreekNet+Odyssey;$+Cyber+Sentinel;"
                    alt="Typing SVG"
                    />
                </p>
                </div>
                <button className="info_more-btn" data-sidebar-btn="">
                <span>Show Contacts</span>
                <ion-icon name="chevron-down" />
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator" />
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                        <ion-icon name="mail-outline" />
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
                        <ion-icon name="phone-portrait-outline" />
                        </div>
                        <div className="contact-info">
                        <p className="contact-title">Phone</p>
                        <p className="contact-link">+91 xxxxxx5811</p>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                        <ion-icon name="calendar-outline" />
                        </div>
                        <div className="contact-info">
                        <p className="contact-title">Birthday</p>
                        <time dateTime="2001-05-01">May 01, 2001</time>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                        <ion-icon name="location-outline" />
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
                        <ion-icon name="logo-github" />
                        </a>
                    </li>
                    <li className="social-item">
                        <a
                        href="https://www.linkedin.com/in/rajkumarshanmugam1/"
                        target="_blank"
                        rel='noreferrer'
                        className="social-link"
                        >
                        <ion-icon name="logo-linkedin" />
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;