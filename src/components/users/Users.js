import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import Ky_UrlField from './Ky_UrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <Ky_UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);