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
} from 'react-admin'

export const EmployeList = (props) => (
    <List
        {...props}
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
            <ChipField source="role" />
            <BooleanField source="is_active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/employes" />
            <DeleteButton basePath="/employes" />
        </Datagrid>
    </List>
);

const EmployeTitle = ({ record }) => {
    return <span>Employee {record ? `${record.id} : "${record.lastname} ${record.firstname}"` : ''}</span>;
};

export const EmployeEdit = (props) => (
    <Edit title={<EmployeTitle />} {...props}>
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
            <SelectInput  source="role" choices={[
                { id: 'moderator', name: 'moderator' },
                { id: 'admin', name: 'admin' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export const EmployeCreate = (props) => (
    <Create title="Creat new Employee !" {...props}>
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
            <SelectInput  source="role" choices={[
                { id: 'moderator', name: 'moderator' },
                { id: 'admin', name: 'admin' },
            ]}/>
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Create>
);