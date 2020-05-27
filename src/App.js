import React, {Component} from 'react';
import {Admin, Resource} from 'react-admin';
import {createHashHistory} from 'history';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router';
import createAdminStore from './createAdminStore';

//tous les liens <a> et <link> doivent passer par cette page car c'est le routeur


//le navbar des principaux pages du sites
import NavBar from './components/NavBar/NavBar';

//le footer
import Footer from './components/Footer/IndexFooter';

//la page d'accueil
import Home from './components/PageAccueil/IndexPageAcceuil';

//les autres pages principales---------------------------------
import Villes from './components/PageVilles/IndexPageVilles';
import Contacts from './components/PageNousContacter/IndexPageNousContacter';
import Tarifs from './components/PageTarifs/IndexPageTarifs';
import Services from './components/PageServices/IndexPageServices';
import APropos from './components/PageAPropos/IndexPageAPropos';
//-------------------------------------------------------------

//les pages d'authentifications--------------------------------
import Login from './components/auth/Login';
import Inscription1 from './components/auth/Register';
import LoginAfterRegister from './components/auth/LoginAfterRegister';
import LoginAfterReset from './components/auth/LoginAfterReset';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
//--------------------------------------------------------------


//partie Hote------------------------------------------------
//le navbar et le sidebar pour les pages du panel des hotes
import NavEtSideHote from "./components/DashboardHote/NavEtSideHote/LeftSideBar";
//la page d'acceuil d'hôte
import DashboardHote from "./components/DashboardHote/DashboardHote";
//la page qui affiche les logements par hote
import LogementsList from "./components/DashboardHote/LogementsList";
//
import AddLogementPage from "./components/DashboardHote/AddLogementPage";
//
import DisplayLogement from "./components/DashboardHote/DisplayLogement";

import LogementAvailability from "./components/DashboardHote/LogementAvailability";

import UploadImages from "./components/DashboardHote/UploadImages";

import UserProfile from "./components/DashboardHote/UserProfile";
//----------------------------------------------------------------------------


//partie Voyageur---------------------------------------------------------------
//le navbar et le sidebar pour les pages du panel des hotes
import NavEtSideVoyageur from "./components/DashboardVoyageur/NavEtSideVoyageur/LeftSideBar";
//la page d'accueil voyageur
import DashboardVoyageur from "./components/DashboardVoyageur/DashboardVoyageur";

import PanierLists from "./components/DashboardVoyageur/PanierLists";
//---------------------------------------------------------------------------------

import NotFound from "./components/NotFound";

//en rapport avec la gestion des états sur notre site web-----------------------------------
import {Provider} from "react-redux";
import store from "./store";
//------------------------------------------------------------------------------------------


/*lorsque l'hote ou le voyageur revient sur le site, et que sa session n'a pas expiré, s'il clique
pour se connecter ou s'inscrire il sera directement redirigé vers son compte */
import {setCurrentUser, logoutUser} from "./actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/private-route/PrivateRoute";

// for Admin ------------------
import Dashboard from './components/admin/dashboard/Dashboard';
import authProvider from './components/admin/auth/authProvider';
import dataProvider from "./components/admin/dataProvider";
import KSLoginPage from './components/admin/login/KSLoginPage'

// Lists
import {AnnonceList, AnnonceEdit, AnnonceCreate} from './components/admin/annonces/Annonces';
import {UserList, UserEdit, UserCreate} from './components/admin/users/Users';
import {LogementList, LogementEdit, LogementCreate} from './components/admin/logements/Logements';
import {EmployeList, EmployeEdit, EmployeCreate} from './components/admin/employes/Employes';
import {
    EtatsLogementList,
    EtatsLogementEdit,
    EtatsLogementCreate
} from './components/admin/etats_logements/EtatsLogements';
import {
    CommandesPanierList,
    CommandesPanierEdit,
    CommandesPanierCreate
} from './components/admin/commandes_paniers/CommandesPaniers';
import {
    DisponibiliteList,
    DisponibiliteEdit,
    DisponibiliteCreate
} from './components/admin/disponibilites/Disponibilites';
import {PanierList, PanierEdit, PanierCreate} from './components/admin/paniers/Paniers';
import {FactureList, FactureEdit, FactureCreate} from './components/admin/factures/Factures';
import {MessageList, MessageEdit, MessageCreate} from './components/admin/messages/Messages';
import {ServiceList, ServiceEdit, ServiceCreate} from './components/admin/services/Services';
import {TacheList, TacheEdit, TacheCreate} from './components/admin/taches/Taches';
import {VilleList, VilleEdit, VilleCreate} from './components/admin/villes/Villes';
import {TarifList, TarifEdit, TarifCreate} from './components/admin/tarifs/Tarifs';
import {RoleList, RoleEdit, RoleCreate} from './components/admin/roles/Roles';

