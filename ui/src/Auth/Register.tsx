import React from 'react';
import { Navigate } from 'react-router-dom';
import SimpleButton from '../components/Buttons/SimpleButton';
import Header from '../components/Header/Header';
import UserReg from '../Models/UserReg';
import "./Register.css";

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
            <input
                className='registerInput'
                onChange={this.onEmailChange}
                placeholder="Email"
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
            <input
                className='registerInput'
                onChange={this.onPasswordChange}
                placeholder="Password"
                value={this.state.password}
            />
        )
    }

    onPasswordChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ password: e.target.value }));
    };

    renderSecondPasswordInput() {
        return (
            <input
                className='registerInput'
                onChange={this.onSecondPasswordChange}
                placeholder="Repeat Password"
                value={this.state.secondPassword}
            />
        )
    }

    onSecondPasswordChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ secondPassword: e.target.value }));
    };

    renderNameInput() {
        return (
            <input
                className='registerInput'
                onChange={this.onNameChange}
                placeholder="Name"
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
            fetch('/api', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user })
            }).then(res => res.json())
                .then(
                    (result) => {
                        if (result.status === 200) {
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
        console.log(this.state?.email)
        console.log(this.state?.password)
        console.log(this.state?.secondPassword)
        console.log(this.state?.name)
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
                                <SimpleButton
                                    type="submit"
                                    className="registerButton"
                                    disabled={false}
                                    onClick={this.submit}
                                    text={"Register"}
                                />
                            </div>
                        </div>
                    </div>
                    {this.state.registraionSuccess && (<Navigate to="/Lists" replace={true} state />)}
                </div>
            </>
        );
    }
}
