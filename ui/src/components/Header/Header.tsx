import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

interface IHeaderProps {
    pageTitle: string;
    rightPartText: string;
    rightPartUrl: string;
}

export default class Header extends React.Component<IHeaderProps> {

    renderPageTitle() {
        return (
            <div className="pageTitle">{this.props.pageTitle}</div>
        )
    }

    renderRightPart() {
        const { rightPartUrl, rightPartText } = this.props;
        return (
            <div className="rightPart">
                <Link className='header-rightPart-link' to={rightPartUrl}>{rightPartText}</Link>
            </div>
        )
    }

    render() {
        return (
            <div className="header">
                <div className='leftPart'>
                    <div className="logo">FH</div>
                    {this.renderPageTitle()}
                </div>
                {this.renderRightPart()}
            </div>
        );
    }
}
