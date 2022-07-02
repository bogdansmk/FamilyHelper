import React from 'react';
import SimpleButton from '../components/Buttons/SimpleButton';
import Header from '../components/Header/Header';
import "./Register.css"

interface IRegistrationProps {
}

interface IRegisterPageState {
    email?: string;
    password?: string;
    secondPassword?: string;
    name?: string;
}

export default class RegistrationPage extends React.Component<IRegistrationProps, IRegisterPageState> {
    state: IRegisterPageState = {
        email: '',
        password: '',
        secondPassword: '',
        name: '',
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
                </div>
            </>
        );
    }
}
