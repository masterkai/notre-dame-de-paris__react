import React from 'react';
import Logo from '../images/gjun.svg'

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <div className="row">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} alt="" className="img-responsive logo"/>
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}