import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import Dashboard from './dashboard/Dashboard';
import authProvider from './auth/authProvider';
import ks_dataprovider from './dataProvider';
import { PostList, PostEdit, PostCreate } from './posts/Posts';
import { UserList } from './users/Users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
// import jsonAPIRestClient from "aor-jsonapi-client/build/restClient";
import KSLoginPage from './login/KSLoginPage';

const apiUrl = 'http://localhost:3000/api';
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('accessToken');
    options.headers.set('x-access-token', token);
    options.users = {
        authenticated: true,
        token: token
    };
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider(apiUrl, httpClient);
// const dataProvider = ks_dataprovider;
// const restClient = jsonAPIRestClient(apiUrl);

const App = () => (
  <Admin
      loginPage={KSLoginPage}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
      // restClient={restClient}
  >
    <Resource
      name="posts" 
      list={PostList} 
      edit={PostEdit} 
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
