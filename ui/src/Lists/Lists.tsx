import {Star, StarBorder} from '@mui/icons-material';
import {Alert, Checkbox, FormControlLabel, FormGroup, Snackbar} from '@mui/material';
import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import {MenuItems} from "../utils/constants";
import AddNewListDialog from "./AddNewListDialog/AddNewListDialog";
import List from './List';
import './Lists.css';

interface IListsPageState {
    lists?: any[];
    isNotificationOpen?: boolean
}

interface IListsPageProps {
    user?: string;
}

type IListsPage = IListsPageProps & IListsPageState;

export default class ListsPage extends React.Component<IListsPage> {

    state: IListsPage = {
        lists: undefined,
        user: '',
        isNotificationOpen: false
    }

    openNotification = () => {
        this.setState({isNotificationOpen: true})
    };

    closeNotification = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({isNotificationOpen: false})
    };

    componentDidMount() {
        this.fetchLists();
    }

    fetchLists() {
        fetch('https://localhost:5000/familylists', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("Token")
            }
        }).then(
            (result) => {
                if (result.status == 200) {
                    result.json().then(
                        res => {
                            this.setState({lists: res});
                        }
                    );
                }
            }
        )
    }


    renderLists() {
        // console.log(this.state.lists)
        return (
            this.state.lists && this.state.lists.length !== 0 && this.state.lists.map(item => {
                console.log(item)
                return (
                    <div className="card">
                        <div className="cardTitle">{item.name}
                            <Checkbox
                                icon={<StarBorder color="action"/>}
                                checkedIcon={<Star/>}
                                color={"warning"}
                                size={"medium"}
                            />
                        </div>
                        <div className="cardBody">
                            <FormGroup>
                                {/* <FormControlLabel control={<Checkbox defaultChecked />} label="" /> */}
                            </FormGroup>
                        </div>
                    </div>
                )
            })
        )
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
                            <div className="card">
                                <div className="cardTitle">Products
                                    <Checkbox
                                        icon={<StarBorder color="action"/>}
                                        checkedIcon={<Star/>}
                                        color={"warning"}
                                        size={"medium"}
                                    />
                                </div>
                                <div className="cardBody">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Milk"/>
                                        <FormControlLabel control={<Checkbox/>} label="Coca-cola"/>
                                        <FormControlLabel control={<Checkbox/>} label="Sweets"/>
                                        <FormControlLabel control={<Checkbox/>} label="Apples"/>
                                        <FormControlLabel control={<Checkbox/>} label="Coca-cola"/>
                                        <FormControlLabel control={<Checkbox/>} label="Sweets"/>
                                        <FormControlLabel control={<Checkbox/>} label="Apples"/>
                                        <FormControlLabel control={<Checkbox/>} label="Coca-cola"/>
                                        <FormControlLabel control={<Checkbox/>} label="Sweets"/>
                                        <FormControlLabel control={<Checkbox/>} label="Apples"/>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="card">
                                <div className="cardTitle">Products
                                    <Checkbox
                                        icon={<StarBorder color="action"/>}
                                        checkedIcon={<Star/>}
                                        color={"warning"}
                                        size={"medium"}
                                    />
                                </div>
                                <div className="cardBody">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked/>} label="Milk"/>
                                        <FormControlLabel control={<Checkbox/>} label="Coca-cola"/>
                                        <FormControlLabel control={<Checkbox/>} label="Sweets"/>
                                        <FormControlLabel control={<Checkbox/>} label="Apples"/>
                                    </FormGroup>
                                </div>
                            </div>
                            {this.renderLists()}
                        </>
                        <AddNewListDialog onAdd={() => {
                            this.fetchLists();
                            this.openNotification()
                        }}/>
                    </div>
                </div>
                <Snackbar
                    open={this.state.isNotificationOpen}
                    autoHideDuration={4000}
                    onClose={this.closeNotification}
                >
                    <Alert onClose={this.closeNotification} variant="filled" severity="success" sx={{width: '100%'}}>
                        List was successfully created
                    </Alert>
                </Snackbar>
            </>
        );
    }
}
