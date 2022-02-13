import {Link, NavLink} from "react-router-dom";

import Beans from "../beans/beans"

import {FooterStyle} from "../../styles/FooterStyle"

const Footer = () => {
    return (
        <FooterStyle>
            <div className="wrapper">
                <nav>
                    <Link to="/coffee-house">
                        <span className="icon-logo"/>
                    </Link>
                    <ul>
                        <li><NavLink to="/coffee-house">Coffee House</NavLink></li>
                        <li><NavLink to="/our-coffee">Our Coffee</NavLink></li>
                        <li><NavLink to="/for-your-pleasure">For your pleasure</NavLink></li>
                    </ul>
                </nav>
                <Beans
                    color="var(--main-color-text)"/>
            </div>
        </FooterStyle>
    )
}

export {Footer}
