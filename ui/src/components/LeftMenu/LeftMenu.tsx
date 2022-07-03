import React from 'react';
import './LeftMenu.css'
import {Link} from "react-router-dom";

export interface IMenuItem {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
}

interface IMenu {
    items: IMenuItem[]
}

export default class LeftMenu extends React.Component<IMenu> {
    render() {
        return (
            <div className="leftMenu">
                {this.props.items.map((menuItem: IMenuItem) => {
                    return (
                        <Link to={menuItem.url} className={menuItem.isActive ? "menuItem menuItemActive" : "menuItem"}>
                            <div>
                                {menuItem.icon}
                            </div>
                            {menuItem.title}
                        </Link>
                    );
                })}
            </div>
        );
    }
}
