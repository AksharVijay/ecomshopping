import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                    <Link to="/" >
                        <img src={logo} className="navbar-brand" alt="logo"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/blog" className="nav-link">
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/contact" className="nav-link">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto">
                        <button>
                            <i className="fas fa-cart-plus"/>
                            My Cart
                        </button>
                    </Link>

                </nav>
            </div>
        )
    }
}

export default Navbar;