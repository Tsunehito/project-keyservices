import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import KSUrlField from './KSUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="lastname" />
            <TextField source="firstname" />
            <EmailField source="email" />
            <TextField source="telephone" />
            <TextField source="adress" />
            <TextField source="type" />
            <TextField source="createdAt" />
            <TextField source="updatedAt" />
        </Datagrid>
    </List>
);