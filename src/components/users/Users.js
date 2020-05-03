import React from 'react';
import {
    List,
    Edit,
    Create,
    SimpleForm,
    Datagrid,
    TextField,
    EmailField,
    DateField,
    NumberField,
    EditButton,
    TextInput,
    DateInput,
    SelectArrayInput  ,
    Filter,
} from 'react-admin'

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = (props) => (
    <List
        {...props}
        filters={<UserFilter />}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="lastname" />
            <TextField source="firstname" />
            <EmailField source="email" />
            <NumberField source="telephone" />
            <TextField source="adress" />
            <TextField source="type" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/user" />
        </Datagrid>
    </List>
);

const UserTilte = ({ record }) => {
    return <span>User {record ? `"${record.title}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTilte />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="lastname" label="Last name"/>
            <TextInput source="firstname" label="First name"/>
            <TextInput source="email" label="Email Address" type="email"/>
            <TextInput source="password" label="Password" type="password"/>
            <TextInput source="telephone" label="Telephone"/>
            <TextInput source="adress" label="Address"/>
            <SelectArrayInput  source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <DateInput source="updatedAt" label="Updated at"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Create a user" {...props}>
        <SimpleForm>
            <TextInput source="lastname" label="Last name"/>
            <TextInput source="firstname" label="First name"/>
            <TextInput source="email" label="Email Address" type="email"/>
            <TextInput source="password" label="Password" type="password" initiallyVisible />
            <TextInput source="telephone" label="Telephone"/>
            <TextInput source="adress" label="Address"/>
            <SelectArrayInput   source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <DateInput source="createdAt" label="Created at"/>
            <DateInput source="updatedAt" label="Updated at"  />
        </SimpleForm>
    </Create>
);