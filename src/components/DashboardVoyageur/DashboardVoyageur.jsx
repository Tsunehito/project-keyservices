import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

class DashboardVoyageur extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const {user} = this.props.auth;

        return (
            <div class="jumbotron text-center">
                <h1 className="display-4">Bonjour, {user.firstname}</h1>
                <p className="lead"> Bienvenue sur votre compte keyService</p>
            </div>
        );
    }
}

DashboardVoyageur.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {logoutUser}
)(DashboardVoyageur);
