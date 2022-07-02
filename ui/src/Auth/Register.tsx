import React from 'react';
import { Link } from 'react-router-dom';

interface IRegistrationProps {
}

class RegistrationPage extends React.Component<IRegistrationProps, any> {
    render() {
        return (
            <div>
                <span>registration page</span>
                <p>
                    <Link to="/">Login</Link>
                </p>
            </div>
        );
    }
}
export default RegistrationPage;