import React from 'react'
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import { MenuItems } from "../utils/constants";
import './MyFamilyPage.css'
import { Tab, Tabs } from "@mui/material";

export default class MyFamilyPage extends React.Component {
    render() {
        return (
            <>
                <Header pageTitle={'My family'} rightPartText={''} rightPartUrl={''} />
                <LeftMenu items={MenuItems} activeItemId={0} />
                <div className="main myFamilyMain">
                    <Tabs value={'posts'}>
                        <Tab value="posts" label="Posts" />
                        <Tab value="map" label="Map" />
                    </Tabs>
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