// Icons
import AnnonceIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import EmployeeIcon from '@material-ui/icons/SupervisedUserCircle';
import CommandePanierIcon from '@material-ui/icons/ListAlt';
import DisponibilityIcon from '@material-ui/icons/DomainDisabled';
import EtatsLogementIcon from '@material-ui/icons/Done';
import FactureIcon from '@material-ui/icons/Receipt';
import LogementIcon from '@material-ui/icons/Apartment';
import MessageIcon from '@material-ui/icons/QuestionAnswer';
import PanierIcon from '@material-ui/icons/ShoppingCart';
import RoleIcon from '@material-ui/icons/Wc';
import ServiceIcon from '@material-ui/icons/TransferWithinAStation';
import TacheIcon from '@material-ui/icons/PlaylistAddCheck';
import TarifIcon from '@material-ui/icons/MonetizationOn';
import VilleIcon from '@material-ui/icons/LocationCity';

// for Admin ------------------

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());

        // Redirect to login
        window.location.href = "./login";
    }
}
//------------------------------------------------------------------------------------------------

const history = createHashHistory();

export default class App extends Component {
    render() {
        return (
            // le provider doit être appelé avant le routeur
            <Provider store={store}>
                <Router>
                    <Switch>
                        {/*il route vers la page de login*/}
                        <Route path='/(login)' component={AuthContainer}/>

                        {/*il route vers la page d'inscription*/}
                        <Route path='/(inscription1)' component={AuthContainer}/>

                        {/*il route vers la page de login après l'inscription*/}
                        <Route path='/(loginAfterRegister)' component={AuthContainer}/>
                        <Route path='/(loginAfterReset)' component={AuthContainer}/>
                        <Route path='/(forgetPassword)' component={AuthContainer}/>
                        <Route path='/resetPassword/:slug' component={AuthContainer}/>

                        {/*ici on a les routes privées. seul les utilisateurs ayant une session peuvent y accéder*/}
                        <PrivateRoute path="/(DashboardVoyageur)" component={Dashboard1}/>
                        <PrivateRoute path="/paniers" component={Dashboard1}/>
                        <PrivateRoute path="/dashboardHote" component={Dashboard2}/>
                        <PrivateRoute path="/logements" component={Dashboard2}/>
                        <PrivateRoute path="/logements/addLogementPage" component={Dashboard2}/>
                        <PrivateRoute path="/logements/:id" component={Dashboard2}/>
                        <PrivateRoute path="/logements/:id/disponibilites" component={Dashboard2}/>
                        <PrivateRoute path="/logements/:id/images" component={Dashboard2}/>
                        <PrivateRoute path="/profil/:id" component={Dashboard2}/>

                        {/*cette route regroupe les pages principaux du site*/}
                        <Route exact path='/' component={DefaultContainer}/>
                        <Route path='/contacts' component={DefaultContainer}/>
                        <Route path='/aPropos' component={DefaultContainer}/>
                        <Route path='/villes' component={DefaultContainer}/>
                        <Route path='/tarifs' component={DefaultContainer}/>
                        <Route path='/services' component={DefaultContainer}/>

                        {/*route for admin*/}
                        <Route path='/admin' component={ksAdmin}/>

                        <Route component={NotFound}/>

                    </Switch>
                </Router>
            </Provider>
        );
    }
}
const AuthContainer = () => (
    <div>
        <Route path="/login" component={Login}/>
        <Route path="/inscription1" component={Inscription1}/>
        <Route path="/loginAfterRegister" component={LoginAfterRegister}/>
        <Route path='/loginAfterReset' component={LoginAfterReset}/>
        <Route path="/forgetPassword" component={ForgetPassword}/>
        <Route path="/resetPassword/:slug" component={ResetPassword}/>
    </div>

)

