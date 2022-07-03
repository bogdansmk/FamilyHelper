import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import SingleList from '../Models/SingleList';
import { MenuItems } from "../utils/constants";
import List from './List';
import './Lists.css';
import AddNewListDialog from "./AddNewListDialog/AddNewListDialog";

interface IListsPageState {
    lists?: SingleList[];
}

interface IListsPageProps {
    user?: string;
}

type IListsPage = IListsPageProps & IListsPageState;

export default class ListsPage extends React.Component<IListsPage> {

    state: IListsPage = {
        lists: undefined,
        user: ''
    }

    componentDidMount() {
        this.fetchLists();
    }

    fetchLists() {
        fetch('/api', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(result => this.setState({ beers: result }))
    }


    renderLists() {
        this.state.lists && this.state.lists.length !== 0 && this.state.lists.map(item => {
            return (
                <List
                    singleList={item}
                />
            )
        })
    }

    render() {
        return (
            <>
                <Header pageTitle='Lists'
                    rightPartText=''
                    rightPartUrl='' />
                <LeftMenu items={MenuItems} />
                <div className="main">
                    <div className="mainTitle">Shared Lists</div>
                    <div className="mainBody">
                        <>
                            {this.renderLists()}
                        </>
                        <AddNewListDialog onAdd={this.fetchLists} />
                    </div>
                </div>
            </>
        );
    }
}
