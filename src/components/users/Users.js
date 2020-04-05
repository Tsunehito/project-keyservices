import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import KSUrlField from './KSUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <KSUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);