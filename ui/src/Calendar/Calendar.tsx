import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import {MenuItems} from "../utils/constants";

export default class CalendarPage extends React.Component {
    render() {
        return (
            <>
                <Header pageTitle={'Calendar'} authorized={true}/>
                <LeftMenu items={MenuItems} activeItemId={1}/>
                <div className="main">
                    <div className="mainTitle">Calendar</div>
                    <div className="mainBody">Page is under maintenance</div>
                </div>
            </>
        )
    }
}
