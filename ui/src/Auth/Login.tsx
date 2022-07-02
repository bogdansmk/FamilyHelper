import React from 'react';
import { Link } from 'react-router-dom';

interface ILoginProps {
}

class LoginPage extends React.Component<ILoginProps, any> {
    render() {
        return (
            <div>
                <span>login page</span>
                <p>
                    <Link to="/Register">Register</Link>
                </p>
            </div>
        );
    }
}
export default LoginPage;