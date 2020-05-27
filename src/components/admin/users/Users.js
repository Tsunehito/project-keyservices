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
    ChipField,
    BooleanField,
    EditButton,
    DeleteButton,
    TextInput,
    SelectInput,
    BooleanInput,
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
            <TextField source="address" />
            <TextField source="codePostal" />
            <TextField source="city" />
            <TextField source="country" />
            <ChipField source="type" />
            <BooleanField source="is_active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/users" />
            <DeleteButton basePath="/users" />
        </Datagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `${record.id} : "${record.lastname} ${record.firstname}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="lastname" />
            <TextInput source="firstname" />
            <TextInput source="email" type="email" />
            <TextInput source="password" type="password" />
            <TextInput source="telephone" />
            <TextInput source="address" />
            <TextInput source="codePostal" />
            <TextInput source="city" />
            <TextInput source="country" />
            <SelectInput  source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = (props) => (
    <Create title="Creat new user !" {...props}>
        <SimpleForm>
            <TextInput source="lastname" label="Last name"/>
            <TextInput source="firstname" label="First name"/>
            <TextInput source="email" label="Email Address" type="email"/>
            <TextInput source="password" label="Password" type="password" initiallyVisible />
            <TextInput source="telephone" label="Telephone"/>
            <TextInput source="address" label="Address"/>
            <TextInput source="codePostal" />
            <TextInput source="city" />
            <TextInput source="country" />
            <SelectInput  source="type" choices={[
                { id: 'hote', name: 'hote' },
                { id: 'voyageur', name: 'voyageur' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Create>
);