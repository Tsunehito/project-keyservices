import React from 'react';
import {
    List,
    Edit,
    Create,
    SimpleForm,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
    DeleteButton,
    TextInput,
} from 'react-admin'

export const RoleList = (props) => (
    <List
        {...props}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/roles" />
            <DeleteButton basePath="/roles" />
        </Datagrid>
    </List>
);

const RoleTitle = ({ record }) => {
    return <span>Role {record ? `${record.id} : "${record.name}"` : ''}</span>;
};

export const RoleEdit = (props) => (
    <Edit title={<RoleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const RoleCreate = (props) => (
    <Create title="Creat new role !" {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);