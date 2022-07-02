import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import "./Login.css"

interface ILoginProps {
}

class LoginPage extends React.Component<ILoginProps, any> {
    render() {
        return (
            <>
                <Header
                    pageTitle='Authorization'
                    rightPartText='Create Account'
                    rightPartUrl='/Register'
                />
                <div className="main loginMain">
                    <span>login page</span>
                    <p>
                        <Link to="/Register">Register</Link>
                    </p>
                </div>
            </>
        );
    }
}

export default LoginPage;
