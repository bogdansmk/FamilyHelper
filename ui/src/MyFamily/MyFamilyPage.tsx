import React from 'react'
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import {MenuItems, Users} from "../utils/constants";
import './MyFamilyPage.css'
import {FHTab, FHTabPanel, FHTabs} from "../components/Tabs/Tabs";
import AddNewMemberDialog from "./AddNewMemberDialog/AddNewMemberDialog";
import UserCard, {IUser} from "./UserCard/UserCard";
import map from '../assets/map.png'
import {Divider} from "@mui/material";
import Joseph from '../assets/joseph.png'
import Jane from '../assets/jane.png'
import Reply from "@fluentui/svg-icons/icons/arrow_reply_down_16_regular.svg";
import TextEdit from "@fluentui/svg-icons/icons/text_edit_style_20_regular.svg";

interface IMyFamilyState {
    activeTab: string
}

export default class MyFamilyPage extends React.Component {
    state: IMyFamilyState = {
        activeTab: 'posts'
    }

    handleTabSwitch = (event: React.SyntheticEvent, value: string) => {
        this.setState({activeTab: value})
    }

    render() {
        return (
            <>
                <Header pageTitle={'My family'} authorized={true}/>
                <LeftMenu items={MenuItems} activeItemId={0}/>
                <div className="main myFamilyMain">
                    <FHTabs value={this.state.activeTab} onChange={this.handleTabSwitch}>
                        <FHTab value="posts" label="Posts"/>
                        <FHTab value="map" label="Map"/>
                    </FHTabs>
                    <FHTabPanel value={'posts'} index={this.state.activeTab}>
                        <div className="postsWrapper">
                            <Divider className="divider" sx={{marginTop: '0 !important'}}>Today</Divider>
                            <div className="post">
                                <img className="postAvatar" src={Joseph} alt="user"/>
                                <div className="postBody">
                                    <div className="postAuthor">Joseph</div>
                                    <div className="postDate">Today 4:20 PM</div>
                                    <div className="postText">Welcome to our Family Helper, my dears!!!</div>
                                    <div className="postReply post">
                                        <img className="postAvatar" src={Jane} alt="user"/>
                                        <div className="postBody">
                                            <div className="postAuthor">Jane</div>
                                            <div className="postDate">Today 4:24 PM</div>
                                            <div className="postText">Hooray!! &#127881;&#127881;&#127881;</div>
                                        </div>
                                    </div>
                                    <div className="replyBtn">
                                        <img src={Reply} alt=''/> Reply
                                    </div>
                                </div>
                            </div>

                            <div className="addPostBtn">
                                <img src={TextEdit} alt=""/>
                                New post
                            </div>
                        </div>
                    </FHTabPanel>
                    <FHTabPanel className="mapTabPanel" value={'map'} index={this.state.activeTab}/>
                </div>
                <div className="ourFamily">
                    <div className="ourFamilyTitle">Our family</div>
                    <div className="ourFamilyBody">
                        {Users.map((user: IUser) => {
                            return <UserCard {...user}/>
                        })}
                        <AddNewMemberDialog/>
                    </div>
                </div>
            </>
        )
    }
}
