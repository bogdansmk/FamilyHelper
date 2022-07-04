import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import SingleList from '../Models/SingleList';
import { MenuItems } from "../utils/constants";
import List from './List';
import './Lists.css';
import AddNewListDialog from "./AddNewListDialog/AddNewListDialog";
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

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
            .then(result => this.setState({ lists: result }))
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
                    rightPartUrl=''
                    authorized={true}
                />
                <LeftMenu items={MenuItems} activeItemId={2}/>
                <div className="main">
                    <div className="mainTitle">Shared Lists</div>
                    <div className="mainBody">
                        <>
                            {this.renderLists()}
                            <div className="card">
                            <div className="cardTitle">Products
                                <Checkbox
                                    icon={<StarBorder color="action" />}
                                    checkedIcon={<Star />}
                                    color={"warning"}
                                    size={"medium"}
                                />
                            </div>
                            <div className="cardBody">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Milk" />
                                    <FormControlLabel control={<Checkbox />} label="Coca-cola" />
                                    <FormControlLabel control={<Checkbox />} label="Sweets" />
                                    <FormControlLabel control={<Checkbox />} label="Apples" />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="card">
                            <div className="cardTitle">Products
                                <Checkbox
                                    icon={<StarBorder color="action" />}
                                    checkedIcon={<Star />}
                                    color={"warning"}
                                    size={"medium"}
                                />
                            </div>
                            <div className="cardBody">
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Milk" />
                                    <FormControlLabel control={<Checkbox />} label="Coca-cola" />
                                    <FormControlLabel control={<Checkbox />} label="Sweets" />
                                    <FormControlLabel control={<Checkbox />} label="Apples" />
                                </FormGroup>
                            </div>
                        </div>
                        </>
                        <AddNewListDialog onAdd={this.fetchLists} />
                    </div>
                </div>
            </>
        );
    }
}
