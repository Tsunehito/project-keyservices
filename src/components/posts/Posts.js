import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const PostList => props => (
    <List>
        <Datagrid>
            <ReferenceField>
                <TextField source="userId" reference="users" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);