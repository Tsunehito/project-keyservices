import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './dashboard/Dashboard';
import authProvider from './auth/authProvider';
import dataProvider from "./dataProvider";
import KSLoginPage from './login/KSLoginPage'

// Lists
import { AnnonceList, AnnonceEdit, AnnonceCreate } from './annonces/Annonces';
import { UserList, UserEdit, UserCreate } from './users/Users';
import { EmployeList, EmployeEdit, EmployeCreate } from './employes/Employes';
import { EtatsLogementList, EtatsLogementEdit, EtatsLogementCreate} from './etats_logements/EtatsLogements';

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
import ServiveIcon from '@material-ui/icons/TransferWithinAStation';
import TacheIcon from '@material-ui/icons/PlaylistAddCheck';
import TarifIcon from '@material-ui/icons/MonetizationOn';
import VilleIcon from '@material-ui/icons/LocationCity';

const App = () => (
  <Admin loginPage={KSLoginPage}
         dashboard={Dashboard}
         authProvider={authProvider}
         dataProvider={dataProvider}
  >
    <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={UserIcon} />

    <Resource
        name="annonces"
        list={AnnonceList}
        edit={AnnonceEdit}
        create={AnnonceCreate}
        icon={AnnonceIcon} />

    <Resource
        name="employes"
        list={EmployeList}
        edit={EmployeEdit}
        create={EmployeCreate}
        icon={EmployeeIcon} />

    <Resource
        name="etats_logement"
        list={EtatsLogementList}
        edit={EtatsLogementEdit}
        create={EtatsLogementCreate}
        icon={EtatsLogementIcon} />
  </Admin>
);

export default App;