/*const LoginContainer = () => (
      <div>
        <Route path="/login" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
      </div>
)

const SignupContainer = () => (
      <div>
        <Route path="/inscription1" render={() => <Redirect to="/inscription1" />} />
        <Route path="/inscription1" component={Inscription1} />
      </div>
)

const LoginAfterRegisterContainer= () => (
      <div>
        <Route path="/loginAfterRegister" render={() => <Redirect to="/loginAfterRegister" />} />
        <Route path="/loginAfterRegister" component={LoginAfterRegister} />
      </div>
  )*/


const Dashboard1 = () => (
    <div>
        <NavEtSideVoyageur/>
        <Route path="/dashboardVoyageur" render={() => <Redirect to="/dashboardVoyageur"/>}/>
        <Route path="/dashboardVoyageur" component={DashboardVoyageur}/>
        <Route path="/paniers" component={PanierLists}/>
    </div>
)

const Dashboard2 = () => (
    <div>
        <NavEtSideHote/>
        <Switch>
            <Route exact path="/dashboardHote" component={DashboardHote}/>
            <Route exact path="/logements" component={LogementsList}/>
            <Route path="/logements/addLogementPage" component={AddLogementPage}/>
            <Route exact path="/logements/:id" component={DisplayLogement}/>
            <Route path="/logements/:id/disponibilites" component={LogementAvailability}/>
            <Route path="/logements/:id/images" component={UploadImages}/>
            <Route exact path="/profil/:id" component={UserProfile}/>
        </Switch>
    </div>
)

const DefaultContainer = () => (
    <div>
        <NavBar/>
        <Route exact path='/' component={Home}/>
        <Route path='/contacts' component={Contacts}/>
        <Route path='/aPropos' component={APropos}/>
        <Route path='/villes' component={Villes}/>
        <Route path='/tarifs' component={Tarifs}/>
        <Route path='/services' component={Services}/>
        <Footer/>
    </div>
)

const ksAdmin = () => (
    <Provider
        store={createAdminStore({
            authProvider,
            dataProvider,
            history,
        })}
    >
        <Admin loginPage={KSLoginPage}
               dashboard={Dashboard}
               authProvider={authProvider}
               dataProvider={dataProvider}
               history={history}
               title="KeyServices Admin"
        >
            <Resource
                name="users"
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                icon={UserIcon}/>

            <Resource
                name="logements"
                list={LogementList}
                edit={LogementEdit}
                create={LogementCreate}
                icon={LogementIcon}/>

            <Resource
                name="annonces"
                list={AnnonceList}
                edit={AnnonceEdit}
                create={AnnonceCreate}
                icon={AnnonceIcon}/>

            <Resource
                name="etats_logement"
                list={EtatsLogementList}
                edit={EtatsLogementEdit}
                create={EtatsLogementCreate}
                icon={EtatsLogementIcon}/>

            <Resource
                name="commandes_paniers"
                list={CommandesPanierList}
                edit={CommandesPanierEdit}
                create={CommandesPanierCreate}
                icon={CommandePanierIcon}/>

            <Resource
                name="disponibilites"
                list={DisponibiliteList}
                edit={DisponibiliteEdit}
                create={DisponibiliteCreate}
                icon={DisponibilityIcon}/>

            <Resource
                name="paniers"
                list={PanierList}
                edit={PanierEdit}
                create={PanierCreate}
                icon={PanierIcon}/>

            <Resource
                name="factures"
                list={FactureList}
                edit={FactureEdit}
                create={FactureCreate}
                icon={FactureIcon}/>

            <Resource
                name="messages"
                list={MessageList}
                edit={MessageEdit}
                create={MessageCreate}
                icon={MessageIcon}/>

            <Resource
                name="services"
                list={ServiceList}
                edit={ServiceEdit}
                create={ServiceCreate}
                icon={ServiceIcon}/>

            <Resource
                name="taches"
                list={TacheList}
                edit={TacheEdit}
                create={TacheCreate}
                icon={TacheIcon}/>

            <Resource
                name="villes"
                list={VilleList}
                edit={VilleEdit}
                create={VilleCreate}
                icon={VilleIcon}/>

            <Resource
                name="employes"
                list={EmployeList}
                edit={EmployeEdit}
                create={EmployeCreate}
                icon={EmployeeIcon}/>

            <Resource
                name="tarifs"
                list={TarifList}
                edit={TarifEdit}
                create={TarifCreate}
                icon={TarifIcon}/>

            <Resource
                name="roles"
                list={RoleList}
                edit={RoleEdit}
                create={RoleCreate}
                icon={RoleIcon}/>

        </Admin>
    </Provider>
);
