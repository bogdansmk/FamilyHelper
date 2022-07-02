import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";

export default class ListsPage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <LeftMenu/>
            </>
        );
    }
}
