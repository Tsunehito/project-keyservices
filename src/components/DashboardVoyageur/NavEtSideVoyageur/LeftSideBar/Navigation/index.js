import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../../../../actions/authActions";
import './style.scss';

class Navigation extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const {user} = this.props.auth;

        return (
            <nav class="navbar navbar-expand-lg  border-bottom navig" style={{backgroundColor: 'white'}}>
                <a className="navbar-brand" href="/">
                    <img src="assets/keyLogo_last.jpg" style={{width: "80px", height: "60px"}} alt="" />
                </a>


                <button class="navbar-toggler" type="button" style={{backgroundColor: '#ed7e24'}} data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li>

                            <a class="nav-link" href="/#"
                               style={{color: '#ed7e24', fontSize: '20px', marginRight: '10px'}}>
                                <i className="fas fa-shopping-cart"
                                   style={{color: '#ed7e24', fontSize: '20px', marginRight: '3px'}}></i>

                            </a>

                        </li>
                        <li>

                            <a class="nav-link" href="/#"
                               style={{color: '#ed7e24', fontSize: '20px', marginRight: '10px'}}>
                                <i className="fas fa-bell"
                                   style={{color: '#ed7e24', fontSize: '20px', marginRight: '3px'}}></i>

                            </a>

                        </li>
                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle " href="/#" id="navbarDropdown"
                               style={{color: '#ed7e24', fontSize: '20px', marginRight: '3px', textAlign: 'right'}}
                               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"
                                   style={{color: '#ed7e24', fontSize: '20px', marginRight: '3px'}}></i>
                                {user.firstname}
                            </a>
                            <div class="dropdown-menu dropdown-menu-right"
                                 style={{textAlign: 'right', width: '20px', float: 'right'}}
                                 aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="/#">Profil</a>
                                <a class="dropdown-item" onClick={this.onLogoutClick} href="/#">Se déconnecter</a>

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


        );
    }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(Navigation);
