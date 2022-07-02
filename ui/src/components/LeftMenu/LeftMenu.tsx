import React from 'react';
import './LeftMenu.css'
import {CalendarMonth, Groups, ListAlt, Logout} from "@mui/icons-material";

export default class LeftMenu extends React.Component {
    render() {
        return (
            <div className="leftMenu">
                <div>
                    <div className="menuItem">
                        <div>
                            <Groups fontSize={"large"}/>
                        </div>
                        My family
                    </div>
                    <div className="menuItem">
                        <div>
                            <CalendarMonth fontSize={"large"}/>
                        </div>
                        Calendar
                    </div>
                    <div className="menuItem">
                        <div>
                            <ListAlt fontSize={"large"}/>
                        </div>
                        Lists
                    </div>
                </div>
                <div className="menuItem">
                    <div>
                        <Logout fontSize={"large"}/>
                    </div>
                    Logout
                </div>
            </div>
        );
    }
}
