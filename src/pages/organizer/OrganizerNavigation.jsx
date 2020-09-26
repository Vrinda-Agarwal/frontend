import React from "react";
import { useLocation } from "react-router-dom";
import { UncontrolledCollapse, Button } from "reactstrap";
import { RoutedTabs, NavTab } from "react-router-tabs";

const OrganizerNavigation = (props) => {
    const location = useLocation();
    const tabs = [
        { to: "/events", title: "Events" },
        { to: "/members", title: "Members" },
        { to: "/budget", title: "Budgets" },
    ];

    const currentPath = () => {
        const path = location.pathname.split("/");
        const tab = tabs.filter((tab) => path.includes(tab.to.slice(1)));
        if (tab.length) return tab[0].title;
        return "";
    };

    return (
        <OrganizerNavigation>
            <div className="mb-3 mb-md-5 sticky-top pt-2 pt-md-3">
                <ul class="nav d-none d-sm-block">
                    <RoutedTabs startPathWith={`/admin/clubs/${props.match.params.id}`}>
                        {tabs.map((tab) => (
                            <NavTab to={tab.to}>{tab.title}</NavTab>
                        ))}
                    </RoutedTabs>
                </ul>
                <Button
                    id="club_tabs"
                    className="w-100 d-block d-sm-none text-uppercase common-btn nav-tab-collapse nav-tab-current dropdown-toggle mt-1"
                >
                    {currentPath()}
                </Button>
                <UncontrolledCollapse toggler="#club_tabs" className="mb-2">
                    <RoutedTabs startPathWith={`/admin/clubs/${props.match.params.id}`}>
                        {tabs.map((tab) => (
                            <NavTab
                                className="nav-tab-collapse common-btn text-uppercase d-sm-none bg-white"
                                activeClassName="d-none"
                                to={tab.to}
                            >
                                {tab.title}
                            </NavTab>
                        ))}
                    </RoutedTabs>
                </UncontrolledCollapse>
            </div>
            {props.children}
        </OrganizerNavigation>
    );
};

export default OrganizerNavigation;
