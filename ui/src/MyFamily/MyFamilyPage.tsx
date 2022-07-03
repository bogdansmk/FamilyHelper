import React from 'react'
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import {MenuItems} from "../utils/constants";
import './MyFamilyPage.css'
import {FHTab, FHTabPanel, FHTabs} from "../components/Tabs/Tabs";

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
                <Header pageTitle={'My family'} rightPartText={''} rightPartUrl={''}/>
                <LeftMenu items={MenuItems} activeItemId={0}/>
                <div className="main myFamilyMain">
                    <FHTabs value={this.state.activeTab} onChange={this.handleTabSwitch}>
                        <FHTab value="posts" label="Posts"/>
                        <FHTab value="map" label="Map"/>
                    </FHTabs>
                    <FHTabPanel value={'posts'} index={this.state.activeTab}>
                        Posts
                    </FHTabPanel>
                    <FHTabPanel value={'map'} index={this.state.activeTab}>
                        Map
                    </FHTabPanel>
                </div>
                <div className="ourFamily">
                    <div className="ourFamilyTitle">Our family</div>
                    <div className="ourFamilyBody">

                    </div>
                </div>
            </>
        )
    }
}
