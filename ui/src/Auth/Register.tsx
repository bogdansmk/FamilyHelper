import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import UserReg from '../Models/UserReg';
import "./Register.css";
import {Button, TextField} from "@mui/material";

interface IRegistrationProps {
}

interface IRegisterPageState {
    email?: string;
    password?: string;
    secondPassword?: string;
    name?: string;
    registraionSuccess?: boolean;
}

export default class RegistrationPage extends React.Component<IRegistrationProps, IRegisterPageState> {
    state: IRegisterPageState = {
        email: '',
        password: '',
        secondPassword: '',
        name: '',
        registraionSuccess: false,
    }

    renderEmailInput() {
        return (
            <TextField
                className='registerInput'
                variant="outlined"
                fullWidth
                size="small"
                onChange={this.onEmailChange}
                value={this.state.email}
            />
        )
    }

    setAuthorized = () => {
        this.setState(state => ({ registraionSuccess: true }));
    };

    onEmailChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ email: e.target.value }));
    };

    renderPasswordInput() {
        return (
            <TextField
                className='registerInput'
                variant="outlined"
                fullWidth
                size="small"
                type="password"
                onChange={this.onPasswordChange}
                value={this.state.password}
            />
        )
    }

    onPasswordChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ password: e.target.value }));
    };

    renderSecondPasswordInput() {
        return (
            <TextField
                className='registerInput'
                variant="outlined"
                fullWidth
                size="small"
                type="password"
                onChange={this.onSecondPasswordChange}
                value={this.state.secondPassword}
            />
        )
    }

    onSecondPasswordChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ secondPassword: e.target.value }));
    };

    renderNameInput() {
        return (
            <TextField
                className='registerInput'
                variant="outlined"
                fullWidth
                size="small"
                onChange={this.onNameChange}
                value={this.state.name}
            />
        )
    }

    onNameChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ name: e.target.value }));
    };

    submit = () => {
        if (this.state.password !== this.state.secondPassword) {
            alert("Passwords are not match")
        }
        else if (this.state.email && this.state.password && this.state.secondPassword && this.state.name) {
            const user = new UserReg(this.state.email, this.state.password, this.state.name);
            fetch('https://localhost:5000/Auth/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        Email: this.state.email,
                        Password: this.state.password,
                        RepeatPassword: this.state.password,
                        FirstName: this.state.name,
                    })
            }).then(
                (result) => {
                    if (result.status === 200) {
                        const bearer = result.json()
                        this.setAuthorized();
                    }
                    else {
                        alert("Я без понятия по какой причине Витя отправил на клиент не 200 статус, но ты не будешь зарегестрирован.")
                    }
                }
            )
        }
        else {
            alert("Please fill all fields to continue registration")
        }
    }

    render() {
        return (
            <>
                <Header
                    pageTitle='Registration'
                    rightPartText='Authorize'
                    rightPartUrl='/'
                />
                <div className="registerMainForm">
                    <div className='registerMainInner'>
                        <div className='registerFields'>
                            <div className='registerFieldsGroup'>
                                <span className='emailText'>Email</span>
                                {this.renderEmailInput()}
                            </div>
                            <div className='registerFieldsGroup'>
                                <span className='passwordText'>Password</span>
                                {this.renderPasswordInput()}
                            </div>
                            <div className='registerFieldsGroup'>
                                <span className='passwordText'> Repeat Password</span>
                                {this.renderSecondPasswordInput()}
                            </div>
                            <div className='registerFieldsGroup'>
                                <span className='passwordText'>Name</span>
                                {this.renderNameInput()}
                            </div>
                            <div className='rButton'>
                                <Button
                                    type="submit"
                                    className="registerButton"
                                    variant="contained"
                                    disableElevation
                                    disabled={false}
                                    onClick={this.submit}
                                    style={{minWidth: 125}}
                                >
                                    Register
                                </Button>
                            </div>
                        </div>
                    </div>
                    {this.state.registraionSuccess && (<Navigate to="/Lists" replace={true} state />)}
                </div>
            </>
        );
    }
}
