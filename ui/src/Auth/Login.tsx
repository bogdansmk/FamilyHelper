import React from 'react';
import SimpleButton from '../components/Buttons/SimpleButton';
import Header from "../components/Header/Header";
import "./Login.css";


interface ILoginPageState {
    email?: string;
    password?: string;
}

interface ILoginPageProps {
}

export default class LoginPage extends React.Component<ILoginPageState, ILoginPageProps> {

    state: ILoginPageState = {
        email: '',
        password: '',
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
                placeholder="Email"
                value={this.state.email}
            />
        )
    }

    renderPasswordInput() {
        return (
            <input
                className='loginInput'
                onChange={this.onPasswordChange}
                placeholder="Password"
                value={this.state.password}
            />
        )
    }

    submit = () => {
        console.log(this.state?.email)
        console.log(this.state?.password)
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
                        <div className='loginRightPart'>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}