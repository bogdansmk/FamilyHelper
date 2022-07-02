import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/Header/Header";

interface ILoginProps {
}

class LoginPage extends React.Component<ILoginProps, any> {
    render() {
        return (
            <>
                <Header/>
                <div className="main">
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
