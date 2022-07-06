import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import { MenuItems } from "../utils/constants";
import './MyFamilyPage.css';

export default class NoFamilyPage extends React.Component {

    render() {
        return (
            <>
                <Header pageTitle={'No family'} authorized={true} />
                <LeftMenu items={MenuItems} activeItemId={0} />
                <div className="main noFamily">
                    Ask family head to invite u to the family
                </div>
            </>
        )
    }
}
