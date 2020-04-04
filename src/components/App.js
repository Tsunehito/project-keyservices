import React from 'react';
import { Admin, Resource, ListGuesser  } from 'react-admin';
import { UserList } from './users/Users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (

  <Admin dataProvider={dataProvider} >
    <Resource name="posts" list={ListGuesser} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
