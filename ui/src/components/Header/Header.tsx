import { AccountCircle } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

interface IHeaderProps {
    pageTitle: string;
    rightPartText: string;
    rightPartUrl: string;
}

interface IHeaderState {
    authorized?: boolean;
}

type IHeader = IHeaderProps & IHeaderState;

export default class Header extends React.Component<IHeader> {

    state: IHeaderState = {
        authorized: false,
    }


    renderPageTitle() {
        return (
            <div className="pageTitle">{this.props.pageTitle}</div>
        )
    }

    renderRightPart() {
        const { rightPartUrl, rightPartText, authorized } = this.props;
        if (authorized) {
            return (
                <div className="rightPart">
                    <div className='accountIcon'>
                        <AccountCircle fontSize='large' />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="rightPart">
                    <Link className='header-rightPart-link' to={rightPartUrl}>{rightPartText}</Link>
                </div>
            )
        }

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
