import React from 'react'
import {Chip} from "@mui/material";

export interface IUser {
    name: string
    avatarUrl: string
    status: string
    isHead?: boolean
    tag?: ITag
}

interface ITag {
    title: string
    color?: string
}

export default class UserCard extends React.Component<IUser> {
    render() {
        return (
            <div className="userCard">
                <img className="userAvatar" src={this.props.avatarUrl} alt="avatar"/>
                <div className="userInfo">
                    <p className="userName">{this.props.name}</p>
                    <p className="userStatus">{this.props.status}</p>
                    {this.props.tag &&
                    <Chip
                        className="userTag"
                        size="small"
                        color="primary"
                        label={this.props.tag.title}
                        sx={{background: this.props.tag.color}}
                    />}
                </div>
                {this.props.isHead && <div className="userHeadStatus">Head</div>}
            </div>
        );
    }
}
