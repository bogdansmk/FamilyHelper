import { AddCircle } from "@mui/icons-material";
import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import SingleList from '../Models/SingleList';
import { MenuItems } from "../utils/constants";
import List from './List';
import './Lists.css';

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
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(null)
        }).then(
            res => res.json())
            .then(
                result => this.setState({ beers: result })
            )
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
                        {/* <div className="card">
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
                                    <FormControlLabel control={<Checkbox />} label="Apples" /><FormControlLabel
                                        control={<Checkbox defaultChecked />} label="Milk" />
                                    <FormControlLabel control={<Checkbox />} label="Coca-cola" />
                                    <FormControlLabel control={<Checkbox />} label="Sweets" />
                                    <FormControlLabel control={<Checkbox />} label="Apples" /><FormControlLabel
                                        control={<Checkbox defaultChecked />} label="Milk" />
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
                        </div> */}
                        <div className="card addNewCard">
                            <div className="cardBody">
                                Add new list
                                <div className="addNewIcon">
                                    <AddCircle sx={{ fontSize: 96 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
