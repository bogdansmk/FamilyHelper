import React from 'react';
import Header from "../components/Header/Header";
import LeftMenu from "../components/LeftMenu/LeftMenu";
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {AddCircle, Star, StarBorder} from "@mui/icons-material";
import './Lists.css'
import {MenuItems} from "../utils/constants";

export default class ListsPage extends React.Component {
    render() {
        return (
            <>
                <Header pageTitle='Lists'
                        rightPartText=''
                        rightPartUrl=''/>
                <LeftMenu items={MenuItems}/>
                <div className="main">
                    <div className="mainTitle">Shared Lists</div>
                    <div className="mainBody">
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
                                    <FormControlLabel control={<Checkbox/>} label="Apples"/><FormControlLabel
                                    control={<Checkbox defaultChecked/>} label="Milk"/>
                                    <FormControlLabel control={<Checkbox/>} label="Coca-cola"/>
                                    <FormControlLabel control={<Checkbox/>} label="Sweets"/>
                                    <FormControlLabel control={<Checkbox/>} label="Apples"/><FormControlLabel
                                    control={<Checkbox defaultChecked/>} label="Milk"/>
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
                        <div className="card addNewCard">
                            <div className="cardBody">
                                Add new list
                                <div className="addNewIcon">
                                    <AddCircle sx={{fontSize: 96}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
