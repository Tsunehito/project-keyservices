import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import Dashboard from './dashboard/Dashboard';
import authProvider from './auth/authProvider';
import { PostList, PostEdit, PostCreate } from './posts/Posts';
import { UserList } from './users/Users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import simpleRestProvider from 'ra-data-simple-rest';
import KSLoginPage from './login/KSLoginPage';

const apiUrl = 'https://localhost:3000';
const httpClient = (url, options = {}) => {
    if (options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('accessToken');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(apiUrl, httpClient);

const App = () => (
  <Admin loginPage={KSLoginPage} dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
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
