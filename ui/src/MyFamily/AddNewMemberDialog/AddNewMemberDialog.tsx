import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle, Divider,
    FormHelperText,
    TextField
} from "@mui/material";
import { Add, ContentCopy } from "@mui/icons-material";
import './AddNewMemberDialog.css'

interface IAddNewMemberDialogState {
    isOpen: boolean
    emails: string
    isEmailsEmptyError: boolean
    invitationLink?: string
}

interface IAddNewMemberDialogProps {
    getMembers: () => void
}

export default class AddNewMemberDialog extends React.Component<IAddNewMemberDialogProps, IAddNewMemberDialogState> {
    state: IAddNewMemberDialogState = {
        isOpen: false,
        emails: '',
        isEmailsEmptyError: false,
        invitationLink: 'https://family.helper/join/2H1Aj19Lx'
    }

    handleOpen = () => {
        this.setState({ isOpen: true })
    };

    handleClose = () => {
        this.setState({ isOpen: false, emails: '', isEmailsEmptyError: false })
    };

    handleChange = (e: { target: { value: string; }; }) => {
        this.setState({ emails: e.target.value, isEmailsEmptyError: false });
    }

    sendInvitation = () => {
        if (this.state.emails) {
            fetch('https://localhost:5000/Family/members', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("Token")
                },
                body: JSON.stringify({ email: this.state.emails })
            }).then(res => {
                this.handleClose();
                this.props.getMembers();
            })
        } else {
            this.setState({ isEmailsEmptyError: true })
        }
    }


    render() {
        return (
            <>
                <div className="addNewMemberBtn" onClick={this.handleOpen}>
                    <Add sx={{ fontSize: 28 }} />
                    Add more
                </div>
                <Dialog open={this.state.isOpen} onClose={this.handleClose} fullWidth={true}>
                    <DialogTitle>Add new members</DialogTitle>
                    <DialogContent>
                        <div className="row">
                            <TextField
                                // autoFocus
                                className="emailsInput"
                                label="Enter emails separated by comma"
                                variant="outlined"
                                fullWidth
                                size="small"
                                error={this.state.isEmailsEmptyError}
                                value={this.state.emails}
                                onChange={this.handleChange}
                            />
                            <Button variant="contained" disableElevation onClick={this.sendInvitation}>
                                Send invitation
                            </Button>
                        </div>
                        {
                            this.state.isEmailsEmptyError &&
                            <FormHelperText error>Emails field cannot be empty</FormHelperText>
                        }

                        <Divider className="divider" textAlign="left">OR</Divider>

                        <div className="label">Copy invitation link</div>
                        <div className="copyToClipboardInput">
                            <TextField
                                variant="outlined"
                                fullWidth
                                disabled
                                size="small"
                                error={this.state.isEmailsEmptyError}
                                value={this.state.invitationLink}
                                onChange={this.handleChange}
                            />
                            <div className="copyIcon">
                                <ContentCopy sx={{ fontSize: 20 }} />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}
