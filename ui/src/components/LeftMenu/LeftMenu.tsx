import React from 'react';
import './LeftMenu.css'
import { Link } from "react-router-dom";

export interface IMenuItem {
    id: number;
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
}

interface IMenu {
    items: IMenuItem[]
    activeItemId: number;
}

export default class LeftMenu extends React.Component<IMenu> {


    setActiveItem() {
        const items = this.props.items;
        const activeItemId = this.props.activeItemId;
        for (var i in items) {
            if (items[i].id === activeItemId) {
                items[i].isActive = true;
            }
            else {
                items[i].isActive = false;

            }
        }
    }

    render() {
        this.setActiveItem();
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
