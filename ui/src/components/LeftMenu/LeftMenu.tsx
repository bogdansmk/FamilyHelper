import React from 'react';
import './LeftMenu.css'

export interface IMenuItem {
    title: string
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
                        <div className={menuItem.isActive ? "menuItem menuItemActive" : "menuItem"}>
                            <div>
                                {menuItem.icon}
                            </div>
                            {menuItem.title}
                        </div>
                    );
                })}
            </div>
        );
    }
}
