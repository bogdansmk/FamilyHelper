import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormHelperText,
    TextField
} from "@mui/material";
import {AddCircle} from "@mui/icons-material";

interface IAddNewListDialogState {
    isOpen: boolean
    listName: string
    isListNameEmptyError: boolean
}

interface IAddNewListDialogProps {
    onAdd?: () => void
}

export default class AddNewListDialog extends React.Component<IAddNewListDialogProps> {
    state: IAddNewListDialogState = {
        isOpen: false,
        listName: '',
        isListNameEmptyError: false
    }

    handleOpen = () => {
        this.setState({isOpen: true})
    };

    handleClose = () => {
        this.setState({isOpen: false, listName: '', isListNameEmptyError: false})
    };

    handleChange = (e: { target: { value: string; }; }) => {
        this.setState({listName: e.target.value, isListNameEmptyError: false});
    }

    handleAddNewList = () => {
        if (this.state.listName) {
            fetch('https://localhost:5000/familylists', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("Token")
                },
                body: JSON.stringify({name: this.state.listName})
            }).then(res => {
                this.handleClose();
                if (this.props.onAdd !== undefined) {
                    this.props.onAdd();
                } else {
                    alert("Cannot create list.")
                }
            })
        } else {
            this.setState({isListNameEmptyError: true})
        }
    }

    render() {
        return (
            <div>
                <div className="card addNewCard" onClick={this.handleOpen}>
                    <div className="cardBody">
                        Add new list
                        <div className="addNewIcon">
                            <AddCircle sx={{fontSize: 96}}/>
                        </div>
                    </div>
                </div>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} fullWidth={true} maxWidth={'xs'}>
                    <DialogTitle id="alert-dialog-title">Add new list</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            label="List name"
                            margin="dense"
                            variant="outlined"
                            fullWidth
                            error={this.state.isListNameEmptyError}
                            value={this.state.listName}
                            onChange={this.handleChange}/>
                        {
                            this.state.isListNameEmptyError &&
                            <FormHelperText error>List name cannot be empty</FormHelperText>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose}>Cancel</Button>
                        <Button onClick={this.handleAddNewList}>Add List</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
