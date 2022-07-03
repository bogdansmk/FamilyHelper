import { Star, StarBorder } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from 'react';
import SingleList from "../Models/SingleList";

interface ListProps {
    singleList: SingleList;
}

export default class List extends React.Component<ListProps> {

    renderItems() {
        const items = this.props.singleList.items;
        return (
            <FormGroup>
                {
                    items && items.length !== 0 && items.map(item => {
                        return (
                            <FormControlLabel
                                control={<Checkbox defaultChecked={item.isDone} />}
                                label={item.text}
                            />
                        )
                    })
                }
            </FormGroup>
        )
    }

    render() {
        const list = this.props.singleList;
        return (
            <div className="card">
                <div className="cardTitle">{list.name}
                    <Checkbox
                        icon={<StarBorder color="action" />}
                        checkedIcon={<Star />}
                        color={"warning"}
                        size={"medium"}
                    />
                </div>
                <div className="cardBody">
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}