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

export const PaniersList = (props) => (
    <List
        {...props}
    >
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <NumberField source="prix" />
            <TextField source="name" />
            <TextField source="description" />
            <NumberField source="quantite" />
            <BooleanField source="is_active" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/paniers" />
            <DeleteButton basePath="/paniers" />
        </Datagrid>
    </List>
);

const PanierTitle = ({ record }) => {
    return <span>Panier {record ? `${record.id} : "${record.name}"` : ''}</span>;
};

export const PaniersEdit = (props) => (
    <Edit title={<PanierTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="prix" />
            <TextInput source="name" />
            <TextInput source="description" multiline />
            <TextInput source="quantite" />
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Edit>
);

export const PaniersCreate = (props) => (
    <Create title="Creat new Panier !" {...props}>
        <SimpleForm>
            <TextInput source="prix" />
            <TextInput source="name" />
            <TextInput source="description" multiline />
            <TextInput source="quantite" />
            <BooleanInput source="is_active" />
        </SimpleForm>
    </Create>
);