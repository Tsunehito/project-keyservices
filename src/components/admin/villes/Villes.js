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
    BooleanField,
    EditButton,
    DeleteButton,
    TextInput,
    BooleanInput,
} from 'react-admin'

export const VilleList = (props) => (
    <List
        {...props}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <NumberField source="nb_concierge" />
            <BooleanField source="statut" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/villes" />
            <DeleteButton basePath="/villes" />
        </Datagrid>
    </List>
);

const VilleTitle = ({ record }) => {
    return <span>Ville {record ? `${record.id} : "${record.name}"` : ''}</span>;
};

export const VilleEdit = (props) => (
    <Edit title={<VilleTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="nb_concierge" />
            <BooleanInput source="statut" />
        </SimpleForm>
    </Edit>
);

export const VilleCreate = (props) => (
    <Create title="Creat new Ville !" {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="nb_concierge" />
            <BooleanInput source="statut" />
        </SimpleForm>
    </Create>
);