import React from 'react';
import {Link} from 'react-router-dom';
import "./Header.css"

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                {/*<div>*/}
                    <div className="logo">FH</div>
                    <div className="pageTitle">Family Helper</div>
                {/*</div>*/}
            </div>
        );
    }
}
