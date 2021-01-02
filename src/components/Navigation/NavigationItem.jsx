/**
 * View component to render a single navigation item.
 *
 * props:
 *  - title (`string`): Button text.
 *  - link (`string`): To where the button leads.
 *  - icon (`image`): Icon prefixing the text.
 */

import { NavItem, NavLink } from "reactstrap";

const NavigationItem = ({ title, link, icon }) => {
    return (
        <NavItem>
            <NavLink to={link} className="navitem my-3">
                <img src={icon} alt={title} className="navitem-icon mx-auto mx-lg-0" />
                <div className="d-none d-lg-block">
                    <div className="navitem-title ml-3">{title}</div>
                </div>
            </NavLink>
        </NavItem>
    );
};

export default NavigationItem;
