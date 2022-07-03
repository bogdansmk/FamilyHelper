import React from 'react';
import { Navigate } from 'react-router-dom';
import SimpleButton from '../components/Buttons/SimpleButton';
import Header from "../components/Header/Header";
import "./Login.css";


interface ILoginPageState {
    email?: string;
    password?: string;
    authSuccess?: boolean;
}

interface ILoginPageProps {
}

export default class LoginPage extends React.Component<ILoginPageState, ILoginPageProps> {

    state: ILoginPageState = {
        email: '',
        password: '',
        authSuccess: false,
    }

    renderInfoText() {
        return (
            <span className='loginInfoText'>
                Log in using the login<br />
                and password from your<br />
                Family Helper account.
            </span>
        );
    }

    onEmailChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ email: e.target.value }));
    };

    onPasswordChange = (e: { target: { value: any; }; }) => {
        this.setState(state => ({ password: e.target.value }));
    };

    renderEmailInput() {
        return (
            <input
                className='loginInput'
                onChange={this.onEmailChange}
                value={this.state.email}
            />
        )
    }

    renderPasswordInput() {
        return (
            <input
                className='loginInput'
                onChange={this.onPasswordChange}
                value={this.state.password}
            />
        )
    }

    setAuthorized = () => {
        this.setState(state => ({ authSuccess: true }));
    };

    submitEmailAuth = () => {
        alert("Email authorization isn`t implemented yet.");
    }

    submit = () => {
        if (this.state.email && this.state.password) {
            fetch('https://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Email: this.state.email, Password: this.state.password })
            }).then(
                (result) => {
                    if (result.status == 200) {
                        const bearer = result.json()
                        this.setAuthorized();
                    }
                    else {
                        alert("Я без понятия по какой причине Витя отправил на клиент не 200 статус, но ты не будешь авторизован.")
                    }
                }
            )
        }
        else {
            alert("Please fill all fields to authorize")
        }
    }

    render() {
        return (
            <>
                <Header
                    pageTitle='Authorization'
                    rightPartText='Create Account'
                    rightPartUrl='/Register'
                />
                <div className="loginMainForm">
                    <div className='loginMainInner'>
                        <div className='loginLeftPart'>
                            {this.renderInfoText()}
                            <div className='loginFields'>
                                <div className='loginFieldsGroup'>
                                    <span className='emailText'>Email</span>
                                    {this.renderEmailInput()}
                                </div>
                                <div className='loginFieldsGroup'>
                                    <span className='passwordText'>Password</span>
                                    {this.renderPasswordInput()}
                                </div>
                            </div>
                            <SimpleButton
                                type="submit"
                                className="loginButton"
                                disabled={false}
                                onClick={this.submit}
                                text={"Enter"}
                            />
                        </div>
                        <div className='loginMiddlePart'>
                            <div className="vertical"></div>
                        </div>
                        <div className='loginRightPart'>
                            <div className='loginRightPartInner'>
                                <span className='emaiLoginText'>Sign in through a Gmail.</span>
                                <SimpleButton
                                    type="submit"
                                    className="loginButton"
                                    disabled={false}
                                    onClick={this.submitEmailAuth}
                                    text={"Gmail"}
                                />
                            </div>
                        </div>
                    </div>
                    {this.state.authSuccess && (<Navigate to="/Lists" replace={true} state />)}
                </div>
            </>
        );
    }
}